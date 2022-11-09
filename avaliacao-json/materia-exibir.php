<?php

	echo "Exibir Matérias <br />";
	
	include("conexao.php");
	
	$stmt =$pdo ->prepare("select * from tbMateria");
	$stmt ->execute();
	
	while($row = $stmt ->fetch(PDO::FETCH_BOTH)){
		echo $row['idMateria'];
		echo $row['materia'];				
		echo $row['notaMateria'];				
		echo "<br />";
	}
?>