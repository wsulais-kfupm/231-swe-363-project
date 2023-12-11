<script>
// @ts-nocheck

    import Placeholder from '$lib/assets/placeholder.jpeg'
    import Product from '$lib/product.svelte'
    import Category from '$lib/category.svelte'
    import FB from '$lib/assets/FB.png'
    import {filter} from '$lib/filter.js'
    import {onMount} from 'svelte';

//     let json=[
//     { pname_slug: 'ICE_TEA', bname: 'Lipton',img:Placeholder,variants:[
// 	  {
//         varid: 1,
//         product_slug: 'ICE_TEA',
//         listing_id: 1,
//         currency: 'SAR',
//         price: 12,
//         url: 'https://www.othaimmarkets.com/home-featured-products/haleyhoney1k.html',
//         quantity: 100,
//         quantity_unit: 'ML',
//         quantity_pcs: 1,
//         marketname: 'Tamimi'
//      },
//      {
//         varid: 2,
//         product_slug: 'ICE_TEA',
//         listing_id: 3,
//         currency: 'SAR',
//         price: 10,
//         url: 'https://www.google.com/search?q=tide+detergent+powder&oq=tide+deter&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDMzNTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
//         quantity: 120,
//         quantity_unit: 'ML',
//         quantity_pcs: 6,
//         marketname: 'Othaim'
//     }
//     ]},
//     { pname_slug: 'ICE_TEA', bname: 'Lipton',img:Placeholder,variants:[
// 	  {
//         varid: 1,
//         product_slug: 'ICE_TEA',
//         listing_id: 1,
//         currency: 'SAR',
//         price: 12,
//         url: 'https://www.othaimmarkets.com/home-featured-products/haleyhoney1k.html',
//         quantity: 100,
//         quantity_unit: 'ML',
//         quantity_pcs: 1,
//         marketname: 'Othaim'
//      },
//      {
//         varid: 2,
//         product_slug: 'ICE_TEA',
//         listing_id: 3,
//         currency: 'SAR',
//         price: 10,
//         url: 'https://www.google.com/search?q=tide+detergent+powder&oq=tide+deter&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDMzNTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
//         quantity: 120,
//         quantity_unit: 'ML',
//         quantity_pcs: 6,
//         marketname: 'Othaim'
//     }
//     ]},
//     { pname_slug: 'ICE_TEA', bname: 'Lipton',img:Placeholder,variants:[
// 	  {
//         varid: 1,
//         product_slug: 'ICE_TEA',
//         listing_id: 1,
//         currency: 'SAR',
//         price: 12,
//         url: 'https://www.othaimmarkets.com/home-featured-products/haleyhoney1k.html',
//         quantity: 100,
//         quantity_unit: 'ML',
//         quantity_pcs: 1,
//         marketname: 'Othaim'
//      },
//      {
//         varid: 2,
//         product_slug: 'ICE_TEA',
//         listing_id: 3,
//         currency: 'SAR',
//         price: 10,
//         url: 'https://www.google.com/search?q=tide+detergent+powder&oq=tide+deter&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDMzNTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
//         quantity: 120,
//         quantity_unit: 'ML',
//         quantity_pcs: 6,
//         marketname: 'Othaim'
//     }
//     ]},
//     { pname_slug: 'ICE_TEA', bname: 'Lipton',img:Placeholder,variants:[
// 	  {
//         varid: 1,
//         product_slug: 'ICE_TEA',
//         listing_id: 1,
//         currency: 'SAR',
//         price: 12,
//         url: 'https://www.othaimmarkets.com/home-featured-products/haleyhoney1k.html',
//         quantity: 100,
//         quantity_unit: 'ML',
//         quantity_pcs: 1,
//         marketname: 'Othaim'
//      },
//      {
//         varid: 2,
//         product_slug: 'ICE_TEA',
//         listing_id: 3,
//         currency: 'SAR',
//         price: 10,
//         url: 'https://www.google.com/search?q=tide+detergent+powder&oq=tide+deter&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDMzNTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
//         quantity: 120,
//         quantity_unit: 'ML',
//         quantity_pcs: 6,
//         marketname: 'Othaim'
//     }
//     ]},
//     { pname_slug: 'ICE_TEA', bname: 'Lipton',img:Placeholder,variants:[
// 	  {
//         varid: 1,
//         product_slug: 'ICE_TEA',
//         listing_id: 1,
//         currency: 'SAR',
//         price: 12,
//         url: 'https://www.othaimmarkets.com/home-featured-products/haleyhoney1k.html',
//         quantity: 100,
//         quantity_unit: 'ML',
//         quantity_pcs: 1,
//         marketname: 'Othaim'
//      },
//      {
//         varid: 2,
//         product_slug: 'ICE_TEA',
//         listing_id: 3,
//         currency: 'SAR',
//         price: 10,
//         url: 'https://www.google.com/search?q=tide+detergent+powder&oq=tide+deter&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDMzNTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
//         quantity: 120,
//         quantity_unit: 'ML',
//         quantity_pcs: 6,
//         marketname: 'Othaim'
//     }
//     ]},
//     { pname_slug: 'ICE_TEA', bname: 'Lipton',img:Placeholder,variants:[
// 	  {
//         varid: 1,
//         product_slug: 'ICE_TEA',
//         listing_id: 1,
//         currency: 'SAR',
//         price: 12,
//         url: 'https://www.othaimmarkets.com/home-featured-products/haleyhoney1k.html',
//         quantity: 100,
//         quantity_unit: 'ML',
//         quantity_pcs: 1,
//         marketname: 'Othaim'
//      },
//      {
//         varid: 2,
//         product_slug: 'ICE_TEA',
//         listing_id: 3,
//         currency: 'SAR',
//         price: 10,
//         url: 'https://www.google.com/search?q=tide+detergent+powder&oq=tide+deter&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDMzNTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
//         quantity: 120,
//         quantity_unit: 'ML',
//         quantity_pcs: 6,
//         marketname: 'Othaim'
//     }
//     ]} 
// ]



    const getinfo=async()=>{
        let products=[]
        const res=await fetch('/api/mainpage')

        let json = await res.json()
        
        for (const product of json){
         if(product.variants && product.variants.length!=0){
            products.push(filter(product))  
         }
         
        }

        await console.log(products)
        return products
    }
    // onMount(async()=>{
    //     products = await getinfo()
    //     console.log(products)
    // })
    
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
    {#await getinfo() }
        <p>Loading...</p>
    {:then products} 
           {#each products as product}
                <Product {...product}/>
            {/each}
   
    {/await}

 
</div>




