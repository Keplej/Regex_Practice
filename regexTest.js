// https://www.youtube.com/watch?v=ZfQFUJhPqMM


//First Example
let myString = "Hello, World!";
let myRegex = /Hello/;
let resultHello = myRegex.test(myString);

console.log("Hello is in, Hello World!", resultHello);

// Second Example
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// the /example text/ is case sensitive 
let waldoRegex = /Waldo/;
let resultWaldo = waldoRegex.test(waldoIsHiding);

console.log("Is Waldo hiding in this text?", resultWaldo);

// multiple word example
let petString = "James has a pet cat.";
// | lets you match a literal string with different possibilities
let petRegex = /dog|cat|bird|fish/;
let resultPet = petRegex.test(petString);

// Since one of the pets in petRegex matches up with petString it will return as true because there is a cat matching
console.log("Is there a dog, cat, bird or fish?", resultPet);


// Ignore Case While Matching
let myCodeCampString = "freeCodeCamp";
// We are trying to make it show up even though there is no capital C in freecodecamp to the freeCodeCamp
// The i is the flag the ignores the case
let fccRegex = /freecodecamp/i;
let codeCampResult = fccRegex.test(myCodeCampString);

console.log("freeCodeCamp", codeCampResult);

// Exact Matches
// we can extract the exact match we want from a string
let extractStr = "Extract the word 'coding' from this string.";
// we want to extract just coding from the string above 
let codingRegex = /coding/;
let resultExract = extractStr.match(codingRegex);

console.log(resultExract);


//Find more than the first match
// We are trying to find a pattern more than once using a g flag
let testStr = "Repeat, Repeat, Repeat";
// The g is the flag to find all the Repeat
let ourRegex = /Repeat/g;
testStr.match(ourRegex);

console.log(testStr.match(ourRegex));

let twinkleStar = "Twinkle, twinkle, little star";
// We are trying to grab both twinkles even though one of them has a capital and the other one is lowercase
// This is where we add the i flag first then the g flag 
// Remember i ignores case sensitive and g grabs all the same words in a string
let starRegex = /twinkle/ig;
let resultTwinkle = twinkleStar.match(starRegex);

console.log(resultTwinkle);

// Matching anything with Wildcard Period
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
// period is a while card character can stand for anything. it will grab everything with hu using the . at the end.
let huRegex = /hu./;
humStr.match(huRegex);
hugStr.match(huRegex);

console.log(humStr.match(huRegex));
console.log(hugStr.match(huRegex));

let exampleStr = "Let's have fun with regular expressions!";
// this lets us look for anything that ends with un
let unRegex = /.un/;
let resultExample = unRegex.test(exampleStr);

//Matched with the word fun in the exampleStr sentence
console.log(resultExample);


// Match Single Character with Multiple Possibilities
// we match with a predefinded group of characters. Ex. big, bag, bug
let bgRegex = /b[aiu]g/;

let quoteSample = "Beware of bugs in the above code; I have oly proved it correct";
// We are looking for all the vowels along with ignoring capitilization and same words in the string
let vowelRegex = /[aeiou]/ig;
let resultVowel = quoteSample.match(vowelRegex);

console.log(resultVowel);

//Match letters of the Alphabet
// We are trying to match a range of letters
let alphabetSample = "The quick brown fox jumps over the lazy dog.";
// matching every single letter
let alphabetRegex = /[a-z]/ig;
let resultAlphabet = alphabetSample.match(alphabetRegex);

console.log(resultAlphabet);


//Match Numbers and Letters of the Alphabet
let numberLetterSample = "Blueberry 3.141592653s are delicious.";
// Like the example above we can filter out what we want exactly with 2-6 and h-s along with i and g
let numberLetterRegex = /[2-6h-s]/ig;
let resultLetterNumber = numberLetterSample.match(numberLetterRegex);

console.log(resultLetterNumber);

// Match Single Characters Not Specified
// Here we are trying to get rid of characters that do not match
// Negated character sets. We use the carrot charcter for the flag
let singleSample = "3 blind mice.";
// Filtering out 0-9 and aeiou
let singleRegex = /[^0-9aeiou]/ig;
let resultSingle = singleSample.match(singleRegex);

console.log(resultSingle);

// Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
// We use the + sign to match with characters that apperar 1 or more times
let difficultRegex = /s+/g;
let resultDifficult = difficultSpelling.match(difficultRegex);

console.log(resultDifficult);

// Match Characters that Occur zero or more times
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
// The star character (*) it means match whats in the peramerters zero or more times
let goRegex = /go*/;

soccerWord.match(goRegex);
console.log(soccerWord.match(goRegex));

gPhrase.match(goRegex);
console.log(gPhrase.match(goRegex));

oPhrase.match(goRegex);
console.log(oPhrase.match(goRegex));

let chewieQuote = "Aaaaaaaaaaaaaarrrgh!";
// Get the capital and lower case
let chewieRegex = /Aa*/;
let resultChewie = chewieQuote.match(chewieRegex);

console.log(resultChewie);

// Find Characters with Lazing Matching
// Greedy and Lazy Matches 
// Greedy Finds the longest possible part of the string that fits the regex pattern and returns it as a match
// Lazy finds the smallest part of the string and returns that
// Regex patterns default to greedy
let lazyString = "titanic";
// The star character (*) it means match whats in the peramerters zero or more times
// Greedy is ['titani']
// If we put a ? right after * it becomes a lazy match
// Lazy is ['ti']
let lazyRegex = /t[a-z]*?i/;

lazyString.match(lazyRegex);
console.log(lazyString.match(lazyRegex));

let winterText = "<h1>Winter is coming</h1>";
// The star character (*) it means match whats in the peramerters zero or more times
// period is a wild card character can stand for anything
// Zero of more occurences of anything character /<.*>/
// Greedy is ['<h1>Winter is coming</h1>']
// Lazy ends at the first occurence of > put ? after *
// Lazy is ['<h1>']
let winterRegex = /<.*?>/;
let resultWinter = winterText.match(winterRegex);

console.log(resultWinter);


// Find One or more criminals in a Hunt
// This is a challenge
// Criminals are represented by a C
// We need to write a function that matches whenever there are 1 or more Cs
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

// We use the + sign to match with characters that apperar 1 or more times
let reCriminals = /C+/;

let matchedCriminals = crowd.match(reCriminals);

console.log(matchedCriminals);

// Match Beginning String Patterns
// Work stop for today at 19:58 https://www.youtube.com/watch?v=ZfQFUJhPqMM