<?php 
    $v1 = $_GET['v1'];
    $v2 = $_GET['v2'];
    header('Content-type: application/json');
    require('./STqNGs0njZ.php');
    try{
        $pdo = new PDO('mysql:host='.UVjWWW.';dbname='.UBFGa6weQD,tmtyOVnU,iTrvTqZUeT);
        $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    }catch(Exception $e){
        echo 'Não foi possível realizar a conexão com o banco de dados';    
    }
    $pdo_query = $pdo->prepare("SELECT * FROM `clevel` WHERE `clevel`.`v1` = '$v1' AND `clevel`.`v2` = '$v2'");
    $pdo_query->execute();
    $user = $pdo_query->fetchAll(PDO::FETCH_ASSOC);
    if($user[0]['v1'] == $v1 && $user[0]['v2'] == $v2){
        echo 'true';
    }else{
        echo 'false';
    }

?>
