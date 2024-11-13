function getPopularCategories(products) {
  // Спочатку фільтруємо продукти, де продажі більше 5
  const filteredProducts = products.filter(product => product.sales > 5);

  // Створюємо масив для унікальних категорій
  const uniqueCategories = [];

  // Для кожного продукту беремо категорію
  filteredProducts.forEach(product => {
    // Якщо категорії ще немає в масиві, додаємо її
    if (uniqueCategories.indexOf(product.category) === -1) {
      uniqueCategories.push(product.category);
    }
  });

  // Повертаємо масив з унікальними категоріями
  return uniqueCategories;
}

// Приклад використання:
const products = [
  { name: 'Apple', category: 'Fruit', sales: 12 },
  { name: 'Banana', category: 'Fruit', sales: 3 },
  { name: 'Carrot', category: 'Vegetable', sales: 8 },
  { name: 'Lettuce', category: 'Vegetable', sales: 2 },
  { name: 'Bread', category: 'Bakery', sales: 7 },
  { name: 'Milk', category: 'Dairy', sales: 10 },
  { name: 'Eggs', category: 'Dairy', sales: 6 }
];

console.log(getPopularCategories(products)); // ['Fruit', 'Vegetable', 'Bakery', 'Dairy']

module.exports = getPopularCategories;
