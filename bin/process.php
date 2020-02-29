<?php

if ((isset($_POST['name'])) && (strlen(trim($_POST['name'])) > 0)) {
	$name = stripslashes(strip_tags($_POST['name']));
} else {$name = 'No name entered';}
if ((isset($_POST['email'])) && (strlen(trim($_POST['email'])) > 0)) {
	$email = stripslashes(strip_tags($_POST['email']));
} else {$email = 'No email entered';}
if ((isset($_POST['email_msg'])) && (strlen(trim($_POST['email_msg'])) > 0)) {
	$email_message = stripslashes(strip_tags($_POST['email_msg']));
} else {$phone = 'No message entered';}
ob_start();
?>
<html>
<head>
<style type="text/css">
</style>
</head>
<body>
<table width="550" border="1" cellspacing="2" cellpadding="2">
  <tr bgcolor="#eeffee">
    <td>Name</td>
    <td><?=$name;?></td>
  </tr>
  <tr bgcolor="#eeeeff">
    <td>Email</td>
    <td><?=$email;?></td>
  </tr>
  <tr bgcolor="#eeffee">
    <td>Message</td>
    <td><?=$email_message;?></td>
  </tr>
</table>
</body>
</html>
<?
$body = ob_get_contents();


// for some reason the fancy code above doesn't work. So Sasha wrote this line:
$sasha_body = 'Name:
'.$name.'

email:
'.$email.'

message:
'.$email_message;

$to = 'sasha@sashaloobkoff.com';

$email = 'sasha@sashaloobkoff.com';

$fromaddress = "sasha@sashaloobkoff.com";
$fromname = "Online Contact for Sasha";

require("phpmailer.php");

$mail = new PHPMailer();

$mail->From     = "sasha@sashaloobkoff.com";
$mail->FromName = "Sasha's Contact Form";
//$mail->AddAddress("email_address@example.com","Name 1");
//$mail->AddAddress("another_address@example.com","Name 2");

$mail->WordWrap = 50;
$mail->IsHTML(true);

$mail->Subject  =  "Contact message (in HTML) from Sashaloobkoff.com";
$mail->Body     =  $body;
$mail->AltBody  =  $sasha_body;

$mail->Send();

if(!$mail->Send()) {
	$recipient = 'sasha@sashaloobkoff.com';
	$subject = 'Contact message from Sashaloobkoff.com';
	$content = $sasha_body;
  mail($recipient, $subject, $content, "From: sasha@sashaloobkoff.com\r\nReply-To: $email\r\nX-Mailer: DT_formmail");
  exit;
}
?>
