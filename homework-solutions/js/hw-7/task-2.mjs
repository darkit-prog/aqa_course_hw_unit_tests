/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  let flag = true;
  if (typeof word !== "string") {
    return false;
  }

  for (let i = 0; i < word.length/2; i++) {
    if (word[i].toLowerCase() !== word[word.length - 1 - i].toLowerCase()) {
      flag = false;
      break;
    }
  }
  return flag;
}

// console.log(isPalindrom(1))

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (!sentence || typeof sentence !== "string") {
    return []
  }

  const splitedString = sentence.split(" ");
  let longestString = [""];

  for (let str of splitedString) {
    if (str.length > longestString.at(-1).length) {
      longestString = [];
      longestString.push(str);
    } else if (str.length === longestString.at(-1).length) {
      longestString.push(str);
    }
  }
  return longestString;
}

// console.log(findLongestWords("one two jbc fdd"))

export { isPalindrom, findLongestWords };
