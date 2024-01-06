// const sliderContainer = document.querySelector(".sliderContainer");
// let CW = sliderContainer.offsetWidth;

// let prevBtn = document.querySelector(".prev");
// let nextBtn = document.querySelector(".next");


// prevBtn.addEventListener("click", _ => {

//     sliderContainer.scrollBy({
//         left : -CW ,
//         behavior : "smooth"
//     })
// })



// nextBtn.addEventListener("click", _ => {

//     sliderContainer.scrollBy({
//         left : CW ,
//         behavior : "smooth"
//     })
// })


































// const sliderContainer = document.querySelector(".sliderContainer");
// let CW = sliderContainer.offsetWidth;

// let prevBtn = document.querySelector(".prev");
// let nextBtn = document.querySelector(".next");


// prevBtn.addEventListener("click", _ => {

//     sliderContainer.scrollBy({
//         left : -CW ,
//         behavior : "smooth"
//     })
// })



// nextBtn.addEventListener("click", _ => {

//     sliderContainer.scrollBy({
//         left : CW ,
//         behavior : "smooth"
//     })
// })






























const sliderContainers = document.querySelectorAll(".container");

sliderContainers.forEach((container) => {
  const prevBtn = container.querySelector(".prev");
  const nextBtn = container.querySelector(".next");
  const slider = container.querySelector(".sliderContainer");

  const containerWidth = container.offsetWidth;

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: -containerWidth,
      behavior: "smooth",
    });
  });

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: containerWidth,
      behavior: "smooth",
    });
  });
});

