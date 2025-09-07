// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
async function createTodo(body) {
    try {
        // Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {method: "post"});

        // После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
        if (response.status !== 201) {
            throw new Error("Incorrect url was printed");
        }

        // Преобразуйте респонс из JSON в объект
        const parseResponse = await response.json();

        // Проверьте, что айди в респонсе === 201
        if (parseResponse.id !== 201) {
            throw new Error("Incorrect id response");
        }

        // Функция должна возвращать полученный объект из респонса
        return parseResponse;
    } catch (error) {
        console.error(error);
    } finally { // в конце выведите в консоль текст, что работа функции завершена
        console.log('Работа функции завершена');
    }
}

const user = {
    "userId": 100,
    "id": 300,
    "title": "test aqa",
    "completed": false
}

createTodo(user);
