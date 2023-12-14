import requests
import os, sys
import argparse
from dataclasses import dataclass
import cattrs
import cattrs.preconf.orjson

API_ENDPOINT_BY_CATEGORY = (
    "https://website-api.ecom-dev.tamimimarkets.com/api/layout/category?url="
)
API_ENDPOINT_BY_NAME = "https://website-api.ecom-dev.tamimimarkets.com/api/product?q="

DEFAULT_CATEGORY = "snacks--confectionery"

CATEGORIES: list[str] = [
    "imported-2",
    "tamimi-product",
    "pets",
    "accessories",
    "other-pets-1",
    "dog-1",
    "cat-1",
    "food-3",
    "other-pets",
    "dog",
    "cat",
    "baby-1",
    "baby-care-3",
    "health-care",
    "baby-care-1",
    "wipes",
    "diapers",
    "baby-food",
    "other-food",
    "water-2",
    "juice-3",
    "cereals-1",
    "milk-3",
    "bbq-accessories",
    "charcoal",
    "cooler--thermos",
    "grills",
    "household",
    "back-to-school",
    "water-bottles-lunch-boxes",
    "school-bags",
    "stationery-1",
    "notebooks-a4-paper",
    "pens-pencils",
    "newspaper--calling-cards",
    "luggage--travel-accessories",
    "toys--party-goods",
    "hardware",
    "lighter-fluid",
    "textile-and-foot-accessories",
    "socks---shoe-polish",
    "mats--rugs",
    "bedroom--sewing",
    "kitchen--bath-textile",
    "kitchen-shop",
    "tea-cups--kettle",
    "kitchen-storage--gadgets",
    "appliances",
    "dining",
    "drinkware",
    "cake-décor",
    "cookware",
    "bakeware",
    "electrical",
    "bulbs",
    "batteries",
    "disposables",
    "trash-bags--sufra",
    "cling-film--aluminum-foil",
    "food-wraps",
    "food-bags",
    "kitchen-disposables",
    "bath-or-kitchen-towels",
    "toilet-tissues",
    "facial-tissues",
    "cleaners",
    "other-cleaning-accessories",
    "brooms--mops",
    "other-cleaners",
    "kitchen--bath-cleaners",
    "air-care",
    "airfreshners-and-insecticides",
    "laundry-detergent",
    "strain-remover",
    "starch,-dyes--bleach-alternative",
    "fabric-softners",
    "liquid-2",
    "powder-3",
    "dishwashing",
    "liquid-1",
    "powder-2",
    "health--beauty",
    "family-planning",
    "lubricants",
    "condom",
    "first-aid",
    "ice--heat-pack",
    "bandages",
    "oral-care",
    "toothpick--floss",
    "mouth-wash",
    "tooth-brush",
    "tooth-paste",
    "feminine-hygiene",
    "tampons",
    "intimate-wash",
    "panty-liners",
    "pads",
    "soaps",
    "hand-sanitizers",
    "shower-gel",
    "bar-soaps",
    "liquid-soaps",
    "deodorant",
    "women",
    "men",
    "foot-care",
    "others-3",
    "powder-1",
    "cream-2",
    "grooming",
    "body-sponges",
    "hair-accessories",
    "manicure-pedicure",
    "cotton",
    "remedies",
    "other-remedies",
    "pain-killer",
    "cream-1",
    "cosmetics",
    "others-2",
    "nails",
    "eyes",
    "face",
    "lips",
    "hair-care",
    "coloration",
    "oil-2",
    "conditioner",
    "shampoo",
    "hair-removal",
    "body-care-1",
    "facial-care-1",
    "skin-care",
    "body-care",
    "facial-care",
    "healthy-living",
    "gluten-free-2",
    "vegan-2",
    "keto-2",
    "dairy-1",
    "milk-2",
    "eggs-1",
    "cheese--yoghurts",
    "beverages",
    "frozen-1",
    "bread--breakfast",
    "pizza-",
    "vegetables--fruits",
    "ice-cream",
    "grocery",
    "organic-non-food",
    "organic-food",
    "baby-care",
    "organic-produce",
    "vegetables-2",
    "fruits-3",
    "food--beverages",
    "frozen",
    "ice-",
    "ready-to-cook-3",
    "burger--pizzas",
    "juice-2",
    "desserts--icecreams",
    "pototo-fries",
    "fruits--vegetables-1",
    "other-meat-1",
    "seafood-1",
    "meat-2",
    "poultry-",
    "ethnic-food",
    "others-1",
    "indian",
    "asian",
    "baking",
    "desserts--topping",
    "canned-fruits",
    "baking-needs",
    "water--beverages",
    "water-1",
    "juice-1",
    "powdered-drinks",
    "energy-drinks",
    "soft-drinks",
    "milk-alternatives",
    "hot-drinks--creamers",
    "others",
    "coffee",
    "tea",
    "canned-food",
    "fish-1",
    "meat-1",
    "vegetables--beans",
    "soups--noodles",
    "noodles",
    "soups-1",
    "rice--pasta",
    "pasta",
    "rice-1",
    "oil--ghee",
    "ghee",
    "oil-1",
    "sauces,-spices--condiments",
    "salad-dressing",
    "condiments",
    "spices",
    "olives--pickles-1",
    "snacks--confectionery",
    "biscuits--cookies",
    "dried-fruits--dates",
    "chocolates",
    "candies--gums",
    "chips--nuts",
    "breakfast",
    "packaged-bread--croissant",
    "croutons",
    "spreads",
    "cereals--granola-bars",
    "fresh",
    "floral",
    "single-flowers",
    "bouquets",
    "plants",
    "dairy",
    "other-dairy",
    "desserts",
    "cream",
    "cheese--butter",
    "yoghurt--flavored-yoghurt",
    "milk--labnah",
    "eggs",
    "deli",
    "ready-meals",
    "sweets--spreads",
    "salads",
    "sandwiches",
    "olives--pickles",
    "cold-cuts",
    "herb-cheese--cream",
    "white-cheese--labnah",
    "seafood",
    "ready-to-cook-2",
    "fish--shrimps",
    "poultry",
    "ready-to-cook-1",
    "other-poultry",
    "chicken",
    "meat",
    "other-meat",
    "ready-to-cook",
    "camel",
    "veal",
    "lamb",
    "beef",
    "bakery",
    "brick-oven",
    "donuts--croissant",
    "arabic-sweets",
    "cakes--cookies",
    "freshly-baked",
    "fruits--vegetables",
    "juices",
    "vegetables",
    "fruits-1",
    "hot-deals",
]

