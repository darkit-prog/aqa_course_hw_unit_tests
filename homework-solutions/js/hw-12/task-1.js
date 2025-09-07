// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds

const { resolveModuleName } = require("typescript");

function delayTwoSeconds(callback) {
    setTimeout(callback, 2000);
}

function checkDelay() {
    console.log("Коллбэк отработан спустя 2 секунды после вызова delayTwoSeconds");
}

delayTwoSeconds(checkDelay);

// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль

const resolvedPromise = new Promise((resolve) => resolve(1));
resolvedPromise.then((result) => console.log(result));

// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
//   Обработайте промис методом .catch и выведите результат его резолва в консоль

const rejectPromise = new Promise((_, reject) => reject("Promise failed"));
rejectPromise.catch((result) => console.log(result));

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.

function promiseNumber(number) {
    const result = new Promise((resolve, reject) => {
        if (typeof number != "number") {
            reject(number);
        } else {
            resolve(number);
        }
    })
    return result;
}

let promNumberFirst = promiseNumber(5)
promNumberFirst
    .then(result => console.log(result))
    .catch(result => console.log("Not a number"));

let promNumberSecond = promiseNumber("a")
promNumberSecond
    .then(result => console.log(result))
    .catch(result => console.log("Not a number"));

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then(promises => promises.map(element => console.log(element)))
    .catch(reject => console.log(reject));

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then(promises => promises.map(element => console.log(element)))
    .catch(reject => console.log(reject));

// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
const arrPromises = [promiseNumber("d"), promiseNumber(2), promiseNumber(3)];

async function promiseAll() {
    try {
        (await Promise.all(arrPromises)).map((element) => console.log(element));
    } catch(error) {
        console.error(error);
    }
}

async function promiseAllSettled() {
    try {
        (await Promise.allSettled(arrPromises)).map((element) => console.log(element));
    } catch(error) {
        console.error(error);
    }
}

promiseAll();
promiseAllSettled();
