<script setup>
import getProduct from '@/composables/getProduct'
import { useRouter } from 'vue-router'

const props = defineProps({
  id: {}
})

const { error, load, product } = getProduct(props.id)
load()

const router = useRouter()

const back = () => {
  router.go(-1)
}
</script>

<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center text-center bg-secondary"
    style="height: 100vh; width: 100%"
  >
    <div class="">
      <svg
        @click="back"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        fill="currentColor"
        class="bi bi-arrow-left-short cursor-pointer"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
        />
      </svg>
    </div>
    <div class="text-center p-5 bg-dark text-light rounded">
      <h1>Name: {{ product.name }}</h1>
      <h2>Price: {{ product.price }}</h2>
      <p>ID: {{ product.id }}</p>
    </div>
  </div>
</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>