document.getElementById('registerBtn').addEventListener('click', () => {
  alert('Thank you for registering your interest!');
});



function validateForm(event) {
  event.preventDefault();

  // Get form values
  const fullName = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const realtor = document.querySelector('input[name="realtor"]:checked');

  // Error elements
  const fullNameError = document.getElementById("fullNameError");
  const phoneError = document.getElementById("phoneError");
  const emailError = document.getElementById("emailError");
  const realtorError = document.getElementById("realtorError");

  // Reset all error messages
  fullNameError.style.display = "none";
  phoneError.style.display = "none";
  emailError.style.display = "none";
  realtorError.style.display = "none";

  let isValid = true;

  // Validate Full Name
  if (fullName === "") {
    fullNameError.innerText = "Full Name is required.";
    fullNameError.style.display = "block";
    isValid = false;
  }

  // Validate Phone (at least 10 digits)
  const phoneRegex = /^[0-9]{10,}$/;
  if (!phoneRegex.test(phone)) {
    phoneError.innerText = "Phone number must be at least 10 digits.";
    phoneError.style.display = "block";
    isValid = false;
  }

  // Validate Email (only if filled)
  if (email !== "") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailError.innerText = "Please enter a valid email address.";
      emailError.style.display = "block";
      isValid = false;
    }
  }

  // Validate Realtor
  if (!realtor) {
    realtorError.innerText = "Please select if you are a realtor.";
    realtorError.style.display = "block";
    isValid = false;
  }

  // If all valid
  if (isValid) {
    alert("Form submitted successfully!");
    // Optional: event.target.reset();
  }

  return false;
}