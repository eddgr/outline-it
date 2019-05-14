// Variables
const tweet = "https://outline.com/"
const form = document.querySelector("#tweetify")
const input = document.querySelector("#input")
const container = document.querySelector("#link-container")

// Event Listener
form.addEventListener("submit", function(e){
  // prevents submit
  e.preventDefault();

  const newP = document.createElement("p")

  // creates a new paragraph
  container.appendChild(newP)
  // prepend outline link
  newP.innerHTML = `Read: <a href="${tweet + input.value}" target="_blank">${input.value}</a>`
  // resets form
  form.reset()
})
