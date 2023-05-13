export function createProductsMarkup(dataProducts) { 
  return dataProducts.products.reduce((markup, { title, description, price }) => {
    return markup + `<h2>${title}</h2><p>${description}</p><p>${price}</p>`;
  }, "");
} 

export function createProductMarkup({ title, description, price }) {
  return `<h2>${title}</h2><p>${description}</p><p>${price}</p>`;
};