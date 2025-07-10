const quotes = [
  "Believe you can and you're halfway there.",
  "Today is going to be a great and productive day.",
  "No matter how hard it is, you can do it.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Good things are coming.",
  "Dream big. Start small. Act now.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteText = quotes[randomIndex];
  document.getElementById('quote').textContent = quoteText;
}