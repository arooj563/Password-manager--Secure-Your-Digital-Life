   // Hamburger menu
const mobileMenuBtn = document.querySelector('.mobile-menu');
const overlay = document.getElementById('mobileOverlay');
const closeBtn = document.getElementById('closeMenu');

mobileMenuBtn.addEventListener('click', () => {
  overlay.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('open');
});

function closeMobileMenu() {
  overlay.classList.remove('open');
}
      document.querySelectorAll(".faq-question").forEach((question) => {
        question.addEventListener("click", () => {
          const item = question.parentElement;
          const isActive = item.classList.contains("active");

          
          document.querySelectorAll(".faq-item").forEach((faq) => {
            faq.classList.remove("active");
          });

        
          if (!isActive) {
            item.classList.add("active");
          }
        });
      });

    
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });