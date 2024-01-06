let hidden = document.querySelectorAll(".hiden")


let observer = new IntersectionObserver(entries => {

  entries.forEach(function (entry){
    if(entry.isIntersecting){
      entry.target.classList.remove("hiden")
    }
  })
})

hidden.forEach(function (one) {
  observer.observe(one) ;
})