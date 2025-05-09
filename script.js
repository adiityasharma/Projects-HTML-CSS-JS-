// apiKey = http://www.omdbapi.com/?apikey=32d3bb0b&t=Inception

let input = document.getElementById("input")
let search = document.getElementById("search")
let cardContainer = document.getElementById("card-container")
let myFavBtn = document.getElementById("myFavBtn")
let myFavContainer = document.getElementById("myFav-container")
let pageSwitch = document.getElementById("page-switch")
let pageNo = document.querySelector(".pageNo")
let home = document.querySelector(".home")
let favPage = document.querySelector(".my-favPage")
let backBtn = document.querySelector(".back-btn")
let favMovies = document.querySelector(".favMovies")



home.addEventListener("click", () => {
  window.location.reload()
})

search.addEventListener('click', () => {
  if (input.value == "") {
    cardContainer.innerHTML = "Please Enter any Movie/Series name"
    cardContainer.style.display = "flex"
    cardContainer.style.justifyContent = "center"
    cardContainer.style.fontSize = "25px"
  }
  else {
    cardContainer.style = ""
    cardContainer.innerHTML = ""
    getData(input.value)

  }
  // getData(input.value)
})

let allmovies = []

async function getData(name, page = 1) {
  let response = await fetch(`https://www.omdbapi.com/?apikey=32d3bb0b&s=${name}&page=${page}`)
  let data = await response.json()
  if (data.Response == "False") {
    cardContainer.innerHTML = `${data.Error}`
    cardContainer.style.display = "flex"
    cardContainer.style.justifyContent = "center"
    cardContainer.style.fontSize = "25px"
  } else {
    allmovies.push(...data.Search)
    displayCard()
    totalPages(data, name)
  }

}

function totalPages(value, name) {
  let pages = Math.ceil(value.totalResults / (value.Search).length)
  pageSwitch.innerHTML = ""
  for (let i = 1; i <= pages; i++) {
    pageSwitch.innerHTML += `<button id="pbtn" class="bg-cyan-300 px-4 py-2 rounded-lg">${i}</button>`
  }
  document.querySelectorAll("#pbtn").forEach((item) => {
    item.addEventListener("click", (e) => {
      getData(input.value, e.target.innerHTML)
      displayCard()
      pageNo.innerHTML = `<p>You are on Page: ${e.target.innerHTML}</p>`
    })
  })

}

function displayCard(data) {
  cardContainer.innerHTML = ""
  allmovies.forEach((item) => {
    // console.log(item)
    cardContainer.innerHTML += `
    <div id="${Math.floor(Math.random() * 200)}" class="card w-full h-110 shadow-lg rounded-md p-3 cursor-pointer overflow-hidden hover:shadow-2xl ">
        <img src="${item.Poster}" alt="Image Not Found" id="image" class="w-full h-3/4  object-cover rounded-md ">
        <div class="mt-2">
          <h1><span class="font-medium">Name:</span> ${item.Title}</h1>
          <h1><span class="font-medium">Year:</span> ${item.Year}</h1>
          <button class="addToFav text-sm py-1 px-2 rounded-lg border mt-2 cursor-pointer hover:bg-red-400 hover:text-white">Add to Favorite</button>
        </div>
      </div>
    
    `
  })
  allmovies = []

}

cardContainer.addEventListener("click", (e) => {
  let btn = e.target.closest('.addToFav')
  if (btn.innerHTML == "Add to Favorite") {
    btn.innerHTML = "Remove"
    console.log(e.target.parentElement.parentElement)
    let clone = e.target.parentElement.parentElement.cloneNode(true)
    favMovies.appendChild(clone)
  }

  favMovies.addEventListener("click", (e) => {
    // console.log(e.target.closest(".addToFav"))
    let remove = e.target.closest(".addToFav")
    btn.innerHTML = "Add to Favorite"
    console.log(remove)
    remove.parentElement.parentElement.remove()
  })
})



myFavBtn.addEventListener('click', () => {
  favPage.style.display = "block"
})
backBtn.addEventListener('click', () => {
  favPage.style.display = "none"
})


