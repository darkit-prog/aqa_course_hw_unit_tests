// Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:). 
// Функция принимеют на вход массив и колбэк. Используйте дженерик типы. 
//    Затипизировать надо саму функцию и коллбэк.
//    Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
//    где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
//    Пример:
//    map([1,2,3,4,5], callback) => [0,2,6,12,20]

type Callback<T, U> = (element: T, index: number, array: T[]) => U;

function myMap<T, U> (array: T[], callback: Callback<T, U>): U[] {
    const newArray = new Array<U>;

    for (let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i], i, array);
    }

    return newArray;
}

console.log(myMap([1, 2, 3, 4, 5], (element, index) => element * index)); // [0,2,6,12,20]
console.log(myMap([1.1, 2.4, 3.5, 4.0, 5.3], (element, index) => element * index));
