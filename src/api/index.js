import axios from 'axios'
// import qs from 'qs'

// const Util = {
//    host: 'http://ec2-52-18-155-175.eu-west-1.compute.amazonaws.com/api/'
// }

const request = axios.create({
  baseURL: '/api/' // Util.host
})

request.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

export default {
  getBrands () {
    return request.get('brands')
  },
  getBrand (id) {
    return request.get('brands/' + id)
  },
  getDiscovers(page) {
    return request.get('discovers?page=' + page)
  },
  getDiscover(id) {
    return request.get('discovers/' + id)
  },
  getDeals (page) {
    return request.get('deals?page=' + page)
  },
  getDeal (id) {
    return request.get('deals/' + id)
  },
  getShops () {
    return request.get('products')
  },
  getShop (id) {
    return request.get('products/' + id)
  },
  getItineraries (page) {
    return request.get('itineraries?page=' + page)
  },
  getItinerary (id) {
    return request.get('itineraries/' + id)
  },
  getCategories (page) {
    return request.get('categories?page=' + page)
  },
  getCategory (id) {
    return request.get('categories/' + id)
  },
  getCarousels () {
    return request.get('carousels')
  }
}
