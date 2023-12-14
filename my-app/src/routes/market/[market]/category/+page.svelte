<script lang="ts">
    import type { PageData } from './$houdini'

    export let data: PageData

    $: ({ MarketCategories } = data)
    $: categories = $MarketCategories.data.marketCollection.edges[0].node.categoryCollection.edges
    $: console.log(categories)
</script>

{#each categories as { node: category }}
  <p><a href="./category/{category.slug}">{category.name["en"]}</a></p>
{/each}



