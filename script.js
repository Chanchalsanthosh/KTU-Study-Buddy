
  // Array of quotes
const quotes = [
	"Be the change you wish to see in the world. - Mahatma Gandhi",
	"Strive not to be a success, but rather to be of value. - Albert Einstein",
	"You miss 100% of the shots you don't take. - Wayne Gretzky",
	"The only way to do great work is to love what you do. - Steve Jobs",
	"Believe you can and you're halfway there. - Theodore Roosevelt"
];

// Function to generate a random quote
function generateQuote() {
	// Get a random index from the quotes array
	const index = Math.floor(Math.random() * quotes.length);

	// Get the quote at that index
	const quote = quotes[index];

	// Display the quote on the page
	document.getElementById("quote").innerHTML = quote;
}