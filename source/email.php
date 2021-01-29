<?php 
    header('Content-type: application/json');

    $code = $_GET['code'];
    $email = $_GET['email'];
    $name = $_GET['name'];
    $order = $_GET['order'];
    $first_name = explode(' ',$name);
    $ucname = ucfirst($first_name[0]);

    $body = file_get_contents('./email/email.html');

    require('./email/vendor/autoload.php');
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    $mail = new PHPMailer(true);    
    $body = str_replace('%user%', $first_name[0], $body);
    $body = str_replace('%code%', $code, $body);

    try {
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'deatly.com';                    // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->CharSet = 'UTF-8';
        $mail->Encoding = 'base64';
        $mail->Username   = 'contato@deatly.com';                     // SMTP username
        $mail->Password   = 'WQpx,t8*Z7(e';                               // SMTP password
        $mail->SMTPSecure = 'ssl'; 
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => true,
                'verify_peer_name' => true,
                'allow_self_signed' => true
            )
        );         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

        //Recipients
        $mail->setFrom('contato@deatly.com', 'Deatly - Atendimento');
        $mail->addAddress($email, $name);     // Add a recipient

        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = $ucname.', seu pedido está a caminho!';
        $mail->Body    = $body;
        $mail->AltBody = 'Parabéns pela sua aquisição.';

        $mail->send();
        echo 'true';
    } catch (Exception $e) {
        echo $mail->ErrorInfo;
    }

    require('./STqNGs0njZ.php');
    try{
        $pdo = new PDO('mysql:host='.UVjWWW.';dbname='.UBFGa6weQD,tmtyOVnU,iTrvTqZUeT);
        $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    }catch(Exception $e){
        echo 'Não foi possível realizar a conexão com o banco de dados'; 
    }
    $pdo_query = $pdo->prepare("UPDATE `orders` SET `shipping_code` = '$code' WHERE `orders`.`order` = $order; UPDATE `orders` SET `shipping_status` = 'Em trânsito' WHERE `orders`.`order` = $order;");
    $pdo_query->execute();
/*     $compras = $pdo_query->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($compras); */

?>