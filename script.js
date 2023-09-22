const countDownDate = new Date("dec 21, 2024 12:10:00").getTime();
setInterval(function () {
  // Get today's date and time
  const currentDate = new Date().getTime();

  // Find the distance between currentDate and the count down date
  const distance = countDownDate - currentDate;

  flipAllCards(distance);
}, 1000);

/** function to flip all the cards  */
function flipAllCards(distance) {
  /** Calculate days, hours, minutes, seconds */
  const days = Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24)));
  const hours = Math.abs(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = Math.abs(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));

  /** flip the selectors */
  flip(document.querySelector("[data-days]"), days);
  flip(document.querySelector("[data-hours]"), hours);
  flip(document.querySelector("[data-minutes]"), minutes);
  flip(document.querySelector("[data-seconds]"), seconds);
}

/** function to add top-flip and bottom-flip class and flip the cards */
function flip(flipCard, newNumber) {
  /** const for .top and .bottom selector */
  const topHalf = flipCard.querySelector(".top");
  const bottomHalf = flipCard.querySelector(".bottom");

  const startNumber = parseInt(topHalf.textContent);

  if (newNumber === startNumber) return;

  /** added element with top-flip and bottom-flip class */
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");

  const startNo = String(startNumber).padStart(2, "0");
  const newNo = String(newNumber).padStart(2, "0");

  /** set context in the cards while flipping the card */
  topFlip.textContent = startNo;
  bottomFlip.textContent = newNo;

  /** set context and remove context at the animation event */
  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = newNo;
  });
  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });
  bottomFlip.addEventListener("animationend", (e) => {
    bottomHalf.textContent = newNo;
  });

  flipCard.append(topFlip, bottomFlip);
}
