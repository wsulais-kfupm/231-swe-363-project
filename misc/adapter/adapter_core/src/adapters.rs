use serde::Deserialize;
use serde_with::{serde_as, DefaultOnNull};
use trustfall::provider::Typename;
use trustfall::{
    provider::{
        field_property, resolve_neighbors_with as neighbors, resolve_property_with as property,
        BasicAdapter, ContextIterator, ContextOutcomeIterator, EdgeParameters, TrustfallEnumVertex,
        VertexIterator,
    },
    FieldValue,
};
// use trustfall_core::interpreter::AsVertex;

pub struct TamimiAdapter {
    rt: tokio::runtime::Runtime,
}
pub struct TamimiClient;

#[derive(Debug, PartialEq, Deserialize, TrustfallEnumVertex, Clone)]
pub enum TamimiVertex {
    Category(Category),
    Brand(Brand),
    Product(Product),
    ProductVariant(ProductVariant),
    StoreData(StoreData),
}

#[derive(Debug, Default, PartialEq, Deserialize, Clone)]
pub struct Brand {
    image: Option<String>,
    name: String,
}

#[derive(Debug, Default, PartialEq, Deserialize, Clone)]
pub struct Product {
    brand: Option<Brand>,
    name: String,
    variants: Vec<ProductVariant>,
}

#[derive(Debug, Default, PartialEq, Deserialize, Clone)]
pub struct ProductVariant {
    images: Vec<String>,
    name: String,
    #[serde(rename = "storeSpecificData")]
    store_data: Vec<StoreData>,
}

#[derive(Debug, Default, PartialEq, Deserialize, Clone)]
pub struct StoreData {
    mrp: String,
}

#[serde_as]
#[derive(Debug, Default, PartialEq, Deserialize, Clone)]
pub struct Category {
    name: String,
    description: Option<String>,
    image: Option<String>,
    languages: String,
    slug: String,
    status: String,
    #[serde(rename = "subCategories")]
    #[serde_as(deserialize_as = "DefaultOnNull")]
    subcategories: Vec<Category>,
}

macro_rules! impl_item_property {
    ($contexts:ident, $attr:ident) => {
        Box::new($contexts.map(|ctx| {
            let value = ctx
                .active_vertex()
                .map(|t| match t {
                    TamimiVertex::Category(s) => s.$attr.clone(),
                    TamimiVertex::Brand(s) => s.$attr.clone(),
                    TamimiVertex::Product(s) => s.$attr.clone(),
                    TamimiVertex::ProductVariant(s) => s.$attr.clone(),
                    _ => unreachable!(),
                })
                .into();

            (ctx, value)
        }))
    };
}

impl<'a> BasicAdapter<'a> for TamimiAdapter {
    type Vertex = TamimiVertex;

    fn resolve_starting_vertices(
        &self,
        edge_name: &str,
        parameters: &EdgeParameters,
    ) -> VertexIterator<'a, Self::Vertex> {
        match edge_name {
            "Categories" => self.categories(),
            "Products" => {
                let name = parameters["name"].as_str().unwrap_or_default();
                self.products(name)
            }
            _ => unreachable!(),
        }
    }

    fn resolve_property<V: trustfall::provider::AsVertex<Self::Vertex> + 'a>(
        &self,
        contexts: ContextIterator<'a, V>,
        type_name: &str,
        property_name: &str,
    ) -> ContextOutcomeIterator<'a, V, FieldValue> {
        match (type_name.as_ref(), property_name.as_ref()) {
            (_, "__typename") => Box::new(contexts.map(|ctx| {
                let value = match ctx.active_vertex() {
                    Some(vertex) => vertex.typename().into(),
                    None => FieldValue::Null,
                };

                (ctx, value)
            })),
            ("Brand" | "Category" | "Product" | "ProductVariant", "name") => {
                impl_item_property!(contexts, name)
            }
            _ => unreachable!(),
        }
    }

    fn resolve_neighbors<V: trustfall::provider::AsVertex<Self::Vertex> + 'a>(
        &self,
        contexts: ContextIterator<'a, V>,
        type_name: &str,
        edge_name: &str,
        parameters: &EdgeParameters,
    ) -> ContextOutcomeIterator<'a, V, VertexIterator<'a, Self::Vertex>> {
        match (type_name.as_ref(), edge_name.as_ref()) {
            ("Category", "products") => Box::new(contexts.map(|ctx| {
                let vertex = ctx.active_vertex();
                let products = match vertex {
                    Some(v) => {
                        let category = match v {
                            TamimiVertex::Category(c) => c,
                            _ => unreachable!(),
                        };
                        TamimiAdapter::static_products_in_category(&category.name)
                    }
                    None => Box::new(std::iter::empty()),
                };
                (ctx, products)
            })),
            ("Product", "brand") => Box::new(contexts.map(|ctx| {
                let vertex = ctx.active_vertex();
                let neighbour = match vertex {
                    Some(v) => {
                        let product = v.as_product().unwrap();
                        Box::new(
                            std::iter::once(product.brand.clone())
                                .filter_map(|x| x)
                                .map(TamimiVertex::Brand),
                        )
                    }
                    None => Box::new(std::iter::empty()) as Box<dyn Iterator<Item = TamimiVertex>>,
                };
                (ctx, neighbour)
            })),
            ("Category", "subcategories") => Box::new(contexts.map(|ctx| {
                let vertex = ctx.active_vertex();
                let neighbour = match vertex {
                    Some(v) => {
                        let category = v.as_category().unwrap();
                        Box::new(
                            category
                                .subcategories
                                .clone()
                                .into_iter()
                                .map(TamimiVertex::Category),
                        )
                    }
                    None => Box::new(std::iter::empty()) as Box<dyn Iterator<Item = TamimiVertex>>,
                };
                (ctx, neighbour)
            })),
            _ => unreachable!(),
        }
    }

    fn resolve_coercion<V: trustfall::provider::AsVertex<Self::Vertex> + 'a>(
        &self,
        contexts: ContextIterator<'a, V>,
        type_name: &str,
        coerce_to_type: &str,
    ) -> ContextOutcomeIterator<'a, V, bool> {
        todo!()
    }
}

