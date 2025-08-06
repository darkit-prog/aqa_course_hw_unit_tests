/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

let resultUnique = [];
let resultNull;

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

function checkPizza(competitorPizza, myPizzasT) {
  let matrix = [];

  for (let myPizza of myPizzasT) {
    let flag = false;
    for (let compPizza of competitorPizzas) {
      if (myPizza.toLowerCase() === compPizza.toLowerCase()) {
        flag = true;
        break;
      }
    }

    if (!flag) {
      matrix.push(myPizza);
    }
  }

  // console.log(matrix)
  return matrix.length ? matrix : null;
}

resultUnique = checkPizza(competitorPizzas, myPizzasT1);
resultNull = checkPizza(competitorPizzas, myPizzasT2);

// console.log(resultUnique, resultNull);

export { resultNull, resultUnique };
