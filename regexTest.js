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
// We are trying to just find matches at the beginning of the string
// We can use ^ if not in brackets
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let resultCal = calRegex.test(rickyAndCal);

// We match it with Cal and see if its True if its only at the beginning of a string
// If Cal isn't in the beginning we will receieve a false
console.log(resultCal);

// Match Ending String Patterns
// A ^ matches a beginning string pattern and a $ matches the ending string pattern
// Note: With a carrot we start with it since it is finding the first and we put the $ at the end since it is looking for the ending
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let resultLast = lastRegex.test(caboose);

// As with the ^ if the caboose$ is not at the end of the string it will return as false
console.log(resultLast);

// Match all letters and numbers
// There is a short hand character class that can match a wide variety of things 
// There is one called \w that matches the alphabet 
// The \w matches capital and lower case a-z, the digits 0-9, and underscore 
let matchLettersNumbers = "The five boxing wizards jump quickly.";
// With the g flag it will match every occurence 
let alphabetRegexV2 = /\w/g;
// Using length will get the whole length of the string which is 31 excluding the spaces and the peroids 
let resultAlphabetV2 = matchLettersNumbers.match(alphabetRegexV2).length;

console.log(resultAlphabetV2);


// Match Everything But letters and Numbers
let matchSample = "The five boxing wizards jump quickly.";
// Here we are matching everything that isn't a letter or number. 
// In this example we just want to match the spaces and the peroids
// For this we use a \W 
let nonAlphabetRegex = /\W/g;
let resultNonAlphabet = matchSample.match(nonAlphabetRegex).length;

console.log(resultNonAlphabet);

// Match all Numbers
// Here we will learn how to match just numbers or digits 
let numString = "Your sandwich will be $5.00";
// To match just numbers and digits we use \d
// To match all the numbers and digits we will use the g flag
let numRegex = /\d/g;
let resultNum = numString.match(numRegex).length;

console.log(resultNum);


// Match all Non-Numbers
let nonNumString = "Your sandwich will be $5.00";
// If we change the \d to \D we will match with all non numbers 
let nonNumRegex = /\D/g;
let resultNonNum = nonNumString.match(nonNumRegex).length;

console.log(resultNonNum);

// Restrict Possible Usernames
// This can be used as a username validator


/* 
1) If there are numbers, they must be at the end.
2) Letters can be lowercase and uppercase.
3) At least two characters long. Two-Letter names can't have numbers.
*/

let username = "JackOfAllTrades";
// Since numbers have to at the end we will use the ^ sign at the start then place our letter requirments.
// Since we can have upper case and lower case we will have [A-Za-z]
// Then {} the curly braces indicate the number of times the previous thing can match 
// For this example {2,} indicates that we can match between 2 and infinte number.
// The number before the comma (,) is the minimum number of matches and the number after the comma is the maximum number of matches 
// Next we place \d to show that the numbers must be at the end. The we place a * to indicate zero or more. After that we place the $ to indicate its at the end
//
let userCheck = /^[A-Za-z]{2,}\d*$/;
let resultCheck = userCheck.test(username);

console.log(resultCheck);

// Match Whitespace
let whiteSpaceSample = "Whitespace is important in separating words";
// \s matches space, Carriage return, tab, form feed, new line character
let countWhiteSpace = /\s/g;
let resultWhiteSpace = whiteSpaceSample.match(countWhiteSpace);

// We get all the spaces in the whiteSpaceSample string
console.log(resultWhiteSpace);

// Match Non-Whitespace Characters 
let nonWhiteSpaceSample = "Whitespace is important in separating words";
// We use \S to match all non-whitespace characters 
let countNonWhiteSpace = /\S/g;
let resultNonWhiteSpace = nonWhiteSpaceSample.match(countNonWhiteSpace);


console.log(resultNonWhiteSpace);

// Specify Upper and Lower Number of Matches
// Upper and lower number of pattern matches with quantity specifiers 
// Quantity specifiers are used with {}
// For this example we want to match the number of h's between 3-6
// We put the {} after the Oh so it only matches if there are between 3-6 h's then we will also match with the space and no
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;
let resultOh = ohRegex.test(ohStr);

// It comes out as true
console.log(resultOh);

// Specify Only the Lower Number of Matches
// In this example we are trying to match 4 or more with the letter z
let haStr = "Hazzzzah";
let haRegex = /z{4,}/;
let resultHa = haRegex.test(haStr);

console.log(resultHa);

