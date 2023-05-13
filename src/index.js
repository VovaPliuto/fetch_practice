import "./styles/normalize.css";
import "./styles/index.css";
import { getProducts } from "./requests/products";
import { createProductsMarkup } from "./services/markupService";
import { refs } from "./refs";
import { renderProductsList } from "./services/renderMarkup";

getProducts().then(createProductsMarkup).then(renderProductsList);
