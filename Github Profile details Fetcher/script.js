let input = document.querySelector(".input")
let search = document.querySelector(".search")
let container = document.querySelector(".container")
let repocard = document.querySelector(".repocard")
// console.log(repocard.innerHTML = "adf")
search.addEventListener("click", () => {
  if(input.value !== ""){
    container.style = ""
    container.innerHTML = ""
    getData()
  }else{
    container.innerHTML = "Please enter any username."
    container.style.display = "flex"
    container.style.justifyContent = "center"
    container.style.alignItems = "center"
    container.style.fontSize = "40px"
    container.style.opacity = "1"
  }
})

function getData(){
  fetch(`https://api.github.com/users/${input.value}`)
    .then(res => res.json())
    .then((data) => {
      // console.log(data)
      card(input.value)
      container.style.opacity = "1"
      container.innerHTML = `
      <div class="profileDetails">
        <div class="left">
          <img src="${data.avatar_url}" alt="">
        </div>
        <div class="right">
          <a target="_blank" class="userName" href="${data.html_url}">${data.login}</a>
          <a target="_blank" href="${data.html_url}">${data.name}</a>
          <p class="bio">${data.bio == null? "Empty bio" : data.bio}</p>
          <div>
            <p>Followers: ${data.followers}</p>
            <p>following: ${data.following}</p>
          </div>
        </div>
      </div>
      <div class="repoDetails">
        <div class="repos">
          <h1>Public Repos: ${data.public_repos}</h1>
          <h1>Created at: ${data.created_at}</h1>
          <h1>Last update at: ${data.updated_at}</h1>
        </div>
        <div class="repocard">
          
          </div>
        </div>
      </div>
      `
    })
}

function card(value) {
  fetch(`https://api.github.com/users/${value}/repos`)
    .then(raw => raw.json())
    .then(arr => {
      repocard.innerHTML = ""; 
      arr.forEach(item => {
        document.querySelector(".repocard").innerHTML += ` 
          <div class="card">
            <div class="left">
              <img src="${item.owner.avatar_url}" alt="">
            </div>
            <div class="right">
              <a target="_blank" href="${item.html_url}">${item.name}</a>
              <p>language: ${item.language ?? "Not specified"}</p>
              <p>description: ${item.description ?? "No description"}</p>
            </div>
          </div>
        `;
      });
    });

  input.value = "";
}

