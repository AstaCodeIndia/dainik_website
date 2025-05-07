// form submit popup javascipt

const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const popup = document.getElementById('pop-up-container');
const popup2 = document.getElementById('pop-up-container2');
const doneBtn = document.querySelector('#pop-up-container .pop-btn');
const doneBtn2 = document.querySelector('#pop-up-container2 .pop-btn');

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Disable the button
  submitBtn.disabled = true;
  submitBtn.value = "Sending...";
  submitBtn.style.backgroundColor = "#E06E2E"
  submitBtn.style.color = "#EEE5DA"
  submitBtn.style.cursor = "not-allowed"


  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      popup.style.display = 'flex'; // Show the popup
      document.body.classList.add("no-scroll"); // Lock scroll
      form.reset(); // Optional: clear the form

    } else {
      popup2.style.display = 'flex'; // Show the popup
      document.body.classList.add("no-scroll"); // Lock scroll
      form.reset(); // Optional: clear the form
    }

  } catch (error) {
    alert("Something went wrong.");

  } finally {
    // Enable the button again
    submitBtn.disabled = false;
    submitBtn.value = "Send";
    submitBtn.style.backgroundColor = "#EEE5DA"
    submitBtn.style.color = "#262424"
    submitBtn.style.cursor = "pointer"
  }

});

doneBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  document.body.classList.remove("no-scroll"); // Unlock scroll
});

doneBtn2.addEventListener('click', () => {
  popup2.style.display = 'none';
  document.body.classList.remove("no-scroll"); // Unlock scroll
});


