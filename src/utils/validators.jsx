export function validateMealOrder(meals) {
  const times = [
    meals.breakfast.time,
    meals.lunch.time,
    meals.snacks.time,
    meals.dinner.time
  ];

  for (let i = 1; i < times.length; i++) {
    if (times[i] && times[i - 1] && times[i] < times[i - 1]) {
      return false;
    }
  }
  return true;
}
