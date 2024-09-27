<script setup>
const props = defineProps({
  product: {
    type: Object,
    default: () => ({
      name: 'Def',
      id: 0,
      price: 0
    })
  }
})
const { product } = props

const name = product.name
const price = product.price
</script>


<template>
  <div class="product">
    <img src="https://via.placeholder.com/150" alt="a pic" />
    <h2>{{ name }}</h2>
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