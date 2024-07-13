<template>
      <div class="splash-container">
        <div class="splash">
          <h1>Splendid Food</h1>
        </div>
      </div>

      <main class="wrapper">

        <h2>Recommended</h2>

        <div class="recommended">
          <ProductCard
          v-for="product in inventory.slice(0, 3)"
          :key="product.id"
          :product="product"
          :add_to_cart="add_to_cart"
          />
        </div>

      </main>
</template>

<script>
// @ is an alias to /src
import ProductCard from '@/components/ProductCard.vue'
export default {
  name: 'HomeView',
  props: ['inventory', 'add_to_cart'],
  components: {
    ProductCard
  }
}
</script>
