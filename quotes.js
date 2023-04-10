// Array of quotes
const quotes = [
	{ quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
	{ quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
	{ quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
	{ quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
	{ quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
	{ quote: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
	{ quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
	{ quote: "It's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
	{ quote: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
	{ quote: "The best way to predict the future is to invent it.", author: "Alan Kay" }
];

// Function to get a random quote
function getRandomQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	return quotes[randomIndex];
}

// Function to display the quote on the page
function displayQuote() {
	const quoteContainer = document.getElementById("quote");
	const randomQuote = getRandomQuote();
	const quoteHTML = `
		<blockquote>
			<p>${randomQuote.quote}</p>
			<footer>${randomQuote.author}</footer>
		</blockquote>
	`;
	quoteContainer.innerHTML = quoteHTML;
}

// Event listener for the "New Quote" button
const newQuoteBtn = document.getElementById("new-quote-btn");
newQuoteBtn.addEventListener("click", displayQuote);

// Display an initial quote on page load
displayQuote();
