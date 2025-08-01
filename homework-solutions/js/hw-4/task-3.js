/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/

const minAge = 18;
const maxAge = 60;
const age = 20;

if (age === "" || isNaN(age)  || typeof age != 'number' && typeof age != 'string' ) {
  console.log('Incorrect data type');
} else if (age < minAge) {
  console.log("You don't have access cause your age is " + age + " It's less then " + minAge);
} else if (age >= minAge && age <= maxAge) {
  console.log("Welcome!");
} else if (age > maxAge) {
  console.log( "Keep calm and look Culture channel");
} else {
  console.log("Technical work");
}

// 10 - You don't have access cause your age is 10 It's less then
// 17 - You don't have access cause your age is 17 It's less then 1
// 18 - Welcome!
// 60 - Welcome!
// 61 - Keep calm and look Culture channel
// -10 - You don't have access cause your age is -10 It's less then 18
// "kek"- Incorrect data type
// "2" - You don't have access cause your age is 2 It's less then 18
// "17" - You don't have access cause your age is 17 It's less then 1
// "18" - Welcome!
// "60" - Welcome!
// true - Incorrect data type
// "true" - Incorrect data type
// null - Incorrect data type
// "null" - Incorrect data type
// undefined - Incorrect data type
// "undefined" - Incorrect data type
// "" - Incorrect data type