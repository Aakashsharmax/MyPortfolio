document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop normal submit

  const form = e.target;
  const formData = new FormData(form);

  fetch('save_contact.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data => {
    alert("✅ Thank you for your message! 🚀");
    console.log(data); // Debug: check PHP response
    form.reset();
  })
  .catch(error => {
    alert("❌ There was an error submitting your message. Please try again.");
    console.error(error);
  });
});

window.addEventListener('scroll', () => {
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