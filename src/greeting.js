
// greeting.js
//export const greeting = "Hello, Odinite!";

const modal = document.getElementById("postModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
const form = document.getElementById("postForm");

let currentProjectKey = null; // <-- you'll need to set this when a project is clicked

// Open modal
openBtn.addEventListener("click", () => {
  if (!currentProjectKey) {
    alert("Please select a project first.");
    return;
  }
  modal.classList.remove("hidden");
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newPost = {
    post: document.getElementById("postTitle").value,
    description: document.getElementById("postDescription").value,
    date_made: document.getElementById("postDate").value,
    priority: document.getElementById("postPriority").value,
    is_done: false
  };

  const item = JSON.parse(localStorage.getItem(currentProjectKey));
  item.posts.push(newPost);
  localStorage.setItem(currentProjectKey, JSON.stringify(item));

  modal.classList.add("hidden");
  form.reset();
  // Optionally: re-render the post list
});
