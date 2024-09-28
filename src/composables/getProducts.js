import axios from 'axios'
import { ref } from 'vue'
const getProducts = () => {
  let products = ref([])
  let error = ref(null)

  const load = async () => {
    //   try {
    //     const data = await fetch('http://localhost:3000/products')
    //     if (!data.ok) {
    //       throw Error('EROOOOOOOOOOOOOOO')
    //     }
    //     products.value = await data.json()
    //   } catch (err) {
    //     error.value = err.message
    //   }
    // }
    axios
      .get('http://localhost:3000/products')
      .then((res) => {
        if (res.status !== 200) {
          throw Error('Tangina Error pre')
        }
        products.value = res.data
      })
      .catch((err) => {
        error.value = err.message
      })

    console.log('AXIOs')
  }

  return { products, error, load }
}

export default getProducts