// Specify Exact Number of Matches
// We are looking for an exact number of matches
let timStr = "Timmmmber";
// This is looking for the word timber with 4 m's to match what you are looking for 
let timRegex = /Tim{4}ber/;
let resultTim = timRegex.test(timStr);

console.log("timber", resultTim);

// Check for All or None
// specify a possible exsistance of an element using ?
// This checks for zero or 1 of the preceeding element
// Example: differences between american and british english
// Example: Favorite - American Favourite - British
// Place the ? after what you are looking for. It might have u or it might not have a u
let favWord = "favorite";
let favRegex = /favou?rite/;
let resultFav = favRegex.test(favWord);

console.log(resultFav);

// Positive and Negative Lookahead
// Lookahead tells JS to lookahead in your string and look for patterns further along
// This is useful when looking for multiple patterns in the same string.
// There are positive and negative lookaheads 
let quit = "qu";
let noquit = "qt";
// This is a positive lookahead. Lookaheads always start with a ? and the = is for positive 
// First its checking for a q and then it looksahead to make sure there is a u in the string. If there is a u we just return the q
let quRegex = /q(?=u)/;
// ! is for a negative lookahead
// This is looking a head to check if something is not in the string and in this case it would be u
let qRegex = /q(?!u)/;
quit.match(quRegex);
console.log(quit.match(quRegex));

noquit.match(qRegex);
console.log(noquit.match(qRegex));

// in this example of look ahead we want to check if there are two or more patterns
// We are checking passwords that are longer then 5 characters long and have two consecitive digits 
let sampleWord = "astronaut";
// For a greater then 5 characters we will do (if a positive lookahead) (\w all number and letter characters) ({5} Then we want there to be aleast 5 charcters) 
// (?=\w{5})
// We now want to check for two consecutive digits. (?=\)
// Now we check for any number of characters that are not ditits \D and * to check for zero or more characters that are not a digit 
// After \D* we place a \d to say that we are going to have digits 
// Then we want to check if there are two or more ditits using {2}
// (?=\w{5}) 5 or more characters
// (?=\D*\d{2}) 2 or more ditits 
let pwRegex = /(?=\w{5})(?=\D*\d{2})/;
let resultPw = pwRegex.test(sampleWord);

console.log(resultPw);

// Reuse Patterns Using Capture Groups
// You can group things you are looking for with a parentheses
let repeatStr = "regex regex";
// we are searching for any number of characters with \w+ and a \s with space
// parentheses to repeat substrings aka also called a capture group and you can repeat it any number of times.
// The \1 lets us repeat it 1 time
// (\w+) - Searching for any number of letters followed by a \s (space) followed by \1 any number of letters that are the same letters as before
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr);
console.log(repeatRegex.test(repeatStr));

repeatStr.match(repeatRegex);
console.log(repeatStr.match(repeatRegex));

// We are trying to find things that are repeated 3 times in a string
let repeatNum = "42 42 42";
// We are looking for any number with (\d+) then a space \s then number \1 a space \s then a number \1
// We quite aren't done yet as if there were four 42's it would work which we only want three
// To fix this we add a ^ at the beginning and a $ at the end
// Remember ^ is finding everything at the beginning of a string and a $ is at the end of a string. It means exactly this so if there was a forth 42 it wouldn't make it true
let reRegex = /^(\d+)\s\1\s\1$/;
let resultRe = reRegex.test(repeatNum);

console.log(resultRe);

// Use Capture Groups to Search and Replace
// To replace use .replace()
// First we want the regex pattern we want to search for second a string to replace or a function to do something 
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");

console.log(wrongText.replace(silverRegex, "blue"));

// \w+ any number of letters \s space \w+ any number of letters
// $2 means the second capture group, the second parenthese in the regex (matched to the word camp)
// $1 is the first capture group which would be Code
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
console.log("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'));

let huhText = "This sandwich is good.";
let fixRegex = /good/;
let replaceText = "okey-dokey";
let resultReplace = huhText.replace(fixRegex, replaceText);

console.log(resultReplace);

// Remove Whitespace from Start and End
let hello = "   Hello, World!   ";
// To find everything at the beginning we start with a ^
// Next we do \s to find all the white space
// + for any number of whitespace characters
// Next do do a | which means or 
// \s for space again with the + and then a dollar sign to show the end 
// lastly we add the g flag
let wsRegex = /^\s+|\s+$/g;
// We use '' for empty string 
let resultWs = hello.replace(wsRegex, '');

console.log(resultWs);