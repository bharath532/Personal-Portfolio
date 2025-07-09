
  document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent page reload

      successMessage.classList.remove("d-none"); // Show success
      contactForm.reset(); // Clear form

      setTimeout(() => {
        successMessage.classList.add("d-none"); // Hide after 4 sec
      }, 4000);
    });
  });




  
 
  document.addEventListener("DOMContentLoaded", () => {
    const text = "I am a Web Developer";
    const element = document.getElementById("typewriter-text");
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
      if (isDeleting) {
        element.textContent = text.substring(0, index--);
      } else {
        element.textContent = text.substring(0, index++);
      }

      if (!isDeleting && index > text.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500); // pause before deleting
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        setTimeout(typeEffect, 800); // pause before typing again
      } else {
        setTimeout(typeEffect, isDeleting ? 75 : 100);
      }
    }

    typeEffect();
  });




