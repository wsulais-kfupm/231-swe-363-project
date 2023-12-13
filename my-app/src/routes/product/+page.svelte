<script>
// @ts-nocheck
    import Variant from '$lib/variants.svelte'
    import Placeholder from '$lib/assets/placeholder.jpeg'
    import Compare from '$lib/compare.svelte'
    import Table from '$lib/table.svelte'
    let compareGroup=''
    let variantGroup=''
    let variants=[
        {
            src:Placeholder,
            vname: 'Chicken Curry'
        },
        {
            src:Placeholder,
            vname: 'Special Curry'
        },
        {
            src:Placeholder,
            vname: 'Stir Fry'
        },
        {
            src:Placeholder,
            vname: 'Vegetable'
        }
    ]
    let markets=['Othaim', 'Panda', 'Tamimi']
    let quantities=['75g', '5x75g', '20x75g']
</script>

<main>

    <div class='product-image'>
        <img src={Placeholder}>
    </div>
    <div class="product-details">
        <h1 class="product-name">Instand Noodles</h1>
        <div class="details">
            <div class="brand-container">
                <span class="brand">Brand</span>
                <span class="brand-name">Indomie</span>
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
                            <Variant bind:group={variantGroup} type={'Variant'} text={variant.vname} src={variant.src} />
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
    <Table bind:group={compareGroup}/>
</main>
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