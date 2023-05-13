import { refs} from "../refs"

export function renderProductsList(markup) { 
  refs.allProductsList.innerHTML = markup;
}