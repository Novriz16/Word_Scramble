// script.js

// Daftar kata untuk game
const words = ["telephone", "javascript", "computer", "keyboard", "monitor", "internet", "developer"];

// Variabel untuk elemen DOM
const scrambledWordDisplay = document.getElementById("scrambled-word");
const userGuessInput = document.getElementById("user-guess");
const submitBtn = document.getElementById("submit-btn");
const nextBtn = document.getElementById("next-btn");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");

let currentWord = "";
let scrambledWord = "";
let score = 0;

// Fungsi untuk mengacak huruf dalam sebuah kata
function shuffle(word) {
  let letters = word.split('');
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  return letters.join('');
}

// Fungsi untuk memilih kata baru
function setNewWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  scrambledWord = shuffle(currentWord);
  scrambledWordDisplay.textContent = scrambledWord;
  userGuessInput.value = "";
  feedback.textContent = "";
  nextBtn.style.display = "none";
}

// Fungsi untuk mengecek jawaban
function checkGuess() {
  const userGuess = userGuessInput.value.toLowerCase();
  if (userGuess === currentWord) {
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
    score++;
    scoreDisplay.textContent = score;
    nextBtn.style.display = "block"; // Tampilkan tombol "Next"
  } else {
    feedback.textContent = "Try again!";
    feedback.style.color = "red";
  }
}

// Event listeners
submitBtn.addEventListener("click", checkGuess);
nextBtn.addEventListener("click", setNewWord);

// Mulai game dengan kata pertama
setNewWord();
