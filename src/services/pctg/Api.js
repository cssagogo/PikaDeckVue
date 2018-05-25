import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://api.pokemontcg.io/v1/',
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
