const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");

nameInput.addEventListener("input", (event) => {
  const trimmedValue = event.currentTarget.value.trim();
  nameOutput.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});
