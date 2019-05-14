const tweet = "https://outline.com/"

// find form
const form = document.querySelector("#tweetify")
// get container and append input value
const input = document.querySelector("#input")
const container = document.querySelector("#link-container")

// prevent default action
form.addEventListener("submit", function(e){
  e.preventDefault();
  const newP = document.createElement("p")

  // creates a new paragraph
  container.appendChild(newP)
  newP.innerHTML = `<a href="${tweet + input.value}" target="_blank">${input.value}</a>`
  form.reset()
})
