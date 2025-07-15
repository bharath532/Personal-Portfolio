
// Loop 
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



  
// Contact Form

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData();
      formData.append("name", document.getElementById("Name").value.trim());
      formData.append("email", document.getElementById("Email").value.trim());
      formData.append("message", document.getElementById("Message").value.trim());

      axios.post(
        'https://script.google.com/macros/s/AKfycbxcZqsf6XJuxC10v90b4Wrl0lDV5e_H5xqctPOKLzEvCLggN5HytJRG0_9PAXLDMOyr_w/exec',
        formData
      )
      .then((res) => {
        console.log("Response:", res.data);
        document.getElementById("successMessage").classList.remove("d-none");
        form.reset();
          setTimeout(() => {
         successMessage.classList.add("d-none"); // Hide after 4 sec
       }, 4000);
      })
      .catch((err) => {
        console.error("Submission error:", err);
        alert("Submission failed. Check console for details.");
      });
    });
  });

// 


  AOS.init({duration:1000});



  // 


  


