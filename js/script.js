/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
	{
		quote: 'Don’t cry because it’s over, smile because it happened.',
		source: 'Dr. Seuss'
	},
	{
		quote: 'To be, or not to be: that is the question',
		source: 'William Shakespeare',
		year: '1599'
	},
	{
		quote: 'It is better to offer no excuse than a bad one.',
		source: 'George Washington'
	},
	{
		quote: 'Be yourself; everyone else is already taken.',
		source: 'Oscar Wilde'
	},
	{
		quote: 'Be the change that you wish to see in the world.',
		source: 'Mahatma Gandhi'
	},
	{
		quote: 'You only live once? False. You live every day. You only die once.',
		source: 'Dwight Schrute',
		citation: 'The Office'
	}
];


/***
 * `getRandomQuote` function
***/

// The getRandomQuote fucntion obtains a random number from 0 to the length of the quotes array and then returns the random object from the array.


function getRandomQuote(){
	let randNum = Math.floor((Math.random() * quotes.length));
	//console.log(randNum);
	return quotes[randNum];
}

/***
 * `printQuote` function
***/

// The printQuote function runs the random quote function and saves the value into the variable randQuote. A  variable is created to hold html code as a string.
// The two if statements check if the random quote object has a specified class to determine whether or not to concatinate the extra html to the string.
// The html string is then returned to be interpreted by the index.html file when the button is clicked.

function printQuote() {
	let randQuote = getRandomQuote();
	console.log(randQuote);
	let quoteString = `<p class="quote"> ${randQuote.quote}</p>  <p class="source"> ${randQuote.source} `;
	if (randQuote.citation){
		quoteString += `<span class="citation"> ${randQuote.citation}</span></p>`;
	} 
	if (randQuote.year){
		quoteString += `<span class="year"> ${randQuote.year}</span></p>`;
	} else {
		quoteString += "</p>";
	}
	//console.log(quoteString);
	return document.getElementById('quote-box').innerHTML = quoteString;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);