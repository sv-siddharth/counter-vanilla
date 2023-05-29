const value = document.querySelector(".counter-value");
const incBtn = document.getElementById("increment");
const decBtn = document.getElementById("decrement");
const change = document.getElementById("input-change");
const reset = document.getElementById("reset");

incBtn.addEventListener("click", () => {
  value.textContent = +value.textContent + change.valueAsNumber;
});

decBtn.addEventListener("click", () => {
  value.textContent = parseInt(value.textContent) - parseInt(change.value);
});

reset.addEventListener("click", () => {
  value.textContent = 0;
});

change.addEventListener("change", () => {
  const changeBy = change.valueAsNumber;

  if (Number.isNaN(changeBy)) {
    change.value = 1;
  } else if (changeBy < 0) {
    change.value = 1;
  } else if (changeBy > 10) {
    change.value = 10;
  }
});
