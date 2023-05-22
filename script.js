// Restrict the name input to alphabetic characters and spaces
document.getElementById("nameInput").addEventListener("input", function(e) {
    e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
  });
  
  // Restrict the phone number input to numeric characters
  document.getElementById("phoneNumberInput").addEventListener("input", function(e) {
    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
  });





const form = document.getElementById('waitlist-form');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Perform additional validation or processing here if needed

  // Display the message
  message.textContent = "Thank you for joining the waitlist!";
  message.style.display = 'block';

  // Clear the input fields after a delay
  setTimeout(() => {
    form.reset();
    message.style.display = 'none';
  }, 3000); // Adjust the delay as per your preference
});
