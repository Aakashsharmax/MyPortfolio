document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for your message! 🚀");
});window.addEventListener('scroll', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});
const topBtn = document.querySelector(".back-to-top");
window.onscroll = () => {
  if (window.scrollY > 300) topBtn.classList.add("show");
  else topBtn.classList.remove("show");
};