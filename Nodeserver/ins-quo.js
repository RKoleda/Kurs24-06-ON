import { getQuote, getRandomQuote } from 'inspirational-quotes';

console.log(getQuote()); // returns quote (text and author)
console.log(getQuote({ author: false })); // return quote without author
console.log(getRandomQuote()); // return any random quote
