<script>
    import { Badge } from 'flowbite-svelte';

    export let pname=""
    export let bname=""
    export let img=""
    export let quantities=[""]
    export let prices=[""]
    export let marketnames=[""]


    let current=0
</script>
<style>



    .product-container{
        display: flex;
        width: 274px;
        height: 358px;
        padding: var(--6, 24px);
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border-radius: var(--rounded-lg, 8px);
        border-top: 1px solid var(--gray-200, #E5E7EB);
        border-right: var(--Boxed, 1px) solid var(--gray-200, #E5E7EB);
        border-bottom: var(--Boxed, 1px) solid var(--gray-200, #E5E7EB);
        border-left: var(--Boxed, 1px) solid var(--gray-200, #E5E7EB);
        background: var(--white, #FFF);
        /* shadow-md */
        box-shadow: 0px 2px 4px -2px rgba(0, 0, 0, 0.05), 0px 4px 6px -1px rgba(0, 0, 0, 0.10);
        
    }

    .product-img{
        display: block;
        width: 226px;
        height: 114px;
    }

    img {
        max-width:100%;
        max-height:100%;
        margin: auto;
    }

    .product-info {
        width: 226px;
        height: 196px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--2, 8px);
    }

    .brand {
        color: var(--gray-500, #6B7280);
        /* text-base/font-normal */
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */

    }
    .product-name{
        color: var(--gray-900, #111928);
        /* leading-tight/text-2xl/font-bold */
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 125%; /* 30px */
    }
    .weights{
        width: 100%;
        height: 28px;
        display: flex;
        height: var(--7, 28px);
        padding: var(--0, 0px);
        align-items: center;
        gap: var(--0, 0px);
        border-radius: 8px;
        /* shadow-sm */
        box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.08);
    }

    .weights-container{
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
        border-radius: var(--Boxed, 0px);
    }
    .info {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
    }
    .market {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
    }
    .discount {
        display: flex;
        width: 145px;
        justify-content: flex-end;
        align-items: center;
    }

    .price{
        color: var(--green-500, #0E9F6E);
        text-align: right;
        /* leading-tight/text-2xl/font-bold */
        font-family: Inter;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 125%; /* 30px */
        vertical-align: bottom;
    }

    .nav-link{
        display: flex;
        padding: var(--4, 14px);
        height: 18px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--0, 0px);
        align-self: stretch;
        border-radius: var(--Boxed, 0px);
        background: var(--gray-50, #FFF);
    }

    .weight-text{
        color: var(--gray-500, #6B7280);
        /* text-sm/font-medium */
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 21px */
    }

    .selected {
        background: var(--gray-50, #F9FAFB);
	}
</style>

<div class="product-container">
    <div class="product-img">
        <img src={img} >
    </div>
    
    <div class="product-info">
        <p class="brand">{bname}</p>
        <h1 class="product-name">{pname}</h1>
        <div class="weights-container">
            <div class="weights">
            <!--Loops through weight  -->
            {#each quantities as weight, i}
            <button 
            class="nav-link {current === i? 'selected' : ''}"
            on:click={() => current = i}>
                <span class="weight-text">{weight}</span>
            </button>
            {/each}
            </div>
        </div>
        <div class="info">
            <div class="market"><Badge large color="red">{marketnames[current]}</Badge></div>
            <div class="discount">
                
                <span class="price">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" style="display: inline;">
                        <path d="M18.5892 13.6617C18.327 13.4206 17.9715 13.2853 17.6007 13.2853C17.23 13.2853 16.8744 13.4206 16.6122 13.6617L13.4062 16.6096V4.28562C13.4062 3.94465 13.2589 3.61765 12.9967 3.37655C12.7345 3.13545 12.3789 3 12.008 3C11.6372 3 11.2816 3.13545 11.0194 3.37655C10.7572 3.61765 10.6099 3.94465 10.6099 4.28562V16.6096L7.40386 13.6617C7.27488 13.5389 7.1206 13.4409 6.95002 13.3736C6.77944 13.3062 6.59597 13.2707 6.41032 13.2692C6.22467 13.2677 6.04056 13.3003 5.86873 13.3649C5.6969 13.4296 5.54079 13.525 5.40951 13.6457C5.27824 13.7664 5.17442 13.91 5.10412 14.068C5.03382 14.226 4.99844 14.3953 5.00005 14.566C5.00167 14.7367 5.04024 14.9054 5.11351 15.0622C5.18679 15.2191 5.29331 15.3609 5.42685 15.4795L11.0195 20.622C11.1497 20.742 11.3047 20.8368 11.4753 20.901C11.6444 20.9663 11.826 21 12.0094 21C12.1929 21 12.3744 20.9663 12.5435 20.901C12.7142 20.8368 12.8691 20.742 12.9993 20.622L18.592 15.4795C18.8538 15.2381 19.0005 14.911 19 14.5701C18.9995 14.2292 18.8517 13.9024 18.5892 13.6617Z" fill="#0E9F6E"/>
                    </svg>{prices[current]} SAR</span>
            </div>
            
        </div>
    </div>
</div>