<script>
	// @ts-nocheck

    import Placeholder from '$lib/assets/placeholder.jpeg'
    import Product from '$lib/product.svelte'
    import Category from '$lib/category.svelte'
    import FB from '$lib/assets/FB.png'
    import {filter} from '$lib/filter.js'
    import {onMount} from 'svelte';
	




    const getinfo=async()=>{
        let products=[]
        const res=await fetch('/api/mainpage/')

        let json = await res.json()
        for (const product of json){
            let listing =await fetch('/api/listing/',{
                method: 'post',
                body:JSON.stringify(product)
            })
            product.variants= await listing.json()
        }
        for (const product of json){
         if(product.variants && product.variants.length!=0  ){
            products.push(filter(product))  
         }
        }

        console.log(products)
        return products
    }

    
</script>

<main class="w-full px-8 flex-col justify-start items-start gap-8 inline-flex">
	<h1 class="font-sans text-black text-5xl font-semibold font-['Inter'] leading-10">
		Popular Categories
	</h1>
	<section></section>
	<h1 class="font-sans text-black text-5xl font-semibold font-['Inter'] leading-10">
		Today's Sales
	</h1>
	<section class="w-full justify-start gap-8 items-start inline-flex">
		{#await getinfo()}
			<p>Loading...</p>
		{:then products}
			{#each products as product}
				<Product {...product} />
			{/each}
		{/await}
	</section>
</main>

<style>
	.body {
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
