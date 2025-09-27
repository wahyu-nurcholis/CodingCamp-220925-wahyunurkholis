window.addEventListener("DOMContentLoaded", function () {
  let usernamePrompt = prompt("Silakan masukkan nama Anda:");
  if (usernamePrompt) {
    const greetingEl = document.getElementById("greeting");
    if (greetingEl) {
      greetingEl.textContent = "Halo " + usernamePrompt + ", selamat datang di TEKNIK-Q";
    }
  }

  // === CAROUSEL ===
  const carousel = document.getElementById("testimonialCarousel");
  const dots = document.querySelectorAll("#dots span");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  function updateDots() {
    if (!carousel) return;
    const index = Math.round(carousel.scrollLeft / carousel.offsetWidth);
    dots.forEach((dot, i) => {
      dot.classList.remove("bg-gray-800", "w-6");
      dot.classList.add("bg-gray-400");
      if (i === index) {
        dot.classList.remove("bg-gray-400");
        dot.classList.add("bg-gray-800", "w-6");
      }
    });
  }

  if (carousel) {
    carousel.addEventListener("scroll", updateDots);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const width = carousel.offsetWidth;
      carousel.scrollBy({ left: width, behavior: "smooth" });
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      const width = carousel.offsetWidth;
      carousel.scrollBy({ left: -width, behavior: "smooth" });
    });
  }

  // === FORM HANDLER ===
  const form = document.getElementById("reviewForm");
  const thankYouMessage = document.getElementById("thankYouMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const userName = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (userName === "" || email === "" || message === "") {
        alert("⚠️ Harap isi semua field sebelum mengirim!");
        return;
      }

      if (thankYouMessage) {
        thankYouMessage.classList.remove("hidden");
      }

      form.reset();
    });
  }
});
