<script>
// @ts-nocheck
    import Variant from '$lib/variants.svelte'
    import Placeholder from '$lib/assets/placeholder.jpeg'
    import Compare from '$lib/compare.svelte'
    import Table from '$lib/table.svelte'
	import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { Button } from 'flowbite-svelte';
    export let data
    onMount(async()=>{
        
    })
    let compareGroup=''
    let variantGroup=''
    let product=[{"pname_slug":"Tea Bag","bname":"Lipton","img":null,"name":"\"ar\"=>\"كيس شاي\", \"en\"=>\"Tea Bag\", \"ja\"=>\"茶袋\""}]
    let variantsJson=[{"variant_slug":"Peach","varid":2,"listing_id":3,"currency":"SAR","price":10,"url":"https://www.google.com/search?q=tide+detergent+powder&oq=tide+deter&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDMzNTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8","quantity":120,"quantity_unit":"ML","quantity_pcs":6,"marketname":"Othaim"},{"variant_slug":"Mint","varid":1,"listing_id":1,"currency":"SAR","price":12,"url":"https://www.othaimmarkets.com/home-featured-products/haleyhoney1k.html","quantity":100,"quantity_unit":"ML","quantity_pcs":1,"marketname":"Othaim"}]
    let variantObjects=[]
    let variants=[]
    let markets=[]
    let quantities=[]
    let group=(compareGroup, variantGroup)
    function filterVariants(variantsJson){
        for (let variantJson of variantsJson){
            let variant={
                vname:variantJson.variant_slug,
                quantities:variantJson.quantity_pcs + "x" + variantJson.quantity + variantJson.quantity_unit,
                price:variantJson.price+ " " + variantJson.currency,
                market:variantJson.marketname
            }
            variants.push(variant.vname)
            variantObjects.push(variant)
            if (!markets.includes(variant.market)){
                markets.push(variant.market)
            }

            if (!quantities.includes(variant.quantities)){
                quantities.push(variant.quantities)
            }
        }
    }

    filterVariants(variantsJson)
    

</script>

<main>

    <div class='product-image'>
        <img src={Placeholder}>
    </div>
    <div class="product-details">
        <div class="notify">
            <Button color='light'>Notify Me</Button>
        </div>
        
        <h1 class="product-name">{product[0].pname_slug}</h1>
        <div class="details">
            <div class="brand-container">
                <span class="brand">Brand</span>
                <span class="brand-name">{product[0].bname}</span>
            </div>
            <div class="compare-container">
                <p class="compare-text">Compare Prices:</p>
                <!-- Comparison Buttons -->
                <div class="compare-by-container">
                    {#each ['Market', 'Variant', 'Quantity'] as type}
                        <Compare bind:group={compareGroup} {type} />
                    {/each}
                </div>
            </div>
            <div class='variant-container'>
                <div class="variant-listing">
                    {#if compareGroup=='Variant'}
                        {#each variants as variant}
                            <Variant bind:group={variantGroup} type={'Variant'} text={variant} src={Placeholder} />
                        {/each}
                    {:else if compareGroup=='Market'}
                        {#each markets as market}
                            <Variant bind:group={variantGroup} type={"Market"}, text={market} />
                        {/each}
                    {:else if compareGroup=='Quantity'}
                        {#each quantities as quantity}
                            <Variant bind:group={variantGroup} type={'Quantity'}, text={quantity} />
                        {/each}
                    {/if}
                </div>  
            </div>
        </div>
    </div>
</main>
<div class="">
    <Table bind:group={group} bind:vGroup={variantGroup} {markets} {quantities} {variants} {variantObjects}/>
</div>

<style>

    .product-image{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 40vw;
    }
    main {
        display: flex;
        widows: 100%;
        padding: 48px;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 24px;
        flex: 1 0 0;
        align-self: stretch;
        flex-wrap: wrap;
    }

    .notify {
        display: flex;
        justify-content: flex-start;
        width: 100%;
    }
    .table{
        display: block; 
        padding: 48px;
    }
    .product-details{
        display: flex;
        min-width: 261.999px;
        padding: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex: 1 0 0;
    }

    .product-name{
        align-self: stretch;
        color: var(--gray-900, #111928);
        /* leading-tight/text-4xl/font-bold */
        font-family: Inter;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: 125%; /* 45px */
    }

    .details{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        align-self: stretch;
        border-radius: var(--Boxed, 0px);
    }

    .brand-container{
        display: flex;
        padding: var(--0, 0px);
        align-items: flex-start;
        gap: var(--2, 8px);
        align-self: stretch;
        border-radius: var(--Boxed, 0px);
    }

    .brand{
        color: var(--gray-900, #111928);
        /* text-base/font-medium */
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 24px */
    }

    .brand-name{
        flex: 1 0 0;
        color: var(--gray-900, #111928);
        /* text-base/font-bold */
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 24px */
    }

    .compare-container{
        display: flex;
        padding: var(--0, 0px);
        flex-direction: column;
        align-items: flex-start;
        gap: var(--2, 8px);
        align-self: stretch;
        border-radius: var(--Boxed, 0px);
    }

    .compare-text{
        align-self: stretch;
        color: var(--gray-900, #111928);
        /* text-base/font-medium */
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 24px */
    }

    .compare-by-container{
        display: flex;
        padding: var(--0, 0px);
        align-items: flex-start;
        align-content: flex-start;
        gap: 12px;
        align-self: stretch;
        flex-wrap: wrap;
        border-radius: var(--Boxed, 0px);
    }

    .variant-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 10px;
        align-self: stretch;
        border-radius: var(--Boxed, 0px);
    }

    .variant-listing{
        display: flex;
        padding: 0px 16px;
        align-items: flex-start;
        align-content: flex-start;
        gap: 10px;
        align-self: stretch;
        flex-wrap: wrap;
    }

    img{
        max-width: 100%;
		max-height: 100%;
		margin: auto;
    }
</style>