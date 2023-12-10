<script>
    import { Search, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
    import { SearchOutline, ChevronDownSolid } from 'flowbite-svelte-icons';
  
    const items = [
      {
        label: 'Categories'
      },
      {
        label: 'Mockups'
      },
      {
        label: 'Templates'
      },
      {
        label: 'Design'
      },
      {
        label: 'Logos'
      }
    ]
  
    let selectCategory = 'Categories'
  
  </script>
  
  <form class="flex">
    <div class="relative">
      <Button color="light" class="rounded-e-none whitespace-nowrap border border-e-0 border-primary-700">
        {selectCategory}
        <ChevronDownSolid class="w-2.5 h-2.5 ms-2.5" />
      </Button>
      <Dropdown>
        {#each items as { label }}
          <DropdownItem
            on:click={() => {
              selectCategory = label;
            }}
            class={selectCategory === label ? 'underline' : ''}
          >
            {label}
          </DropdownItem>
        {/each}
      </Dropdown>
    </div>
    <Search size="md" class="rounded-none py-2.5" placeholder="Search Products" />
    <Button color="blue" class="!p-2.5 rounded-s-none">
      <SearchOutline class="w-4 h-4" />
    </Button>
  </form>