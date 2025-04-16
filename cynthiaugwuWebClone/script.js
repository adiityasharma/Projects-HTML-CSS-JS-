let circle = document.querySelector(".mincircle")

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function movingCircle(){
  window.addEventListener("mousemove", function(details){
    circle.style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;
  })
}
movingCircle()