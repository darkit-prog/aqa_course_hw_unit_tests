// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.

function validatePassword(password: string): boolean {
    if (!/[A-ZА-Я]/.test(password)) {
        // console.error("Пароль должен содержать хотя бы одну заглавную букву");
        return false;
    } else if (!/[a-zа-я]/.test(password)) {
        // console.error("Пароль должен содержать хотя бы одну букву в нижнем регистре")
        return false;
    } else if (!/[0-9]/.test(password)) {
        // console.error("Пароль должен содержать хотя бы одну цифру")
        return false;
    } else if (password.length < 8) {
        // console.error("Пароль должен быть не менее 8 символов")
        return false;
    } else if (!password.trim()) {
        // console.error("Пароль не должен состоять из одних пробелов");
        return false;
    } else {
        // console.log("Ты ввел валидный пароль!")
        return true;
    }
}

// console.log(validatePassword("рНе137ОJk"));
// console.log(validatePassword("abcdEFG1"));
// console.log(validatePassword("abcD1   "));
// console.log(validatePassword("Dtm5m35"));
// console.log(validatePassword("12345678"));
// console.log(validatePassword("abcdefgh"));
// console.log(validatePassword("ABCDEFGH"));
// console.log(validatePassword("abcdEFGH"));
// console.log(validatePassword("        "));
// console.log(validatePassword("A1      "));
// console.log(validatePassword("x5      "));
// console.log(validatePassword("A1x      "));
// console.log(validatePassword("x5A      "));
// console.log(validatePassword("а1И5  Ро"));
