<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="products" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <router-link to="past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </router-link>
    </nav>
    <div class="top-bar-cart-link" @click="toggle_sidebar">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ Object.keys(cart).length }})</span>
    </div>
  </header>
  <router-view :inventory="inventory" :add_to_cart="add_to_cart"/>
    <Sidebar v-if="sidebar" :toggle="toggle_sidebar" :cart="cart" :inventory="inventory"/>
</template>

<script>
  import Sidebar from '@/components/Sidebar.vue'
  import food from '@/food.json'

  export default {
    data () {
      return {
        inventory: food,
        cart: {},
        sidebar: false
      }
    },
    methods: {
      add_to_cart (name, quantity) {
        if (!this.cart[name]) this.cart[name] = 0
        if (quantity) {
          this.cart[name] += quantity
        }
      },
      toggle_sidebar () {
        this.sidebar = !this.sidebar
      }
    },
    components: {
      Sidebar
    }
  }
</script>
