const weightInput = document.querySelector("#input-el");
const calcBtn = document.querySelector("button");
const mainWrapper = document.querySelector("main");

const planets = [
  { name: "the Sun", gravity: 27.01, imgName: "sun" },
  { name: "Mercury", gravity: 0.377, imgName: "mercury" },
  { name: "Venus", gravity: 0.91, imgName: "venus" },
  { name: "Earth", gravity: 1, imgName: "earth" },
  { name: "the Moon", gravity: 0.166, imgName: "moon" },
  { name: "Mars", gravity: 0.38, imgName: "mars" },
  { name: "Jupiter", gravity: 2.34, imgName: "jupiter" },
  { name: "Ganymede", gravity: 0.146, imgName: "ganymede" },
  { name: "Saturn", gravity: 1.06, imgName: "saturn" },
  { name: "Uranus", gravity: 0.92, imgName: "uranus" },
  { name: "Neptune", gravity: 1.19, imgName: "neptune" },
  { name: "Pluto", gravity: 0.06, imgName: "pluto" },
];

// creates planet cards
for (let planet of planets) {
  const card = document.createElement("div");
  card.classList.add("card");

  const planetImg = document.createElement("img");
  planetImg.src = `./Images/${planet.imgName}.webp`;
  planetImg.alt = `close up photo of ${planet.name}`;

  const planetTitle = document.createElement("h2");
  planetTitle.textContent = planet.name;

  const planetText = document.createElement("p");
  planetText.textContent = `Your weight on ${planet.name} would be`;

  const planetWeight = document.createElement("h3");
  planetWeight.dataset.gravity = planet.gravity;
  planetWeight.textContent = 0;

  card.append(planetImg, planetTitle, planetText, planetWeight);
  mainWrapper.append(card);
}

// prevents user to input number outside the set min/max
weightInput.oninput = function () {
  if (this.value < this.min) {
    this.value = this.min;
  } else if (this.value > this.max) {
    this.value = this.max;
  }

  // prevents input to exceed maxlength (somehow just setting it in the html doesn't work)
  if (this.value.length > this.maxLength) {
    this.value = this.value.slice(0, this.maxLength);
  }
};

// calculates the weights and updates card text content
function calcWeight() {
  document.querySelectorAll("h3").forEach((h3) => {
    h3.textContent = (
      weightInput.value * h3.getAttribute("data-gravity")
    ).toFixed(2);
  });
  // removes focus from input field
  weightInput.blur();

  // auto scroll delay
  setTimeout(() => {
    scrollToCards();
  }, 150);
}

// runs calcWeight when button is clicked
calcBtn.addEventListener("click", calcWeight);

// runs calcWeight when Enter is pressed and input field is in focus
weightInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    calcWeight();
  }
});

// scrolls page to planet cards
function scrollToCards() {
  mainWrapper.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
}
