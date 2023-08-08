// const carousel = document.querySelector(".carousel");
// arrowIcons = document.querySelectorAll(".wrapper i");

// let isDragStart = false, prevPageX , prevScrollLeft;

// arrowIcons.forEach(icon => {
//     icon.addEventListener("click", () => { 
//         console.log(icon);
//     })
    
// });

// const dragStart = (e) => {
//     isDragStart = true;
//     prevPageX = e.pageX;
//     prevScrollLeft = carousel.scrollLeft;
  
// }

// const dragging = (e) => {
//     if(!isDragStart) return;
//     e.preventDefault();
//     let positionDiff = e.pageX - prevPageX;
//     carousel.scrollLeft = prevScrollLeft - positionDiff;

//     // console.log(e.pageX);
// }

// const dragStop = () => {

//     isDragStart = false;
// }




// carousel.addEventListener("mousemove",dragStart);
// carousel.addEventListener("mousemove",dragging);
// carousel.addEventListener("mouseup",dragStop);




`use strict`
var datetime = new Date();
console.log(datetime);
document.getElementById("p1").textContent = datetime; //it will print on html page

`use strict`;
function refreshTime() {
  const timeDisplay = document.getElementById("p1");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
  console.log("salam");
}
  setInterval(refreshTime, 1000);



  document.getElementsByClassName("")

// slider

  const carousel = document.querySelector(".carousel"),
    firstImg = carousel.querySelectorAll("img")[0],
    arrowIcons = document.querySelectorAll(".wrapper i");
    let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
    const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
    }
    arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});



//slider khaf





 

