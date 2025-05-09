

document.body.addEventListener("mousemove", (e)=>{
  let div = document.createElement("div")
  div.style.top = `${e.clientY}px`
  div.style.left = `${e.clientX}px`
  div.style.scale = Math.random().toFixed(1)
  document.body.appendChild(div)
  

  setTimeout(()=>{
    div.remove()
  }, 2000)

})