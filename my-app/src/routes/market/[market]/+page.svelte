<script lang="ts">
    import Placeholder from '$lib/assets/placeholder.jpeg'
    import Product from '$lib/product.svelte'
    import Category from '$lib/category.svelte'
    import FB from '$lib/assets/FB.png'
	
    import type { PageData } from './$houdini'

    export let data: PageData

    $: ({ MarketPage } = data)
    $: market = $MarketPage.data.marketCollection.edges[0].node
   
</script>

<main class="w-full px-8 flex-col justify-start items-start gap-8 inline-flex">
	<h1 class="font-sans text-black text-5xl font-semibold font-['Inter'] leading-10">
		Popular Categories
	</h1>
	<section>
    {#each market.categoryCollection.edges as cate}
      <p><a href="./{market.id}/category/{cate.node.slug}">{cate.node.name["en"]}</a></p>
    {/each}
  </section>
	<h1 class="font-sans text-black text-5xl font-semibold font-['Inter'] leading-10">
		Today's Sales
	</h1>
	<section class="w-full justify-start gap-8 items-start inline-flex">
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
