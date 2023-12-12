<script>
	$: console.log('Branding classes:', $$props.class);
</script>

<span class={'inline-flex align-center gap-2 m-2 me-3 ' + $$props.class} style={$$props.style}>
	<img src="https://flowbite.com/docs/images/logo.svg" class="inline h-7" alt="Flowbite Logo" />
	<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
		Flowbite
	</span>
</span>
