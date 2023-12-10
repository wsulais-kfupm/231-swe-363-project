<script>
    import Navbar from '$lib/navbar.svelte'
    import Footer from '$lib/footer.svelte'
    import Placeholder from '$lib/assets/placeholder.jpeg'
    import Product from '$lib/product.svelte'
    import Category from '$lib/category.svelte'
    import FB from '$lib/assets/FB.png'

    

</script>

<style>
    .body{
        flex-direction: column;
        align-items: center;
    }
    


    .category-container {
        gap: 32px;
    }
</style>

<Navbar />
<div class="category-container">
    <Product src={FB} brand={"Ariel"} product={"Automatic Washing Powder Laundry Detergent"} weights={['5kg', '10kg', '20kg', '40kg']}/>
</div>




