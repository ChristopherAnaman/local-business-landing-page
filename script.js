const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    if (name === "" || message === "") {
        alert("Please fill in your name and message.");
    } else {
        alert("Thank you, " + name + "! Your message has been received.");
        form.reset();
    }
});