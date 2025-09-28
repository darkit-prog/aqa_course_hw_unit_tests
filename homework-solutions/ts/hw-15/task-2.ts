// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

function getKeyByValue<T>(object: T, value: T[keyof T]): keyof T | undefined {
    for (let i in object) {
        if (object[i] === value) {
            return i;
        }
    }
}

const test = {
    name: "Test",
    id: 1,
    maybeRight: true
}

console.log(getKeyByValue(test, true));
console.log(getKeyByValue(test, "noexist"));