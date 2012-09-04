<?php

/*
!nteractive
Created: 12/01/2010
By: Catalin Pinte
Contact Info: pinte_catalin@yahoo.com
*/


error_reporting (E_ALL ^ E_NOTICE);
$post = (!empty($_POST)) ? true : false;

if($post){
	$name = stripslashes($_POST['firstname']);
	$to = "me@thomasbiddle.com"; // type here your mail
	$from =  $_POST['email'];
	$subject = " New message from "  .stripslashes($_POST['firstname']) . " "  . stripslashes($_POST['lastname']) . " !";
    $message = htmlspecialchars($_POST['message']) . "\r\n" .  " Phone: " . $_POST['phone'] . "\r\n" . "E-mail:" . $_POST['email'];
	$headers = 'From: ' . $from . "\r\n" .  //
    'Reply-To: ' . $from . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
	$mail = mail($to, $subject, $message, $headers);

    if($mail){
		  echo 'ok';
	}
	else{
	    echo "error";	
	}

}
?>