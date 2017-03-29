<?php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = "Thanks for your Message.";
$messageReceived = $_POST["message"];

$messageSent = "
<html>
<head>
<title>Email from evjohns.com</title>
</head>
<body>
<p>Dear " . $name . ",</p>
<p></p>
<p>Thanks for your message on evjohns.com</p>
<p></p>
<p>I will reply as soon as possible.</p>
<p></p>
<p>Kind regards,</p>
<p></p>
<p>Evan</p>
</body>
</html> ";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// $headers .= "From: evjohns001@gmail.com" . "\r\n";
$headerReceived = "From: " . $email . "\r\n";

mail("evjohns001@gmail.com", "New message on evjohns.com", $messageReceived, $headerReceived);
// sleep(2);
// mail($email, $subject, $messageSent, $headers);
