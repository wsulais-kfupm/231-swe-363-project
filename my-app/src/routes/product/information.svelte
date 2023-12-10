<script>
    import {P, A } from 'flowbite-svelte';

    export let company = ""
    export let product=""
    export let cost = 0
</script>

<style>
    .container {
        margin: 30px;

    }
</style>
<div class="container">
    {#if (cost <= 1)}
    <P class="mb-4 text-gray-800 dark:text-white">At {company}, the {product} costs {cost} riyal</P>
    {:else}
    <P class="mb-4 text-gray-800 dark:text-white">At {company}, the {product} costs {cost} riyals</P>
    {/if}
</div>
