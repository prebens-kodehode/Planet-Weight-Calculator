const weightInput = parseFloat(document.querySelector("#input-el").value);
const calcBtn = document.querySelector("button");
const weightOutput = document.querySelectorAll("h3[data-gravity]");

calcBtn.addEventListener("click", function calcWeight() {
  weightOutput.forEach((h3) => {
    const gravityMultiplier = parseFloat(h3.getAttribute("data-gravity"));
    console.log(gravityMultiplier);
    const planetWeight = weightInput * gravityMultiplier;
    console.log(planetWeight);
    h3.textContent = `${planetWeight.toFixed(2)}`;
  });
});