impl TamimiAdapter {
    pub fn new() -> eyre::Result<Self> {
        let rt = tokio::runtime::Builder::new_current_thread()
            .enable_all()
            .build()
            .expect("Failed to get current thread");
        Ok(Self { rt })
    }
    fn categories(&self) -> VertexIterator<'static, TamimiVertex> {
        let iter = self
            .rt
            .block_on(TamimiClient::categories())
            .expect("Failed to get categories")
            .into_iter()
            .map(TamimiVertex::Category);
        Box::new(iter)
    }
    fn products_in_category(&self, category: &str) -> VertexIterator<'static, TamimiVertex> {
        let iter = self
            .rt
            .block_on(TamimiClient::by_category(category))
            .expect("Failed to get categories")
            .into_iter()
            .map(TamimiVertex::Product);
        Box::new(iter)
    }

    fn static_products_in_category(category: &str) -> VertexIterator<'static, TamimiVertex> {
        let rt = tokio::runtime::Builder::new_current_thread()
            .enable_all()
            .build()
            .expect("Failed to get current thread");
        let iter = rt
            .block_on(TamimiClient::by_category(category))
            .expect("Failed to get categories")
            .into_iter()
            .map(TamimiVertex::Product);
        Box::new(iter)
    }

    fn products(&self, name: &str) -> VertexIterator<'static, TamimiVertex> {
        let iter = self
            .rt
            .block_on(TamimiClient::by_product_name(name))
            .expect("Failed to get categories")
            .into_iter()
            .map(TamimiVertex::Product);
        Box::new(iter)
    }
}

impl TamimiClient {
    const CATEGORY_ENDPOINT: &'static str =
        "https://website-api.ecom-dev.tamimimarkets.com/api/category";
    const BY_CATEGORY_ENDPOINT: &'static str =
        "https://website-api.ecom-dev.tamimimarkets.com/api/layout/category?url=";
    const BY_PRODUCT_NAME_ENDPOINT: &'static str =
        "https://website-api.ecom-dev.tamimimarkets.com/api/product?q=";

    async fn categories() -> Result<Vec<Category>, eyre::Report> {
        let res: serde_json::Value = reqwest::get(Self::CATEGORY_ENDPOINT).await?.json().await?;
        let json = serde_json::to_string(&res["data"]["category"])?;
        serde_json::from_str(&json).map_err(Into::into)
    }

    async fn by_category(category: &str) -> Result<Vec<Product>, eyre::Report> {
        let res: serde_json::Value =
            reqwest::get(format!("{}{}", Self::BY_CATEGORY_ENDPOINT, category))
                .await?
                .json()
                .await?;
        let products = &res["data"]["page"]["layouts"][1]["value"]["collection"]["product"];
        let json = serde_json::to_string(products)?;
        // println!("{}", json);
        Ok(serde_json::from_str::<Option<Vec<Product>>>(&json)?.unwrap_or_default())
    }

    async fn by_product_name(name: &str) -> Result<Vec<Product>, eyre::Report> {
        let res: serde_json::Value =
            reqwest::get(format!("{}{}", Self::BY_PRODUCT_NAME_ENDPOINT, name))
                .await?
                .json()
                .await?;
        let products = &res["data"]["product"];
        let json = serde_json::to_string(products)?;
        Ok(serde_json::from_str(&json)?)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[tokio::test]
    async fn test_by_category() -> eyre::Result<()> {
        let products = TamimiClient::by_category("snacks--confectionery").await?;
        dbg!(products);
        panic!();
    }

    #[tokio::test]
    async fn categories() -> eyre::Result<()> {
        let categories = TamimiClient::categories().await?;
        dbg!(&categories);
        assert_eq!(categories.len(), 20);
        Ok(())
    }
}
