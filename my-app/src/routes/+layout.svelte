<script lang="ts">
	import '../app.pcss';
	import { page } from '$app/stores';
	import Navbar from '$lib/navbar.svelte';
	import Footer from '$lib/footer.svelte';


    import type { PageData } from './$houdini'

    export let data: PageData

    $: ({ MarketLinks } = data)

	$: markets = $MarketLinks?.data?.marketCollection?.edges?.map(m => {
		const href = `/market/${m.node.id}`;
	  return { href, name: m.node.name["en"] }
	})

	$: console.log("GraphQL markets:", markets)

	const PATH_NAMES = {
		'': 'Home',
		product: 'Products'
	};

	$: pathRaw = $page.url.pathname?.split('/');
	$: pathHrefs = pathRaw[0] === '' && pathRaw[1] === '' ? [''] : pathRaw;
	$: console.log(pathHrefs);
	$: path = pathHrefs.map((h, i) => {
		const href = pathHrefs.slice(0, i + 1).join('/');
		return { href: href == '' ? '/' : href, name: PATH_NAMES[h] ?? h };
	});
	$: console.log('Path:', path);
</script>

<div class="flex flex-col h-screen justify-start items-center gap-4">
	<Navbar {path} links={markets} />
	<slot style="flex: 1;" />
	<Footer />
</div>
