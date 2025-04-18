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


gsap.from(".heading h1",{
  x: "200px",
  opacity: 0,
  duration: 1.5,
  delay: 1
})

gsap.from(".heading h2",{
  x: "-200px",
  opacity: 0,
  duration: 1.5,
  delay: 1
})

gsap.from(".heading h5",{
  x: "200px",
  opacity: 0,
  duration: 2,
  delay: 1
})

gsap.from("nav h1, nav h2",{
  y: "20px",
  opacity: 0,
  duration: 1,
  delay: .5
})
gsap.from(".elem h1, .elem p",{
  y: "40px",
  opacity: 0,
  duration: 1,
  delay: .7,
  scrollTrigger: {
    trigger: ".second",
    scroller:  "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
  },
  stagger: .4
})