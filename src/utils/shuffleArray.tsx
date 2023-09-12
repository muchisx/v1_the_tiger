/* eslint-disable no-plusplus */

// Fisher-Yates Sorting Algorithm
// Returns a shuffled array, a shallow copy of the original array
const shuffleArray = <T,>(array: T[]) => {
  const newArray = [...array];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default shuffleArray;
