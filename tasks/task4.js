function getMostFuelEfficientCars(cars, brand) {
  // Фільтруємо тільки ті автомобілі, чия витрата палива менше 6 л/100 км
  const efficientCars = cars.filter(car => car.fuelConsumption < 6);
  
  // Перевіряємо, чи є автомобілі з витратою палива більше або рівно 6 л/100 км
  const allEfficient = cars.every(car => car.fuelConsumption < 6);

  // Якщо хоча б один автомобіль не відповідає вимогам, повертаємо порожній масив
  if (!allEfficient) {
    return [];
  }

  // Фільтруємо по бренду
  const filteredByBrand = efficientCars.filter(car => car.brand === brand);

  // Сортуємо за витратою палива по зростанню
  const sortedByEfficiency = filteredByBrand.sort((a, b) => a.fuelConsumption - b.fuelConsumption);

  return sortedByEfficiency;
}

// Приклад використання:
const cars = [
  { brand: 'Toyota', model: 'Corolla', fuelConsumption: 5.2 },
  { brand: 'Honda', model: 'Civic', fuelConsumption: 5.9 },
  { brand: 'Toyota', model: 'Camry', fuelConsumption: 5.5 },
  { brand: 'Ford', model: 'Focus', fuelConsumption: 6.1 },
  { brand: 'Honda', model: 'Accord', fuelConsumption: 5.8 },
  {
