<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input, DarkMode} from 'flowbite-svelte'
    import { SearchOutline } from 'flowbite-svelte-icons'
    import LangDropdown from './dropdown.svelte'
    import Setting from './setting.svelte'
    import Search from './search.svelte'
</script>

<style>
  .nav-container{
    display: flex;
    width: 100%;
    padding: var(--6, 24px) var(--0, 0px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--white, #FFF);
  }
  .navbar{
    display: flex;
    padding: var(--0, 0px) 24px;
    align-items: center;
    gap: var(--8, 32px);
    align-self: stretch;
  }

  .text{
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

<header class="nav-container">
  <div class="navbar">
    <div class="text"><span>Supermarkets</span></div>
    <div class="mid"></div>
    <Search />
    <LangDropdown />
    <Setting />
  </div>
</header>
