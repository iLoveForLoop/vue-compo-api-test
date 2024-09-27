import { ref } from 'vue'
const getProducts = () => {
  let products = ref([])
  let error = ref(null)

  const load = async () => {
    console.log('rest')
    try {
      const data = await fetch('http://localhost:3000/products')
      if (!data.ok) {
        throw Error('EROOOOOOOOOOOOOOO')
      }
      products.value = await data.json()
    } catch (err) {
      error.value = err.message
    }
  }

  return { products, error, load }
}

export default getProducts
