import axios from 'axios'
// import qs from 'qs'

const Util = {
  host: 'http://ec2-52-18-155-175.eu-west-1.compute.amazonaws.com/api/'
}

const request = axios.create({
  baseURL: Util.host
})

request.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

export default {
  getCarousels () {
    return request.get('carousels')
  },
  getBrands () {
    return request.get('brands')
  },
  getDiscovers () {
    return request.get('discovers')
  },
  getDiscover (id) {
    return request.get('discovers/' + id)
  },
  getDeals () {
    return request.get('products')
  },
  getDeal (id) {
    return request.get('products/' + id)
  },
  getShops () {
    return request.get('products')
  },
  getShop (id) {
    return request.get('products/' + id)
  },
  getItineraries () {
    return request.get('itineraries')
  },
  getItinerarie (id) {
    return request.get('itineraries/' + id)
  }
}
