function register() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    //Verifico por consola si mis datos se mandan e imprimen
    console.log("Usuario: ", username, "\nCorreo: ", email, "\nContraseña: ",password);
    if(username == "" || email == "" || password == "") {
        Swal.fire(
            'Campos incompletos',
            'Por favor, llene todos los campos solicitados',
            'warning'
        )
    } else {
        //declaracion, envío e impresion de datos
        $.ajax({
            type: 'POST',
            url: 'JQuery/register.php',
            data: "username=" + username + "&email=" + email + "&password=" + password,
            success: function(data) {
                //Condicionamos el tipo de mensaje (data) que fue enviado desde el register.php
                if(data == "El nombre de usuario ya existe, por favor, ingresa otro.") {
                    Swal.fire(
                        '¡Oops!',
                        data,
                        'error'
                    );
                } else if(data == "Tus datos se han registrado existosamente, en un momento serás redireccionado.") {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Genial!',
                        text: data,
                        showConfirmButton: false
                      });
                    document.getElementById("username").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("password").value = "";
                    //location.href="index.html";
                    setTimeout("window.location='index.html'",4000);
                }
            }
        });
    }
}