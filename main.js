const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
// take note dot circle for class
const circles = document.querySelectorAll(".circle");

// represents which one is active, 1 as default
let currentActive = 1;

// add event listener when clicked
next.addEventListener("click", () => {
  // increments currentActive when next is clicked
  currentActive++;

  // check and limits currentActive to circles length
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  // currentActive is equal to circles length = 4
  console.log(currentActive);

  update();
});

// goes back when prev is clicked
prev.addEventListener("click", () => {
  // decrement the value
  currentActive--;

  // checks current value and limit to 1
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

// update the progress bar display
const update = () => {
  circles.forEach((circle, idx) => {
    // checks if index is less than the currentActive
    if (idx < currentActive) {
      // add active class
      circle.classList.add("active");
    } else {
      // remove active class
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  // console.log(actives.length, circles.length);

  // get percentage on progress
  // console.log((actives.lengtht / circles.length) * 100 );

  // handles the progress circles and line
  progress.style.width =
    // width value should be in percentage
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive == circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
