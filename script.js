const weightInput = document.querySelector("#input-el");
const calcBtn = document.querySelector("button");
const weightOutput = document.querySelectorAll("h3[data-gravity]");

weightOutput.forEach((h3) => {
  h3.textContent = `0.00`;
});

calcBtn.addEventListener("click", function calcWeight() {
  weightOutput.forEach((h3) => {
    const gravityMultiplier = h3.getAttribute("data-gravity");

    const planetWeight = weightInput.value * gravityMultiplier;

    h3.textContent = `${planetWeight.toFixed(2)}`;
  });
});
