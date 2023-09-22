// Write a function that takes in 2 strings and returns a boolean
// This function takes in two strings and will determine is the strings are annagrams for each other
// Annagram is a word that has the same amount of letters (although rearranged) to form a different word
// EX; isAnnagram('cars', 'scar) => true
// EX: is Annagram('boat', 'bath') => false

// Process:
// Thinking like #tally method in ruby where you end up with an object that counts your letters,
// Iterate 1 time through the str and add each character to an object, like a counter
// Iterate 1 time through the second string and compare to the first the amount letters in each obj

const isAnnagram = (str1, str2) => {
  const characters = {};
  const firstArr = str1.split("");
  const secondArr = str2.split("");

  if (firstArr.length !== secondArr.length) {
    return false;
  }

  for (let i = 0; i < firstArr.length; i++) {
    if (characters[firstArr[i]] !== undefined) {
      characters[firstArr[i]] += 1;
    } else {
      characters[firstArr[i]] = 1;
    }
  }

  for (let i = 0; i < firstArr.length; i++) {
    if (characters[secondArr[i]] !== undefined) {
      characters[secondArr[i]] -= 1;
    } else {
      characters[secondArr[i]] = 1;
    }
  }

  return Object.values(characters).filter((elem) => elem !== 0).length === 0;
};
