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
