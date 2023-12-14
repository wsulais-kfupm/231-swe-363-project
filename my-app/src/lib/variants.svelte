<script>
// @ts-nocheck

    export let group
    export let src = null;
    export let text
    export let value;
    export let type

    function setGroup() {
        console.log("Setting selector group to:", value, typeof(value))
        group = text
    }

</script>

<button on:click={()=>group = text} class={group === text ? 'selected' : 'unselected'}>
{#if src}
    <img {src}><span>{text}</span>
{:else}
    <span>{text}</span>
{/if}
</button>

<style>
    .unselected{
        display: flex;
        padding: 8px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border: 1px solid var(--gray-300, #D1D5DB);
    }

    .selected{
        display: flex;
        padding: 8px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border: 2px solid var(--blue-600, #1C64F2);
    }

    
    span{
        display: flex;
        padding: 8px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: var(--black, #000);

        /* leading-tight/text-sm/font-medium */
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 125%; /* 17.5px */
    }
    img{
        width: 23px;
        height: 23px;
    }

</style>
