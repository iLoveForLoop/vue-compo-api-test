<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const props = defineProps({
  id: {},
  modal: {}
})
const { id, modal } = props

const emit = defineEmits(['send-data'])

const toogle = () => {
  console.log('emit!')
  emit('send-data', false)
}

let product = ref({})

onMounted(() => {
  axios.get('http://localhost:3000/products/' + id).then((res) => {
    product.value = res.data
  })
})
</script>

<template>
  <div class="backdrop" @click.self="toogle" v-if="modal">
    <div class="containerization">
      <img src="https://via.placeholder.com/350" alt="a pic" />
      <h1>{{ product.name }}</h1>
      <h3>Price: {{ product.price }}</h3>
      <h3>ID: {{ id }}</h3>
    </div>
  </div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
}
.containerization {
  text-align: center;
  align-content: center;
  background: antiquewhite;
  padding: 50px;
  animation: fadeInRotate 1s ease forwards;
}

/* Define keyframe animations */
@keyframes fadeInRotate {
  from {
    opacity: 0;
    transform: rotate(180deg);
  }
  to {
    opacity: 1;
    transform: rotate(0deg);
  }
}

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
} */
</style>
