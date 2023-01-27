const movieSelect = document.querySelector('#movie-select');
const dateSelect = document.querySelector('#date-select');
const timeSelect = document.querySelector('#time-select');
const ticketNumber = document.querySelector('#ticket-number');
const bookBtn = document.querySelector('#book-btn');
const bookingConfirmation = document.querySelector('#booking-confirmation');

bookBtn.addEventListener('click', function(e) {
    e.preventDefault(); // prevent the form from submitting
    const selectedMovie = movieSelect.options[movieSelect.selectedIndex].text;
    const selectedDate = dateSelect.value;
    const selectedTime = timeSelect.options[timeSelect.selectedIndex].text;
    const numberOfTickets = ticketNumber.value;
    // Display the booking details on the page
    bookingConfirmation.innerHTML = `You have booked ${numberOfTickets} ticket(s) for ${selectedMovie} on ${selectedDate} at ${selectedTime}.`;
});
const signInButton = document.querySelector('#sign-in-button');
const signUpButton = document.querySelector('#sign-up-button');
const signInContainer = document.querySelector('#sign-in-container');
const signUpContainer = document.querySelector('#sign-up-container');

// Sign in button event listener
signInButton.addEventListener('click', function(e) {
    e.preventDefault();

    // Get the email and password
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Check if the email and password match a user in the database
    // You'll need to add code to check the email and password against your database here
    if (email === "example@email.com" && password === "password") {
        // Save the email
