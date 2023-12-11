<script>
	import Navbar from '../../lib/navbar.svelte';
	import Footer from '../../lib/footer.svelte';
	import Product from './product.svelte';
	import Information from './information.svelte';
	import Placeholder from '$lib/assets/placeholder.jpeg';
	import { Button } from 'flowbite-svelte';
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
</script>

<Navbar />

<div class="container">
	<img src={Placeholder} alt="" />
	<p class="brand"></p>
</div>

<Footer />

<style>
	.container {
		display: flex;
		width: 226px;
		height: 310px;
		padding: var(--6, 24px);
		flex-direction: column;
		align-items: flex-start;
		gap: var(--0, 0px);
		border-radius: var(--rounded-lg, 8px);
		border: 1px solid var(--gray-200, #e5e7eb);
		background: var(--white, #fff);

		/* shadow-md */
		box-shadow:
			0px 2px 4px -2px rgba(0, 0, 0, 0.05),
			0px 4px 6px -1px rgba(0, 0, 0, 0.1);
	}

	img {
		width: 172px;
		height: 172px;
	}

	.brand {
		width: 125.333px;
	}
</style>
