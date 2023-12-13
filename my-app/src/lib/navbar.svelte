<script>
	import { Navbar, Breadcrumb, BreadcrumbItem, Button, DarkMode } from 'flowbite-svelte';
	import { SearchOutline, CogOutline, BarsSolid } from 'flowbite-svelte-icons';
	import LangDropdown from './dropdown.svelte';
	import Search from './search.svelte';
	import Branding from './Branding.svelte';

	export let links = [
		{ href: '/supermarkets', name: 'Supermarkets' },
		{ href: '/electronics', name: 'Electronics' }
	];
	export let path = [
		{ href: '/', name: 'Home' },
		{ href: 'product', name: 'Products' }
	];

	let open = false;
</script>

<header class="nav-container gap-4 py-4">
	<div class="mid lg:!hidden flex !flex-row justify-around">
		<Branding class="max-sm:hidden" />
		{#if path.length > 1}
			<Breadcrumb class="overflow-auto" aria-label="Solid background breadcrumb example" solid>
				{#each path as { href, name }}
					<BreadcrumbItem {href} home={href === '/'}>{name}</BreadcrumbItem>
				{/each}
			</Breadcrumb>
		{/if}
		<Button color="alternative" class="p-3" on:click={() => (open = !open)}>
			<BarsSolid />
		</Button>
	</div>
	<div
		class="navbar flex-col lg:flex-row lg:!flex lg:gray-200 gap-4 lg:gap-8 max-lg:bg-gray-200 max-lg:shadow-inner max-lg:!py-8"
		style:display={open ? 'flex' : 'none'}
	>
		<Branding class="max-lg:sm:hidden" />
		{#each links as { href, name }}
			<a {href}>{name}</a>
		{/each}
		<!-- <LangDropdown /> -->
		<div class="mid !hidden lg:!flex">
			{#if path.length > 1}
				<Breadcrumb class="overflow-auto" aria-label="Solid background breadcrumb example" solid>
					{#each path as { href, name }}
						<BreadcrumbItem {href} home={href === '/'}>{name}</BreadcrumbItem>
					{/each}
				</Breadcrumb>
			{/if}
		</div>
		<Search />
		<Button class="!p-2" color="alternative" alt="Settings" href="/settings"><CogOutline /></Button>
	</div>
</header>

<style>
	.nav-container {
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: var(--white, #fff);
	}
	.navbar {
		display: flex;
		padding: var(--0, 0px) 24px;
		align-items: center;
		align-self: stretch;
	}

	.text {
		display: flex;
		padding: var(--0, 0px);
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		gap: var(--0, 0px);
	}

	.text > span {
		color: var(--gray-900, #111928);
		text-align: center;
		font-family: Inter;
		font-size: 16px;
		font-style: italic;
		font-weight: 500;
		line-height: 150%; /* 24px */
	}

	.mid {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		flex: 1 0 0;
		align-self: stretch;
	}
</style>
