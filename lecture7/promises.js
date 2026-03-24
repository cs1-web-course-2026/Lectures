function orderPizza() {
  console.log('🍕 Роблю замовлення піци...');

  return new Promise((resolve, reject) => {
    // Симулюємо час на приготування та доставку
    setTimeout(() => {
      // Випадково вирішуємо, чи успішна доставка
      if (Math.random() > 0.8) {
        resolve('✅ Ваша піца "Пепероні" доставлена!');
      } else {
        reject("❌ Ой, кур'єр застряг у заторі!");
      }
    }, 2000);
  });
}

orderPizza()
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.error(errorMessage);
  })
  .finally(() => {
    console.log('🙏 Дякуємо, що обрали нашу піцерію!');
  });
