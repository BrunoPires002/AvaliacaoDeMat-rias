
<?php

    header("Acess-Control-Allow-Origin: *");

    include("./conexao.php");

    $json = file_get_contents('php://input');

    $obj = json_decode($json,true);

    $nomeMateria = $obj['prof'];
    $profMateria = $obj['materia'];
    $notaMateria = $obj['nota'];
    $positivoMateria = $obj['positivos'];
    $negativoMateria = $obj['negativos'];

    $stmt = $pdo->prepare("insert into tbMateria values('','$nomeMateria','$profMateria','$notaMateria','$positivoMateria','$negativoMateria')");

    $stmt->execute();
?>