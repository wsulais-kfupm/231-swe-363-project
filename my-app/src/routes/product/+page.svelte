<script>
// @ts-nocheck

    export let pname
    export let bname
</script>

<main>


    <div class="product-details">
        <h1 class="product-name">Instand Noodles</h1>
        <div class="details">
            <div class="brand-container">
                <span class="brand">Brand</span>
                <span class="brand-name">Indomie</span>
            </div>
            <div class="compare-container">
                <p class="compare-text">Compare Prices:</p>
                <div class="compare-by-container">

                </div>
            </div>
        </div>
    </div>

    <div>

    </div>
</main>

<style>
    main {
        display: flex;
        padding: 48px;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 24px;
        flex: 1 0 0;
        align-self: stretch;
        flex-wrap: wrap;
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
</style>