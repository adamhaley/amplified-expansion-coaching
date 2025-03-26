<?php
header('Content-Type: application/json');

// Get the email from the POST request
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

if (!$email) {
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// Email details
$to = 'adamhaley@gmail.com';
$subject = 'New Email Subscription from Amplified Expansion';
$message = "New email subscription from: $email";
$headers = 'From: noreply@amplifiedexpansion.com' . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

// Send the email
$mail_sent = mail($to, $subject, $message, $headers);

if ($mail_sent) {
    echo json_encode(['success' => true, 'message' => 'Thank you for subscribing!']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send email. Please try again later.']);
}
?> 