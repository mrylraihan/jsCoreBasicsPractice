// An array of books
const books = [
	{ title: 'Catch-22', yearPublished: 1961, pageCount: 453 },
	{ title: 'Clean Code', yearPublished: 2008, pageCount: 464 },
	{ title: 'Game of Thrones', yearPublished: 1996, pageCount: 694 },
	{ title: 'Frankenstein', yearPublished: 1818, pageCount: 280 },
	{ title: '1984', yearPublished: 1949, pageCount: 328 },
]

// Bonus: 1. forEach
// 1a. Sum the `pageCount` of all of the `books` using `forEach`.
// Store your result in `pageCountTotal`
// Hint: Review `forEach` mdn docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

let pageCountTotal = 0
books.forEach(n=>{
    pageCountTotal +=n.pageCount
})
console.log(pageCountTotal);


// Bonus: 2. map
// 2a. Create an array with each book title in uppercase
//     using the `map` array method. Store the result in `uppercaseTitles`
// Hint: Review `map` mdn docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const uppercaseTitles = books.map(book=>book.title.toLocaleUpperCase())

// Bonus: 3. filter
// 3a. Create an array with only the books published in 1980 or after
//     using the `filter` array method. Store the result in `booksAfter1980`
// Hint: Review `filter` mdn docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const booksAfter1980 = books.filter(book=>book.yearPublished>=1980)

// Bonus: 4. findIndex
// 4a. Find the index of the first book with 300 pages or less
//     using the `findIndex` array method. Store the result in `bookLessThan300PagesIndex`
// Hint: Review `findIndex` mdn docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
const bookLessThan300PagesIndex = books.findIndex(book=>book.pageCount<300)
console.log(bookLessThan300PagesIndex);
// Bonus: 5. find
// 5a. Find the value of the first book with 300 pages or less
//     using the `find` array method. Store the result in `bookLessThan300Pages`
// Hint: Review `find` mdn docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
const bookLessThan300Pages = books.find(book=> book.pageCount < 300)
console.log(bookLessThan300Pages);
// Bonus: 6. some
// 6a. Return true if some (any) book has 500 pages or more
//     using the `some` array method. Store the result in `isPageCountOver500`
// Hint: Review `some` mdn docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
const isPageCountOver500 = books.some(book=>book.pageCount>=500)
console.log(isPageCountOver500);
// Bonus: 7. every
// 7a. Return true if every score was published in the year 1800 or after
//     using the `every` array method. Store the result in `isEveryBookAfter1800`
// Hint: Review `every` mdn docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
const isEveryBookAfter1800 = books.every(book=>book.yearPublished>=1800)
console.log(isEveryBookAfter1800);