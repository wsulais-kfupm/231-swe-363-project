<script>
	// @ts-nocheck

	import { P, A, Span } from 'flowbite-svelte';
	export let src = '$lib/assets/placeholder.jpeg';
	export let color;
	export let cname = '';
</script>

<div
	class="category-container"
	class:blue={color === 'blue'}
	class:green={color === 'green'}
	class:red={color === 'red'}
>
	<h1>{cname}</h1>
	<img {src} />
</div>

<style>
	.category-container {
		display: flex;
		max-width: var(--max-w-sm, 384px);
		padding: var(--6, 24px);
		flex-direction: column;
		align-items: flex-start;
		gap: var(--0, 0px);
		flex: 1 0 0;
		align-self: stretch;
		justify-content: space-between;

		border-radius: var(--rounded-lg, 8px);
		border-top: 1px solid var(--gray-200, #e5e7eb);
		border-right: var(--Boxed, 1px) solid var(--gray-200, #e5e7eb);
		border-bottom: var(--Boxed, 1px) solid var(--gray-200, #e5e7eb);
		border-left: var(--Boxed, 1px) solid var(--gray-200, #e5e7eb);
		/* shadow-md */
		box-shadow:
			0px 2px 4px -2px rgba(0, 0, 0, 0.05),
			0px 4px 6px -1px rgba(0, 0, 0, 0.1);
	}

	.blue {
		background:
			linear-gradient(157deg, rgba(28, 100, 242, 0) 36.24%, #0e3583 82.97%),
			var(--blue-500, #3f83f8) 50% / cover no-repeat;
	}

	.green {
		background:
			linear-gradient(157deg, rgba(14, 159, 110, 0) 36.24%, #086c4b 82.97%),
			var(--green-500, #0e9f6e) 50% / cover no-repeat;
	}

	.red {
		background:
			linear-gradient(157deg, rgba(242, 28, 28, 0) 36.24%, #830e0e 82.97%),
			var(--red-500, #f05252) 50% / cover no-repeat;
	}

	h1 {
		align-self: stretch;
		color: var(--white, #fff);

		/* leading-tight/text-3xl/font-bold */
		font-family: Inter;
		font-size: 30px;
		font-style: normal;
		font-weight: 700;
		line-height: 125%; /* 37.5px */
	}

	img {
		position: relative;
		left: 0;
		bottom: 0;
		width: 100%;
		max-width: 400px;
		min-width: 250px;
		height: auto;
	}
</style>
