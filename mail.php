<?php
$to = "EcoKozhevnikov@yandex.ru";
$tema = "Заявка";
$message = "Ваше имя: ".$_POST['name']."<br>";
$message .= "Номер телефона: ".$_POST['tel']."<br>";
$message .= "Название продукта: ".$_POST['productName']."<br>";
$headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
mail($to, $tema, $message, $headers);
?>