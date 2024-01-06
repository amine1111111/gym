
// IMGS I
let is = document.querySelectorAll(".img i");

is.forEach(one =>{
    one.addEventListener("click", _ =>{
        let parentElement = one.parentElement ;
        parentElement.classList.toggle("open") ;
    })
})
// IMGS I

//SLIDER
let slide = Array.from(document.querySelectorAll(".slider .slide"))

let slideCount = slide.length ;
let current = 1 ;

let prevBtn = document.getElementById("lft");
let nextBtn = document.getElementById("rt");

prevBtn.onclick = prevSlide; 
nextBtn.onclick = nextSlide;
check();

function nextSlide(){
    if(nextBtn.style.display === "none" ){
        return false
    }else{
        current++;
        check();
    }
};

function prevSlide(){
    if(prevBtn.style.display === "none" ){
        return false;
    }else{
        current--;
        check()
        console.log("prev")
    }
};

function check(){

    removeActive();

    slide[current -1 ].classList.add("active") ;

    if(current === 1){
        prevBtn.style.display = "none" ;
    }else{
        prevBtn.style.display = "block" ;
    }

    if(current === slideCount){
        nextBtn.style.display = "none" ;
    }else{
        nextBtn.style.display = "block" ;
    }
}

function removeActive (){
    slide.forEach(function (on){
        on.classList.remove("active")
    })
}

//SLIDER






















//animation

const tl = gsap.timeline({defaults : {duration : 1}})

tl.from("header img", {opacity :0, x :"-50%"})

tl.from("nav a", {opacity :0, y :"-100%", stagger : .1 }, "-=.5")
tl.fromTo(".icons", {opacity :0, y :"-100%"} , {opacity :1, y :0}, '-=1')


//animation
