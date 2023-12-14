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
        // for (const product of json){
        //     let listing =await fetch('/api/listing/',{
        //         method: 'post',
        //         body:JSON.stringify(product)
        //     })
        //     product.variants= await listing.json()
        // }
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
	<section class="category-container">
		<h1 class="font-sans text-black text-5xl font-semibold font-['Inter'] leading-10">
			Popular Categories
		</h1>
		<section class="category-cards">
			<Category src={FB}/>
		</section>
		<div class="more-categories">
			<a style="display: flex; align-items:center; gap: var(--2, 8px);" href="'/">
				<span class="more-categories-text">More Categories</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
					<path d="M12.6222 9.06666V12.5035C12.6223 12.6125 12.6009 12.7204 12.5592 12.8211C12.5175 12.9219 12.4564 13.0134 12.3793 13.0905C12.3022 13.1675 12.2107 13.2287 12.11 13.2703C12.0093 13.312 11.9013 13.3334 11.7923 13.3333H3.49649C3.38749 13.3334 3.27953 13.312 3.17881 13.2703C3.07808 13.2287 2.98656 13.1675 2.90948 13.0905C2.8324 13.0134 2.77128 12.9219 2.72961 12.8211C2.68793 12.7204 2.66653 12.6125 2.66663 12.5035V4.20763C2.66653 4.09863 2.68793 3.99067 2.72961 3.88995C2.77128 3.78922 2.8324 3.6977 2.90948 3.62062C2.98656 3.54354 3.07808 3.48242 3.17881 3.44075C3.27953 3.39908 3.38749 3.37767 3.49649 3.37777H6.7804M9.2316 2.66666H13.3333V6.76834M7.72334 8.27661L13.2544 2.74559" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</a>
		</div>	
	</section>
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
		flex-direction: column;
		align-items: flex-start;
		align-content: flex-start;
		row-gap: 32px;
		align-self: stretch;
		flex-wrap: wrap;
		margin-left: 20px;
		margin-right: 20px;
	}

	.category-cards{
		display: flex;
		height: 257px;
		align-items: flex-start;
		gap: 32px;
		align-self: stretch;
		flex-wrap: wrap;
		border-radius: var(--Boxed, 0px);
	}

	.more-categories{
		display: flex;
		width: 100% ;
		justify-content: flex-end;
		align-items: flex-start;
		gap: 10px;
		align-self: stretch;
		border-radius: var(--Boxed, 0px);
	}

	.more-categories-text{
		color: var(--primary-700, #1A56DB);

		/* leading-tight/text-base/font-normal */
		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 125%; /* 20px */
	}
</style>
