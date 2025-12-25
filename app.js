// Mobile nav
const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");
hamburger?.addEventListener("click", () => navlinks.classList.toggle("open"));

// Cookie bar
const cookieBar = document.getElementById("cookieBar");
const accepted = localStorage.getItem("cookieAccepted") === "1";
if (accepted) cookieBar.style.display = "none";

document.getElementById("cookieAccept")?.addEventListener("click", () => {
  localStorage.setItem("cookieAccepted", "1");
  cookieBar.style.display = "none";
});
document.getElementById("cookieClose")?.addEventListener("click", () => {
  cookieBar.style.display = "none";
});

// Demo form submit
const form = document.getElementById("quoteForm");
const successMsg = document.getElementById("successMsg");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  localStorage.setItem("leadDemo", JSON.stringify(data));
  successMsg.hidden = false;
  form.reset();
});
//footer
document.getElementById("year").textContent = new Date().getFullYear();
document.querySelectorAll("#navlinks a").forEach(a => {
  a.addEventListener("click", () => navlinks.classList.remove("open"));
});
