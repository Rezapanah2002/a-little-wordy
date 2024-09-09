const vowels = ['A', 'E', 'I', 'O', 'U'];
const consonants = [
  'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
  'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'
];

function getRandomLetters(array, count) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function generateRandomLetters() {
  const selectedVowels = getRandomLetters(vowels, 4);
  const selectedConsonants = getRandomLetters(consonants, 7);
  return [...selectedVowels, ...selectedConsonants];
}