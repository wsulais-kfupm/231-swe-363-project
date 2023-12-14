<script>
// @ts-nocheck

	import { P, A, Span } from 'flowbite-svelte';
	export let src = '$lib/assets/placeholder.jpeg';
	export let cname='Foods and Beverages'

</script>

<div class="gradient">
	<div class="category-container" >
		<h1>{cname}</h1>
		<img {src}>
	</div>
</div>


<style>

	.gradient {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.gradient:before {
		content: '';
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		
		z-index: -1; /* Place the pseudo-element behind the .category-container */
	}
	.category-container {
		display: flex;
		max-width: var(--max-w-sm, 384px);
		padding: var(--6, 24px);
		flex-direction: column;
		align-items: flex-start;
		gap: var(--0, 0px);
		flex: 1 0 0;
		align-self: stretch;

		border-radius: var(--rounded-lg, 8px);
		border-top: 1px solid var(--gray-200, #e5e7eb);
		border-right: var(--Boxed, 1px) solid var(--gray-200, #e5e7eb);
		border-bottom: var(--Boxed, 1px) solid var(--gray-200, #e5e7eb);
		border-left: var(--Boxed, 1px) solid var(--gray-200, #e5e7eb);
		background: linear-gradient(157deg, rgba(28, 100, 242, 0.00) 36.24%, #0E3583 82.97%), var(--blue-500, #3f83f8) 50% / cover no-repeat;
		
		/* shadow-md */
		box-shadow:
			0px 2px 4px -2px rgba(0, 0, 0, 0.05),
			0px 4px 6px -1px rgba(0, 0, 0, 0.1);	
	}

	h1{
		align-self: stretch;
		color: var(--white, #FFF);

		/* leading-tight/text-3xl/font-bold */
		font-family: Inter;
		font-size: 30px;
		font-style: normal;
		font-weight: 700;
		line-height: 125%; /* 37.5px */
	}
</style>
