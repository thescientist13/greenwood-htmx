async function getProducts() {
  const data = (await fetch(`https://dummyjson.com/products`)
    .then(resp => resp.json()));
  const { products } = data;

  return products;
}

export { getProducts };