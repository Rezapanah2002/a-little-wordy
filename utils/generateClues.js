const blueClues = [
  { title: 'Synonym', description: 'Give a synonym for the word', cost: 1, image: '/images/synonym.png' },
  { title: 'Antonym', description: 'Give an antonym for the word', cost: 2, image: '/images/antonym.png' },
  { title: 'Rhyme', description: 'Give a word that rhymes with it', cost: 2, image: '/images/rhyme.png' },
  { title: 'First Letter', description: 'Reveal the first letter of the word', cost: 4, image: '/images/first_letter.png' },
  { title: 'Last Letter', description: 'Reveal the last letter of the word', cost: 1, image: '/images/last_letter.png' },
  { title: 'Number of Letters', description: 'Reveal the number of letters in the word', cost: 1, image: '/images/number_of_letters.png' },
];

const redSpicyClues = [
  { title: 'Scramble', description: 'Scramble the letters of the word', cost: 4, image: '/images/scramble.png' },
  { title: 'Opposite Context', description: 'Give a word with an opposite meaning', cost: 3, image: '/images/opposite_context.png' },
  { title: 'Sentence', description: 'Use the word in a sentence', cost: 5, image: '/images/sentence.png' },
  { title: 'Origin', description: 'Reveal the origin or root of the word', cost: 4, image: '/images/origin.png' },
  { title: 'Anagram', description: 'Provide an anagram of the word', cost: 3, image: '/images/anagram.png' },
  { title: 'Middle Letter', description: 'Reveal the middle letter of the word', cost: 2, image: '/images/middle_letter.png' },
  { title: 'Part of Speech', description: 'Reveal the part of speech (noun, verb, etc.)', cost: 2, image: '/images/part_of_speech.png' },
  { title: 'Word Length', description: 'Reveal the word length', cost: 1, image: '/images/word_length.png' },
  { title: 'Category', description: 'Reveal the category or topic of the word', cost: 2, image: '/images/category.png' },
  { title: 'Contextual Hint', description: 'Give a contextual hint about the word', cost: 3, image: '/images/contextual_hint.png' },
];

  
  function getRandomClues(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  
  export function generateClueCards() {
    const selectedBlueClues = getRandomClues(blueClues, 4);
    const selectedRedClues = getRandomClues(redSpicyClues, 4);
    return [...selectedBlueClues, ...selectedRedClues];
  }
  