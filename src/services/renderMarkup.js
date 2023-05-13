import { refs} from "../refs"

export function renderProductsList(markup) { 
  refs.allProductsList.innerHTML = markup;
}

export function renderProduct(markup) {
  refs.sidgleProductDiv.innerHTML = markup;
}