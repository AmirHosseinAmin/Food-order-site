// `use strict`
// var datetime = new Date();
// console.log(datetime);
// document.getElementById("p1").textContent = datetime; //it will print on html page

// `use strict`;
// function refreshTime() {
//   const timeDisplay = document.getElementById("p1");
//   const dateString = new Date().toLocaleString();
//   const formattedString = dateString.replace(", ", " - ");
//   timeDisplay.textContent = formattedString;
// }
//   setInterval(refreshTime, 1000);

var today = new Date();
var time = today.toLocaleString("en-US", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});
document.getElementById("p1").textContent = time;
document.getElementsByClassName("");

const carousel = document.querySelector(".carousel"),
  firstImg = carousel.querySelectorAll("img")[0],
  arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;
const showHideIcons = () => {
  // showing and hiding prev/next icon according to carousel scroll left value
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";
};
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
    // if clicked icon is left, reduce width value from the carousel scroll left else add to it
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
  });
});

// second slider

const carouselTwo = document.querySelector(".carouselTwo"),
  firstImgTwo = carouselTwo.querySelectorAll("img")[0],
  arrowIconsTwo = document.querySelectorAll(".wrapperTwo i");
let isDragStartTwo = false,
  isDraggingTwo = false,
  prevPageXT,
  prevScrollLeftT,
  positionDiffT;
const showHideIconsT = () => {
  // showing and hiding prev/next icon according to carousel scroll left value
  let scrollWidthT = carouselTwo.scrollWidthT - carouselTwo.clientWidth; // getting max scrollable width
  arrowIconsTwo[0].style.display = carouselTwo.scrollLeft == 0 ? "none" : "block";
  arrowIconsTwo[1].style.display =
    carouselTwo.scrollLeft == scrollWidthT ? "none" : "block";
};
arrowIconsTwo.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidthT = firstImgTwo.clientWidth + 14; // getting first img width & adding 14 margin value
    // if clicked icon is left, reduce width value from the carousel scroll left else add to it
    carouselTwo.scrollLeft += icon.id == "left" ? -firstImgWidthT : firstImgWidthT;
    setTimeout(() => showHideIconsT(), 60); // calling showHideIcons after 60ms
  });
});

//hamburger button

