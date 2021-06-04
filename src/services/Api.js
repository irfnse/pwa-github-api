// import module axios
import axios from 'axios'

// mendeklarasikan method
export default() => {
  return axios.create({
    // base url API yang digunakan
    baseURL: 'https://api.github.com/'
  })
}
