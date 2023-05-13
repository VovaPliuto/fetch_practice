import "./styles/normalize.css";
import "./styles/index.css";
import { getProducts, getProductsById } from "./requests/products";
import {
  createProductsMarkup,
  createProductMarkup,
} from "./services/markupService";
import { refs } from "./refs";
import { renderProductsList, renderProduct } from "./services/renderMarkup";

// getProducts().then(createProductsMarkup).then(renderProductsList);

refs.getProductForm.addEventListener("submit", onGetProductSubmit); 

function onGetProductSubmit(event) {
    event.preventDefault();
    const id = event.currentTarget.elements.id.value.trim();
    getProductsById(id).then(createProductMarkup).then(renderProduct);
}; 