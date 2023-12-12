<script>
	import {
		Search,
		Select,
		Button,
		Input,
		ButtonGroup,
		InputAddon,
		Dropdown,
		DropdownItem,
		DropdownDivider
	} from 'flowbite-svelte';
	import { SearchOutline, ChevronDownSolid, UserCircleSolid } from 'flowbite-svelte-icons';

	export let categories = [
		{
			name: 'Food & Drinks',
			value: 'food-drinks'
		},
		{
			name: 'Disposables',
			value: 'disposables'
		},
		{
			name: 'Household',
			value: 'household'
		}
	];

	// HACK: properly submit the form without refreshing the page.
	function submit() {
		document.getElementById('search-form').submit();
	}
</script>

<form id="search-form" class="flex" method="GET" action="/product">
	<ButtonGroup class="w-full">
		<Select
			name="category"
			placeholder="Choose a category"
			class="rounded-e-none rtl:border-e-0 truncate"
		>
			<option selected value="">All Categories</option>
			{#each categories as { value, name }}
				<option {value}>{name}</option>
			{/each}
		</Select>
		<Input name="name" placeholder="Seach Products" />
		<Button color="blue" on:click={submit} class="!p-2.5 !rounded-s-none !rounded-e-lg">
			<SearchOutline class="w-4 h-4" />
		</Button>
	</ButtonGroup>
</form>
