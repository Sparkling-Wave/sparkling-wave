document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get the email input value
    var email = document.getElementById("emailInput").value;

    // Send the email
    sendEmail(email);
});

function sendEmail(email) {
    // Create an XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Prepare the request
    xhr.open("POST", "send_email.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Define what happens on successful data submission
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Handle successful response, if needed
            console.log("Email sent successfully");
        } else {
            // Handle error response, if needed
            console.error("Error sending email");
        }
    };

    // Define what happens in case of error
    xhr.onerror = function() {
        console.error("Error sending email");
    };

    // Send the request
    xhr.send("email=" + encodeURIComponent(email));
};