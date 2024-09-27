<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import Product from './Product.vue'
import ProductInfo from './ProductInfo.vue'
import getProducts from '@/composables/getProducts'

let isShowing = ref(false)
let selectedItem = ref(null)

const { products, error, load } = getProducts()

load()

// onMounted(() => {
//   axios
//     .get('http://localhost:3000/products')
//     .then((res) => {
//       if (!res.status !== 200) {
//         throw Error('DI AKO TAMAD DI AKO KAGAYA MO!')
//       }
//       products.value = res.data
//     })
//     .catch((err) => {
//       error.value = err.message
//       console.log('Error here')
//     })
// })

const toogleinfo = (id) => {
  isShowing.value = true
  selectedItem.value = id
  console.log(id)
}

const handleData = (data) => {
  console.log(data)
  isShowing.value = data
}
</script>

<template>
  <div v-if="!error" class="parent-div">
    <div class="p-list">
      <Product
        v-for="product in products"
        :key="product.index"
        :product="product"
        @click="toogleinfo(product.id)"
      />
    </div>
    <div v-if="isShowing">
      <ProductInfo :modal="isShowing" :id="selectedItem" @send-data="handleData" />
    </div>
  </div>
  <div v-else>{{ error }}</div>
</template>

<style scoped>
.parent-div {
  padding: 30px;
  background: rgb(115, 122, 118);
}

.p-list {
  display: flex;
  justify-content: baseline;
  padding: 0px;
  flex-wrap: wrap;
  padding: auto;
  margin: 0px;
  background: rgb(115, 122, 118);
  width: 100%;
}
</style>