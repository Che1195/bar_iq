export const upperFirstLetter = (word) => {
    const upperFirstLetter = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1)
    console.log(upperFirstLetter + remainingLetters)
    return upperFirstLetter + remainingLetters
}

// const word = "butter"
// upperFirstLetter(word)