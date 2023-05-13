import "./styles/normalize.css";
import "./styles/index.css";
import { getProducts, getProductsById, addProduct } from "./requests/products";
import {
  createProductsMarkup,
  createProductMarkup,
} from "./services/markupService";
import { refs } from "./refs";
import { renderProductsList, renderProduct } from "./services/renderMarkup";

// getProducts().then(createProductsMarkup).then(renderProductsList);

refs.getProductForm.addEventListener("submit", onGetProductSubmit); 
refs.formThird.addEventListener("submit", onFormThirdSubmit); 

function onGetProductSubmit(event) {
    event.preventDefault();
    const id = event.currentTarget.elements.id.value.trim();
    getProductsById(id).then(createProductMarkup).then(renderProduct);
}; 

function onFormThirdSubmit(event){
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const data = {};

  formData.forEach((value, name)=>{
    data[name] = value;
  })

  addProduct(data).then((response) => createProductMarkup(response.data)).then(renderProduct)
}

