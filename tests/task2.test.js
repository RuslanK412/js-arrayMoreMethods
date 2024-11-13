function getProductsNotInPriceRange(products) {
  // Фільтруємо товари, де ціна менша за 100 або більша за 500
  const filteredProducts = products.filter(product => product.price < 100 || product.price > 500);
  
  // Повертаємо лише назви товарів
  return filteredProducts.map(product => product.name);
}

module.exports = getProductsNotInPriceRange;
