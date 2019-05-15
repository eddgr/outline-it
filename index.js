// Variables
const tweet = "https://outline.com/"
const form = document.querySelector("#outline")
const input = document.querySelector("#input")
const container = document.querySelector("#link-container")

/* Insert Article — We separate the insert into its own function, so we can reuse it */
const insertArticle = data => {
  const newP = document.createElement("p")

  // creates a new paragraph
  container.appendChild(newP)
  // prepend outline link
  newP.innerHTML = `Read: <a href="${tweet + data}" target="_blank">${data}</a>`
}

/* listen to paste event and insert article */
window.addEventListener('paste', () => {
  navigator.clipboard.readText()
    .then(text => {
      /* insert clipboard data when pasting */
      insertArticle(text);
    })
    .catch(err => {
      console.log('Something went wrong', err);
    })
});

// Event Listener
form.addEventListener("submit", function(e){
  // prevents submit
  e.preventDefault();
  insertArticle(input.value);

  /* Reset Form */
  form.reset()
})