<template>
  <main class="wrapper">
    <h1>Products</h1>
    <ProductCard
    v-for="product in inventory"
    :key="product.id"
    :product="product"
    :add_to_cart="add_to_cart"
    />
  </main>

</template>

<script>
  import ProductCard from '@/components/ProductCard.vue'

  export default {
    props: ['inventory', 'add_to_cart'],
    components: {
      ProductCard
    }
  }
</script>
