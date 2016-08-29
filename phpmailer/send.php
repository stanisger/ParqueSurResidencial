<?php


require 'class.phpmailer.php';
require 'class.subphpmailer.php'; //Para php 5.6
require 'class.smtp.php';

function validate($post){
	$input = '';
	if(empty($post['name'])){
		$send= false; $input += '* Nombre requerido \n';
	}
	if(empty($post['email'])){
		$send = false; $input += '* Correo elctronico requerido \n';
	}
	if(empty($post['phone'])){
		$send = false; $input += '* Teléfono requerido \n';
	}
	return $input;
}
if($_POST){
	$validation = validate($_POST); $send = false;
	if(empty($validation))
	{
		$mail = new subPHPMailer;

		//$mail->SMTPDebug = 2;                               // Enable verbose debug output
		$mail->isSMTP();                                      // Set mailer to use SMTP
		$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
		$mail->SMTPAuth = true;                               // Enable SMTP authentication
		$mail->Username = 'developer2585@gmail.com';                 // SMTP username
		$mail->Password = 'aghbnvfticcmjinw';                           // SMTP password
		$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
		$mail->Port = 587;                                    // TCP port to connect to
		$mail->setFrom('developer2585@gmail.com', 'developer2585');
		$mail->addAddress('ivan.hernandez@publicidadenlinea.com', 'Ivan Hernandez Lopez');     // Add a recipient *Name is optional
		$mail->isHTML(true);                              // Set email format to HTML
		$mail->Subject = 'Contacto: Parque Sur Residencial';
		$mail->Body    = 'Hola esto es una prueba';

		if(!$mail->send()) {
		    $message =  'El correo no puedo ser enviado.';
		} else {
			$send = true;
		    $message =  'Mensaje enviado correctamente';
		}
	}else{
		$message =  $validation;
	}

	$response = array('message'=>$message,'send'=>$send);
	//print_r($response);
	$response = json_encode($response);
	echo $response;
}