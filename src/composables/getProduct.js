import { ref } from 'vue'
import axios from 'axios'

const getProduct = (id) => {
  const product = ref(null)
  const error = ref(null)

  const load = async () => {
    axios
      .get('http://localhost:3000/products/' + id)
      .then((res) => {
        if (res.status !== 200) {
          throw Error('Product Does not exist')
        }
        product.value = res.data
      })
      .catch((err) => {
        error.value = err.message
      })
  }

  return { product, error, load }
}

export default getProduct
