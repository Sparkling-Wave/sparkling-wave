<?php
// Get the email address from the POST request
$email = $_POST['email'];

// Your email sending code here
$to = 'hello@sparklingwavelimited.com.ng';
$subject = 'New Subscriber';
$message = 'Email: ' . $email;
$headers = 'From: your_email@example.com' . "\r\n" .
    'Reply-To: your_email@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

// Send the email
$mailSent = mail($to, $subject, $message, $headers);

// Return a response
if ($mailSent) {
    // Email sent successfully
    http_response_code(200);
    echo 'Email sent successfully';
} else {
    // Error sending email
    http_response_code(500);
    echo 'Error sending email';
}
?>
