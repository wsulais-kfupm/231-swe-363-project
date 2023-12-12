<script>
	import Navbar from '../../lib/navbar.svelte';
	import Footer from '../../lib/footer.svelte';
	import Product from '$lib/product.svelte';
	import Placeholder from '$lib/assets/placeholder.jpeg';
	import { Button } from 'flowbite-svelte';
	import { page } from '$app/stores';
	let product = 'Apple';
	const tamimi = {
		company: 'Tamimi',
		product: product,
		cost: 1
	};

	const lulu = {
		company: 'Lulu Supermarket',
		product: product,
		cost: 1.5
	};

	const othaim = {
		company: 'Alothaim',
		product: product,
		cost: 0.86
	};
	const search_product_name = $page.url.searchParams.get('name');
	const search_category = $page.url.searchParams.get('category');
	const search_max = $page.url.searchParams.get('max') ?? 25;
</script>

<main class="w-full flex-1 px-8 flex-col justify-start items-start gap-8 inline-flex">
	<h1 class="font-sans text-black text-5xl font-semibold font-['Inter'] leading-10">
		{#if search_product_name}
			"{search_product_name}" in
			<a class=" text-blue-600" href={`/supermarkets/${search_category ?? ''}`}>
				{search_category ?? 'All Categories'}
			</a>
		{:else}Products{/if}
	</h1>
	<!-- <section class="w-full flex-wrap justify-start gap-8 items-start inline-flex"> -->
	<section class="w-full">
		{#each Array(search_max) as _}
			<Product />
		{/each}
	</section>
	<aside>Filter here!</aside>
</main>

<style>
	main {
		max-width: 85vw;
	}
	/* @media only screen and (max-width: 1023px) {
		main {
		max-width: 90%;
		}
		} */
	section {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
		grid-gap: 1rem;
		justify-items: center;
	}
	.container {
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

	.product-details {
		display: flex;
		min-width: 261.999px;
		padding: 10px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;
		flex: 1 0 0;
	}

	.product-name {
		align-self: stretch;
		color: var(--gray-900, #111928);
		/* leading-tight/text-4xl/font-bold */
		font-family: Inter;
		font-size: 36px;
		font-style: normal;
		font-weight: 700;
		line-height: 125%; /* 45px */
	}

	.details {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;
		align-self: stretch;
		border-radius: var(--Boxed, 0px);
	}

	.brand-container {
		display: flex;
		padding: var(--0, 0px);
		align-items: flex-start;
		gap: var(--2, 8px);
		align-self: stretch;
		border-radius: var(--Boxed, 0px);
	}

	.brand {
		color: var(--gray-900, #111928);
		/* text-base/font-medium */
		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 150%; /* 24px */
	}

	.brand-name {
		flex: 1 0 0;
		color: var(--gray-900, #111928);
		/* text-base/font-bold */
		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 150%; /* 24px */
	}

	.compare-container {
		display: flex;
		padding: var(--0, 0px);
		flex-direction: column;
		align-items: flex-start;
		gap: var(--2, 8px);
		align-self: stretch;
		border-radius: var(--Boxed, 0px);
	}

	.compare-text {
		align-self: stretch;
		color: var(--gray-900, #111928);
		/* text-base/font-medium */
		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 150%; /* 24px */
	}

	.compare-by-container {
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
