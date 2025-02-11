function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const country = document.getElementById('country').value.trim();

  if (!name || !email || !phone || !country) {
    alert("All fields are required!");
    return false;
  }
  alert("Form submitted successfully! We'll contact you soon.");
  return true;
}

