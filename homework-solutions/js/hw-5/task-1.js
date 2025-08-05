/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

let evenNumbersResult = '';
let number = 10;

while (number >= 0) {
    if (number % 2 == 0) {
        evenNumbersResult += number;
    } else {
        evenNumbersResult += "-";
    }
    number -= 1;
}
// console.log(evenNumbersResult);

/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

let smilePatternResult = '';
let smile = ":)"
for (let i = 1; i <= 5; i++) {
    if (i !== 5) {
        smilePatternResult += smile.repeat(i) + '\n';
    } else {
        smilePatternResult += smile.repeat(i);
    }
}
// console.log(smilePatternResult);


/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */
const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = text.replaceAll(" ", "1");
// console.log(replaceSpacesWithOneResult);

export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
