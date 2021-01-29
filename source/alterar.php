<?php 
    header('Content-type: application/json');

    $column = $_GET['column'];
    $value = $_GET['value'];
    $order = $_GET['order'];

    require('./STqNGs0njZ.php');
    try{
        $pdo = new PDO('mysql:host='.UVjWWW.';dbname='.UBFGa6weQD,tmtyOVnU,iTrvTqZUeT);
        $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    }catch(Exception $e){
        echo 'Não foi possível realizar a conexão com o banco de dados'; 
    }
    $pdo_query = $pdo->prepare("UPDATE `orders` SET `$column` = '$value' WHERE `orders`.`order` = $order;");
    $pdo_query->execute();
/*     $compras = $pdo_query->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($compras); */

?>