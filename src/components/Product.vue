<script setup>
const props = defineProps({
  product: {}
})
const { product } = props

const name = product.name
const price = product.price
const id = product.id
</script>


<template>
  <div class="product">
    <img src="https://via.placeholder.com/150" alt="a pic" />
    <router-link :to="{ name: 'details', params: { id: product.id } }">
      <h2>{{ name }}</h2>
    </router-link>
    <p>Price: {{ price }}</p>
  </div>
</template>

<style scoped>
.product {
  padding: 50px;
  margin: 20px;
  background-color: rgb(80, 83, 23);
  text-align: center;
  align-content: center;
  transition: 0.3s ease-in-out;
}

.product:hover {
  scale: 1.1;
  background: white;
}

img {
  border-radius: 50%;
  display: block;
}
</style>