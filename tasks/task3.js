function addSuccessPercent(olympicRepresentation) {
  // Використовуємо метод map, щоб пройти по кожному об'єкту в масиві
  return olympicRepresentation.map(item => {
    // Обчислюємо відсоток медалей
    const percent = item.athletes > 0 ? (item.medals / item.athletes) * 100 : 0;
    
    // Повертаємо новий об'єкт з доданим полем percentOfSuccess
    return {
      ...item, // зберігаємо всі існуючі поля
      percentOfSuccess: parseFloat(percent.toFixed(1)) // додаємо поле percentOfSuccess
    };
  });
}

// Приклад використання:
const olympicRepresentation = [
  { sport: 'Swimming', athletes: 20, medals: 6 },
  { sport: 'Gymnastics', athletes: 10, medals: 2 },
  { sport: 'Boxing', athletes: 15, medals: 5 },
  { sport: 'Athletics', athletes: 25, medals: 3 }
];

console.log(addSuccessPercent(olympicRepresentation));
