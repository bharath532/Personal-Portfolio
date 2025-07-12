
  // document.addEventListener("DOMContentLoaded", function () {
  //   const contactForm = document.getElementById("contactForm");
  //   const successMessage = document.getElementById("successMessage");

  //   contactForm.addEventListener("submit", function (e) {
  //     e.preventDefault(); // prevent page reload

  //     successMessage.classList.remove("d-none"); // Show success
  //     contactForm.reset(); // Clear form

  //     setTimeout(() => {
  //       successMessage.classList.add("d-none"); // Hide after 4 sec
  //     }, 4000);
  //   });
  // });




  
 
  // document.addEventListener("DOMContentLoaded", () => {
  //   const text = "I am a Web Developer";
  //   const element = document.getElementById("typewriter-text");
  //   let index = 0;
  //   let isDeleting = false;

  //   function typeEffect() {
  //     if (isDeleting) {
  //       element.textContent = text.substring(0, index--);
  //     } else {
  //       element.textContent = text.substring(0, index++);
  //     }

  //     if (!isDeleting && index > text.length) {
  //       isDeleting = true;
  //       setTimeout(typeEffect, 1500); // pause before deleting
  //     } else if (isDeleting && index === 0) {
  //       isDeleting = false;
  //       setTimeout(typeEffect, 800); // pause before typing again
  //     } else {
  //       setTimeout(typeEffect, isDeleting ? 75 : 100);
  //     }
  //   }

  //   typeEffect();
  // });



  
// Contact Form

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = {
        name: document.getElementById("names").value.trim(),
        email: document.getElementById("emails").value.trim(),
        message: document.getElementById("messages").value.trim()
      };

      console.log("Submitting form data:", formData);

      axios.post(
        "https://api.apispreadsheets.com/data/FqTcdI67PUn1Ty6B/",
        {data:[formData]},
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then((res) => {
        console.log("Submission success:", res.data);
        document.getElementById("successMessage").classList.remove("d-none");
        form.reset();
      })
      .catch((err) => {
        console.error("Submission error:", err.response || err.message || err);
        alert("Submission failed. Check console for details.");
      });
    });
  });




// Loop===
//   document.addEventListener("DOMContentLoaded", function () {
//   // === Typewriter Effect ===
//   const text = "I am a Web Developer";
//   const element = document.getElementById("typewriter-text");
//   let index = 0;
//   let isDeleting = false;

//   function typeEffect() {
//     if (isDeleting) {
//       element.textContent = text.substring(0, index--);
//     } else {
//       element.textContent = text.substring(0, index++);
//     }

//     if (!isDeleting && index > text.length) {
//       isDeleting = true;
//       setTimeout(typeEffect, 1500);
//     } else if (isDeleting && index === 0) {
//       isDeleting = false;
//       setTimeout(typeEffect, 800);
//     } else {
//       setTimeout(typeEffect, isDeleting ? 75 : 100);
//     }
//   }

//   typeEffect();
// });


