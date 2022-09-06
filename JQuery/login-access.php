<?php
    //incluimos la conexión con la base de datos
    include ('connection.php');
    //Obtenemos los datos mandados desde el functions.js con POST
    if(isset($_POST['email'])) {
        $email = $_POST['email'];
        $password = $_POST['password'];
        $query = mysqli_query($connection, "SELECT username, email, password, idRol FROM accounts WHERE username = '$email' AND password = '$password' OR email = '$email' AND password = '$password';");
            //verificamos el numero de resultados
			$numberRows = mysqli_num_rows($query);
            $idRol = $query->fetch_assoc();
            //condicionamos si el numero de resultados es mayor o igual 1
			if($numberRows >= 1){
				echo $idRol['idRol'];
			}else{
				echo "datos incorrectos";
			}
    }

?>