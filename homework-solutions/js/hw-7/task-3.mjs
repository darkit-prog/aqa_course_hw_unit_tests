/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
  let sum = number % 10;
  number > 9 ? sum += digitalRoot(Math.floor(number / 10)) : sum = number;

  if (sum > 9) {
    sum = digitalRoot(sum);
  }
  return sum;
}

// console.log(digitalRoot(0));

export { digitalRoot };
