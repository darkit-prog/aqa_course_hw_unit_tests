/*
  Создайте функцию, принимающую число n, которая при каждом вызове будет
  генерировать случайное число [1 - n] включительно. 
  Условие - каждый следующий вызов должен давать новое число (не встречавшееся в прошлых вызовах). 
  И так пока не переберутся все n чисел. На n + 1 вызов и
  далее функция должна возвращать 'All numbers were received'. 
  Задачу решить через замыкания
  Например n = 5, функция выведет 5 чисел 1-5, а после будет выводить сугубо 'All numbers were received'

  Рекоммендации:
   - Для генерации числа в границах воспользуйтесь методом:
      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

*/

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function uniqueRandomGenerator(n) {
  let numbers = [...Array(n + 1).keys()];
  numbers.shift()

  return function () {
    if (numbers.length === 0) {
      return 'All numbers were received';
    }

    let index = getRandomArbitrary(0, numbers.length - 1);
    const result = numbers[index];

    numbers.splice(index, 1);
    // console.log(result, numbers)
    return result;
  }
}

// let randomNumbers = uniqueRandomGenerator(5);
// randomNumbers()
// randomNumbers()
// randomNumbers()
// randomNumbers()
// randomNumbers()
// randomNumbers()
// randomNumbers()
// randomNumbers()
// randomNumbers()

export { uniqueRandomGenerator };
