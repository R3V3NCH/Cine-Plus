function access_login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    //Verifico por consola si mis datos se mandan e imprimen
    console.log("Correo: ", email, "\nContraaeña: ",password);
    if(email == "" || password == "") {
        Swal.fire(
            'Campos incompletos',
            'Por favor, llene todos los campos solicitados',
            'warning'
        );
    } else {
        //declaracion, envío e impresion de datos
        $.ajax({
            type: 'POST',
            url: 'JQuery/login-access.php',
            data: "email=" + email + "&password=" + password,
            success: function(data) {
                //Verificamos si los datos son correctos para el inicio de sesion
                if(data == 1 ) {
                    /*Swal.fire(
                        '¡Bienvenido!',
                        data,
                        'success'
                    )*/
                    document.getElementById("email").value = "";
                    document.getElementById("password").value = "";
                    //redireccionamos a admin.html
                    location.href="admin.html";
                } else if(data == 2) {
                    document.getElementById("email").value = "";
                    document.getElementById("password").value = "";
                    //redireccionamos a movies.html
                    location.href="movies.html";
                } else if(data == "datos incorrectos") {
                    Swal.fire(
                        '¡Oops!',
                        'Algo salió mal, verifica tus datos',
                        'error'
                    );
                }
            }
        });
    }
}