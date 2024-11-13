function getMostFuelEfficientCars(cars, brand) {
  // Фільтруємо автомобілі за брендом та витратою палива
  const filteredCars = cars.filter(car => car.brand === brand && car.fuelConsumption < 6);
  
  // Сортуємо за витратою палива, щоб найекономніші йшли першими
  return filteredCars.sort((a, b) => a.fuelConsumption - b.fuelConsumption);
}

module.exports = getMostFuelEfficientCars;
