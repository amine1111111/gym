

//open aside
let sd =  document.getElementById("aside")
let opsd = document.querySelector(".menuu")

opsd.addEventListener("click", _ => {
    sd.style.left = "0%" ;
})
//open aside


//CLOSE ASIDE
let close = document.querySelector(".asc")
close.onclick = _ => {
    sd.style.left = "100%" ;
}   
//CLOSE ASIDE   





//ACCORDION
let aContainer =  document.querySelectorAll(".aContainer");
let accordion =  document.querySelectorAll(".accordion");




aContainer.forEach((one, index) => {
    one.addEventListener("click", () => {
      accordion[index].classList.toggle("accshow");
      if (accordion[index].style.maxHeight) {
        accordion[index].style.maxHeight = null;
      } else {
        accordion[index].style.maxHeight = accordion[index].scrollHeight + "px";
      }
    });
  });
  
//ACCORDION

