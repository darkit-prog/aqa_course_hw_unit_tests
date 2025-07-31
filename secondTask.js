// Напишите скрипт, который принимает целое положительное число n (одно любое от 1 до 9), и выводит в консоль сумму равную n + nn + nnn, где n не преображаются, а конкатенируют
function sumMultipleNumber(n) {
    if (typeof n !== 'number') {
        console.log("n must be a number");
    }
    else if (n >= 1 && n <= 9) {
        const nn = Number(String(n) + n); //55
        const nnn = Number(String(n) + n + n); //55
        const sum = n + nn + nnn;
        console.log(sum);
    } else {
        console.log("n must be between 0 and 9");
    }
}

sumMultipleNumber(5)
sumMultipleNumber(55)
sumMultipleNumber("5")
sumMultipleNumber(true)
sumMultipleNumber(null)
sumMultipleNumber(undefined)