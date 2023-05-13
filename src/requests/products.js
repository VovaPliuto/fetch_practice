const BASE_URL = "https://dummyjson.com";

export function getProducts() {
  return fetch("https://dummyjson.com/products")
    .then((res) => res.json());
}

