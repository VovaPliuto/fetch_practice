import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export function getProducts() {
  return fetch(`${BASE_URL}/products`).then((res) => res.json());
}

export function getProductsById(id) {
  return fetch(`${BASE_URL}/products/${id}`).then((res) => res.json());
}

export function addProduct(data) {
  return axios.post(`${BASE_URL}/products/add`, data);
}

// fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(data)
// })
// .then(res => res.json())
// .then(console.log);
