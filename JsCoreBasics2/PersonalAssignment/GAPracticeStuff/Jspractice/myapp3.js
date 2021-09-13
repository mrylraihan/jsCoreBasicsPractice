const paragraph = // eslint-disable-line no-unused-vars
	'When in the Course of human events it becomes necessary for one ' +
	'people to dissolve the political bands which have connected them ' +
	'with another and to assume among the powers of the earth the ' +
	'separate and equal station to which the Laws of Nature and of ' +
	'Natures God entitle them a decent respect to the opinions of ' +
	'mankind requires that they should declare the causes which impel ' +
	'them to the separation'

// 1. Write a function that takes a string argument splits it into an array of
// normalized words (uppercase strings) and returns that
// array.
const getNormalizedWords = function (words) {
	return words.toUpperCase().split(' ')
}
const normalizedWords = getNormalizedWords(paragraph)
console.log('Normalized words result is ', normalizedWords)

// 2. Write a function that takes a string argument and returns an array of
// unique normalized words.
const getUniqueWords = function (words) {
	// const w = words.toUpperCase().split(' ')
	// const wordSet = new Set(w)
	// const uniqueWords = [...wordSet]
	// return uniqueWords

	const wordsArray = words.toUpperCase().split(' ') // [words array]
	const uniqArray = []
	for (const i in wordsArray) {
		if (!uniqArray.includes(wordsArray[i])) {
			uniqArray.push(wordsArray[i])
		}
	}
	return uniqArray
}
const uniqueWords = getUniqueWords(paragraph)
console.log('Unique words result is ', uniqueWords)

// 3. Write a function that returns the count of words in a string. Provide the
// *option* to count unique words instead of total words. Unique words should be
// taken to mean the set of words that appear at least once (with no repeats).
// For example, the string "bird bird word" contains two unique words: "bird"
// and "word".  Don't forget to reuse functions wherever possible!
// (words, false)
// (words, true)
// (words, isUnique)
const wordCount = function (words, isUnique = false) {
	const wordList = words.split(' ')
	const unqArray = []
	if (isUnique === false) {
		return wordList.length
	} else if (isUnique === true) {
		for (const w in wordList) {
			if (!unqArray.includes(wordList[w])) {
				unqArray.push(wordList[w])
			}
		}
		return unqArray.length
	}
}
const paragraphWordCount = wordCount(paragraph, true)
console.log('paragraphWordCount result is ', paragraphWordCount)

const wordCount2 = function (words, isUnique = false) {
	const normalWords = getNormalizedWords(words) // takes a string and turns it to an array
	if (isUnique === false) {
		return normalWords.length // give the length of the returned array
	} else if (isUnique === true) {
		const unqArray = getUniqueWords(words) // returns a unique value array
		return unqArray.length // returns the length of the unique array
	}
}

const paragraphWordCount2 = wordCount2(paragraph, true)
console.log('paragraphWordCount result is ', paragraphWordCount2)
