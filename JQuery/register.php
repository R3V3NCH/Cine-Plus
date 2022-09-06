<?php
    //incluimos la conexión con la base de datos
    include ('connection.php');
    //Obtenemos los datos mandados desde el functions.js con POST
    if(isset($_POST['username'])) {
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        //Creamos la sentencia que nos permitirá saber si el username existe o no
        $sql = mysqli_query($connection, "SELECT username FROM accounts WHERE username = '$username';");
        //Identificamos que existe
        $foundUsername = mysqli_num_rows($sql);
        /*Condicionamos que si el username fue encontrado ($foundUsername >= 1), 
        no podrá insertarse el usuario, ya que se encuentra registrado dentro de la base de datos*/
        if($foundUsername >= 1) {
            echo "El nombre de usuario ya existe, por favor, ingresa otro.";
        } else {
            /* En caso de que el nombre de usuario no exista, se crea la consulta para
            insertar el nuevo usuario */
            $query = mysqli_query($connection, "INSERT INTO accounts (username, email, password, idRol) VALUES ('$username', '$email', '$password', 2);");
            /* Comprobamos si la consulta fue exitosa, mandamos el mensaje al register.js */
            if($query == true) {
                echo "Tus datos se han registrado existosamente, en un momento serás redireccionado.";
            }
        }
    }

?>