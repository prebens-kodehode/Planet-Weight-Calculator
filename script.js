const weightInput = document.querySelector("#input-el");
const calcBtn = document.querySelector("button");
const weightOutput = document.querySelectorAll("h3[data-gravity]");

weightOutput.forEach((h3) => {
  h3.textContent = `0.00`;
});

// prevents user to input number outside the set min/max
weightInput.oninput = function () {
  const max = parseInt(this.max);
  const min = parseInt(this.min);

  if (this.value < min) {
    this.value = min;
  } else if (this.value > max) {
    this.value = max;
  }
};

// calculates the weights
function calcWeight() {
  weightOutput.forEach((h3) => {
    const gravityMultiplier = h3.getAttribute("data-gravity");

    const planetWeight = weightInput.value * gravityMultiplier;

    h3.textContent = `${planetWeight.toFixed(2)}`;
    scrollToCards();
  });
}

// runs calcWeight when button
calcBtn.addEventListener("click", calcWeight);

// runs calcWeight when Enter is pressed when input field is active
weightInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    calcWeight();
  }
});

function scrollToCards() {
  const element = document.querySelector(".card");
  element.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
}
