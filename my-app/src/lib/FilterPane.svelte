<script>
	import { Label, MultiSelect, Range } from 'flowbite-svelte';

	let selected_brands = [];
	let selected_stores = [];
	let min_price = 0.0;
	let max_price = 100.0;
	let price = 10.0;
	export let brands = [{ value: 'nestle', name: 'Nestlé' }];

	export let stores = [
		{ value: 'tamimi', name: 'Tamimi' },
		{ value: 'othaim', name: 'Al-Othaim' }
	];
</script>

<section class="w-full flex flex-wrap gap-8 rounded-lg shadow p-4">
	<div class="flex-1 min-w-fit">
		<Label>Brand:</Label>
		<MultiSelect name="brands" items={brands} bind:value={selected_brands} />
	</div>

	<div class="flex-1 min-w-fit">
		<Label>Price:</Label>
		<Range value={price} min={min_price} steps="5" max={max_price} />
	</div>

	<div class="flex-1 min-w-fit">
		<Label>Available In:</Label>
		<MultiSelect brands="stores" items={stores} bind:value={selected_stores} />
	</div>
</section>
