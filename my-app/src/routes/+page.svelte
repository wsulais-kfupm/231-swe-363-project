<script>
// @ts-nocheck

    import Placeholder from '$lib/assets/placeholder.jpeg'
    import Product from '$lib/product.svelte'
    import Category from '$lib/category.svelte'
    import FB from '$lib/assets/FB.png'
    import {filter} from '$lib/filter.js'

    let json=[
    { pname_slug: 'ICE_TEA', bname: 'Lipton',img:Placeholder,variants:[
	  {
        varid: 1,
        product_slug: 'ICE_TEA',
        listing_id: 1,
        currency: 'SAR',
        price: 12,
        url: 'https://www.othaimmarkets.com/home-featured-products/haleyhoney1k.html',
        quantity: 100,
        quantity_unit: 'ML',
        quantity_pcs: 1,
        marketname: 'Tamimi'
     },
     {
        varid: 2,
        product_slug: 'ICE_TEA',
        listing_id: 3,
        currency: 'SAR',
        price: 10,
        url: 'https://www.google.com/search?q=tide+detergent+powder&oq=tide+deter&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDMzNTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
        quantity: 120,
        quantity_unit: 'ML',
        quantity_pcs: 6,
        marketname: 'Othaim'
    }
    ]},
    { pname_slug: 'ICE_TEA', bname: 'Lipton',img:Placeholder,variants:[
	  {
        varid: 1,
        product_slug: 'ICE_TEA',
        listing_id: 1,
        currency: 'SAR',
        price: 12,
        url: 'https://www.othaimmarkets.com/home-featured-products/haleyhoney1k.html',
        quantity: 100,
        quantity_unit: 'ML',
        quantity_pcs: 1,
        marketname: 'Othaim'
     },
     {
        varid: 2,
        product_slug: 'ICE_TEA',
        listing_id: 3,
        currency: 'SAR',
        price: 10,
        url: 'https://www.google.com/search?q=tide+detergent+powder&oq=tide+deter&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDMzNTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
        quantity: 120,
        quantity_unit: 'ML',
        quantity_pcs: 6,
        marketname: 'Othaim'
    }
    ]},
    { pname_slug: 'ICE_TEA', bname: 'Lipton',img:Placeholder,variants:[
	  {
        varid: 1,
        product_slug: 'ICE_TEA',
        listing_id: 1,
        currency: 'SAR',
        price: 12,
        url: 'https://www.othaimmarkets.com/home-featured-products/haleyhoney1k.html',
        quantity: 100,
        quantity_unit: 'ML',
        quantity_pcs: 1,
        marketname: 'Othaim'
     },
     {
        varid: 2,
        product_slug: 'ICE_TEA',
        listing_id: 3,
        currency: 'SAR',
        price: 10,
        url: 'https://www.google.com/search?q=tide+detergent+powder&oq=tide+deter&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDMzNTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
        quantity: 120,
        quantity_unit: 'ML',
        quantity_pcs: 6,
        marketname: 'Othaim'
    }
    ]},
    { pname_slug: 'ICE_TEA', bname: 'Lipton',img:Placeholder,variants:[
	  {
        varid: 1,
        product_slug: 'ICE_TEA',
        listing_id: 1,
        currency: 'SAR',
        price: 12,
        url: 'https://www.othaimmarkets.com/home-featured-products/haleyhoney1k.html',
        quantity: 100,
        quantity_unit: 'ML',
        quantity_pcs: 1,
        marketname: 'Othaim'
     },
     {
        varid: 2,
        product_slug: 'ICE_TEA',
        listing_id: 3,
        currency: 'SAR',
        price: 10,
        url: 'https://www.google.com/search?q=tide+detergent+powder&oq=tide+deter&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDMzNTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
        quantity: 120,
        quantity_unit: 'ML',
        quantity_pcs: 6,
        marketname: 'Othaim'
    }
    ]},
    { pname_slug: 'ICE_TEA', bname: 'Lipton',img:Placeholder,variants:[
	  {
        varid: 1,
        product_slug: 'ICE_TEA',
        listing_id: 1,
        currency: 'SAR',
        price: 12,
        url: 'https://www.othaimmarkets.com/home-featured-products/haleyhoney1k.html',
        quantity: 100,
        quantity_unit: 'ML',
        quantity_pcs: 1,
        marketname: 'Othaim'
     },
     {
        varid: 2,
        product_slug: 'ICE_TEA',
        listing_id: 3,
        currency: 'SAR',
        price: 10,
        url: 'https://www.google.com/search?q=tide+detergent+powder&oq=tide+deter&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDMzNTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
        quantity: 120,
        quantity_unit: 'ML',
        quantity_pcs: 6,
        marketname: 'Othaim'
    }
    ]},
    { pname_slug: 'ICE_TEA', bname: 'Lipton',img:Placeholder,variants:[
	  {
        varid: 1,
        product_slug: 'ICE_TEA',
        listing_id: 1,
        currency: 'SAR',
        price: 12,
        url: 'https://www.othaimmarkets.com/home-featured-products/haleyhoney1k.html',
        quantity: 100,
        quantity_unit: 'ML',
        quantity_pcs: 1,
        marketname: 'Othaim'
     },
     {
        varid: 2,
        product_slug: 'ICE_TEA',
        listing_id: 3,
        currency: 'SAR',
        price: 10,
        url: 'https://www.google.com/search?q=tide+detergent+powder&oq=tide+deter&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDMzNTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
        quantity: 120,
        quantity_unit: 'ML',
        quantity_pcs: 6,
        marketname: 'Othaim'
    }
    ]} 
]

// @ts-ignore
let products=[]
for (const product of json){
    products.push(filter(product))
}

</script>

<style>
    .body{
        flex-direction: column;
        align-items: center;
    }
    


    .category-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        align-content: flex-start;
        row-gap: 32px;
        align-self: stretch;
        flex-wrap: wrap;
        margin-left: 20px;
        margin-right: 20px;
    }
</style>

<div class="category-container">
    {#each products as product}
        <Product {...product}/>
    {/each}
</div>




