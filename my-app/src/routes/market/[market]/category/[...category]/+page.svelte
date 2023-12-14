<script lang="ts">
    import type { PageData } from './$houdini'
  import Product from "$lib/product.svelte";

    export let data: PageData

    $: ({ MarketCategory } = data)
    $: category = $MarketCategory.data.marketCollection.edges[0].node.categoryCollection.edges[0].node
</script>

<h1 class="font-sans text-black text-5xl font-semibold font-['Inter'] leading-10">{category.name["en"]}</h1>
{#each category.productCollection.edges as { node: product }}
  <Product {product} />
{/each}
