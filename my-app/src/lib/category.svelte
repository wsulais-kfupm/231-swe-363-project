<script>
	import { P, A, Span } from 'flowbite-svelte';
	export let src = '';
</script>

<div class="category-container" style="">
	<div class="gradient">
		<img {src} />
	</div>
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

		border-radius: var(--rounded-lg, 8px);
		border-top: 1px solid var(--gray-200, #e5e7eb);
		border-right: var(--Boxed, 1px) solid var(--gray-200, #e5e7eb);
		border-bottom: var(--Boxed, 1px) solid var(--gray-200, #e5e7eb);
		border-left: var(--Boxed, 1px) solid var(--gray-200, #e5e7eb);
		background: var(--blue-500, #3f83f8);

		/* shadow-md */
		box-shadow:
			0px 2px 4px -2px rgba(0, 0, 0, 0.05),
			0px 4px 6px -1px rgba(0, 0, 0, 0.1);
	}

	.img {
		width: 494px;
		height: 278px;
		position: relative;
		right: -71.75px;
		bottom: -23px;
		border-radius: var(--Boxed, 0px);
		z-index: -1;
	}

	.gradient {
		position: relative;
		display: inline-block;
	}

	.gradient::after {
		background:
			linear-gradient(157deg, rgba(28, 100, 242, 0) 36.24%, #0e3583 82.97%),
			lightgray 50% / cover no-repeat;
		position: relative;
		top: 0;
		left: 0;
	}
</style>
