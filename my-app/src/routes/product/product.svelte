<script>
	import { Heading, P, A } from 'flowbite-svelte';

	export let name = '';
	export let src = '';
</script>

<div class="container">
	<div class="margins">
		<Heading tag="h2" customSize="text-4xl font-bold text-gray-800 dark:text-white">{name}</Heading>
	</div>

	<br />
	<img {src} alt="placeholder" class="img" />
</div>

<style>
	.container {
		display: inline-block;
		width: 50%;
		margin-left: 15px;
	}

	.img {
		width: 420px;
		height: 400px;
		text-align: center;
	}
	.margins {
		margin: 15px 15px 15px 15px;
	}
</style>
