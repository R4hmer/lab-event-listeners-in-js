function changeBackgroundColor() {
  const colors = ["#FFB6C1", "#ADD8E6", "#90EE90", "#FFD700", "#FFA07A"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
}

function displayKeyPress(event) {
  const keyDisplay = document.getElementById("keyPressDisplay");
  keyDisplay.textContent = `Key pressed: ${event.key}`;
}

function displayUserInput(event) {
  const inputDisplay = document.getElementById("textInputDisplay");
  const inputField = document.getElementById("textInput");
  inputDisplay.textContent = `You typed: ${inputField.value}`;
}

function setupEventListeners() {
  document.getElementById("changeColorButton").addEventListener("click", changeBackgroundColor);
  document.getElementById("resetColorButton").addEventListener("dblclick", resetBackgroundColor);
  document.addEventListener("keydown", displayKeyPress);
  document.getElementById("textInput").addEventListener("input", displayUserInput);
}

if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};
