function getPopularCategories(products) {
  // Фільтруємо товари, де кількість продажів більше 5
  const filteredProducts = products.filter(product => product.sales > 5);

  // Сортуємо товари за кількістю продажів у зменшувальному порядку
  const sortedProducts = filteredProducts.sort((a, b) => b.sales - a.sales);

  // Отримуємо тільки унікальні категорії
  const categories = sortedProducts.map(product => product.category);

  // Використовуємо Set для отримання унікальних категорій
  const uniqueCategories = [...new Set(categories)];

  return uniqueCategories;
}

module.exports = getPopularCategories;

getPopularCategories([
  { name: 'Phone', category: 'Electronics', sales: 10 },
  { name: 'Tablet', category: 'Electronics', sales: 3 },
  { name: 'Shirt', category: 'Clothing', sales: 8 },
  { name: 'Laptop', category: 'Electronics', sales: 12 },
  { name: 'Jacket', category: 'Clothing', sales: 2 },
  { name: 'Shoes', category: 'Footwear', sales: 6 },
  { name: 'Watch', category: 'Electronics', sales: 7 }
]);

getPopularCategories([
  { name: 'Tablet', category: 'Electronics', sales: 3 },
  { name: 'Jacket', category: 'Clothing', sales: 2 }
]);

getPopularCategories([
  { name: 'Phone', category: 'Electronics', sales: 10 },
  { name: 'Laptop', category: 'Electronics', sales: 15 },
  { name: 'Shoes', category: 'Footwear', sales: 8 },
  { name: 'Shirt', category: 'Clothing', sales: 9 }
]);

getPopularCategories([
  { name: 'Phone', category: 'Electronics', sales: 10 },
  { name: 'Tablet', category: 'Electronics', sales: 5 },
  { name: 'Shirt', category: 'Clothing', sales: 8 },
  { name: 'Laptop', category: 'Electronics', sales: 12 },
  { name: 'Shoes', category: 'Footwear', sales: 6 },
  { name: 'Watch', category: 'Electronics', sales: 7 }
]);
getPopularCategories([]);
