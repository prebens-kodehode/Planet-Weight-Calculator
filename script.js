const weightInput = document.querySelector("#input-el");
const calcBtn = document.querySelector("button");
const weightOutput = document.querySelectorAll("h3[data-gravity]");

weightOutput.forEach((h3) => {
  h3.textContent = `0.00`;
});

function calcWeight() {
  weightOutput.forEach((h3) => {
    if (Number(weightOutput.value) > 0) {
      h3.textContent = `Please Enter a Valid Number`;
    } else {
      const gravityMultiplier = h3.getAttribute("data-gravity");

      const planetWeight = weightInput.value * gravityMultiplier;

      h3.textContent = `${planetWeight.toFixed(2)}`;
    }
  });
}

calcBtn.addEventListener("click", calcWeight);
weightInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    calcWeight();
  }
});
