/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
  'php'
];

function sortedByVowels(wordsArr) {
  const vowels = 'aeiouy';
  const lowerCasedWords = wordsArr.map((word) => word.toLowerCase());

  if (!wordsArr.length) {
    return [];
  }

  return lowerCasedWords.toSorted((a, b) => [...a].filter((char) => vowels.includes(char)).length - [...b].filter((char) => vowels.includes(char)).length);
}

// console.log(sortedByVowels(words))

export { sortedByVowels };
