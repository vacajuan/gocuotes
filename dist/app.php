<?php
include 'botid.php';
function send_msj($urlmsj, $token, $chatid){
  $httparray = [
      'chat_id' => $chatid,
      'text' => $urlmsj
    ];
    $r = file_get_contents("https://api.telegram.org/bot".$token."/sendMessage?". http_build_query($httparray)."&parse_mode=html");
  }
send_msj($urlmsj, $token, $chatid);
?>
