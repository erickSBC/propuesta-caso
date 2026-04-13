import './style.css'


const btn = document.getElementById("btnScroll");

btn?.addEventListener("click", () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
});

const elements = document.querySelectorAll(".card, .benefit");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade");
    }
  });
});

elements.forEach(el => observer.observe(el));

document.querySelectorAll("section, .card, .benefit").forEach(el => {
  observer.observe(el);
});