parser = argparse.ArgumentParser(
    prog="Tamimi Scrapper", description="Scrapes data from Tamimi's API"
)
parser.add_argument(
    "--json", action="store_true", help="Output raw JSON from the Tamimi API"
)
subparsers = parser.add_subparsers(dest="query")
parser_cat = subparsers.add_parser("category", help="Query by category")
parser_cat.add_argument("id", choices=CATEGORIES, help="Which category to query")

parser_prod = subparsers.add_parser("product")
parser_prod.add_argument(
    "name", action="extend", nargs="+", type=str, help="What product name to query for"
)


@dataclass
class Brand:
    image: str
    name: str


@dataclass
class ProductVariantStoreData:
    mrp: float
    pass


@dataclass
class ProductVariant:
    images: list[str]
    name: str
    storeSpecificData: list[ProductVariantStoreData]
    pass


@dataclass
class Product:
    brand: Brand
    name: str
    variants: list[ProductVariant]
    pass


@dataclass
class Quantity:
    value: float
    unit: str
    pcs: int = 1
    pass

    def __str__(self) -> str:
        return f"{f'{self.pcs}×' if self.pcs else ''}{self.value}{self.unit}"


def parse_quantity(name: str) -> Quantity | None:
    import re

    regex = r"(?:(\d+)\s*[x×]\s*)?(\d+(?:\.\d+)?)(.+)"
    matches = re.match(regex, name)
    if matches:
        pcs, value, unit = matches.group(1, 2, 3)
        pcs = int(pcs) if pcs else 1
        return Quantity(float(value), unit, pcs)


def variant_sort_key_by_quantity(var: ProductVariant):
    qty = parse_quantity(var.name)
    if qty:
        return [qty.unit, qty.pcs, qty.value]


def get_products_by_category(category: str = DEFAULT_CATEGORY) -> list[Product]:
    res = requests.request(url=API_ENDPOINT_BY_CATEGORY + category, method="GET")
    json = res.json()

    products = json["data"]["page"]["layouts"][1]["value"]["collection"]["product"]

    # print(products)
    return products


def get_products_by_name(name: str) -> list[Product]:
    res = requests.request(url=API_ENDPOINT_BY_NAME + name, method="GET")
    json = res.json()

    products = json["data"]["product"]
    return products


try:
    args = parser.parse_args()
    print(args)
    products = ""
    if args.query == "category":
        products = get_products_by_category(args.id)
    else:
        products = get_products_by_name(" ".join(args.name))
    # print(products[0])
    products = cattrs.structure(products, list[Product])
    products.sort(key=lambda p: [p.brand.name, p.name])
    print(products[0])
    for product in products:
        print(
            product.brand.name,
            "-",
            product.name,
            ":",
            {
                str(v.name): v.storeSpecificData[0].mrp
                for v in sorted(
                    product.variants,
                    key=variant_sort_key_by_quantity,  # type: ignore
                )
            },
        )
        for variant in product.variants:
            print(variant.images)
except BrokenPipeError:
    # Python flushes standard streams on exit; redirect remaining output
    # to devnull to avoid another BrokenPipeError at shutdown
    devnull = os.open(os.devnull, os.O_WRONLY)
    os.dup2(devnull, sys.stdout.fileno())
    sys.exit(1)  # Python exits with error code 1 on EPIPE
