var codigos = {
    "1234": "Este código desbloquea una cena romántica para esta noche",
    "2323": "Este código lo puedes canjear por una cita en el cine con la película que tú quieras",
    "5656": "Este código contiene un vale por un masaje"
};

var contadorErrores = 0;
var contadorTotalErrores = 0;
var ultimoCodigoCorrecto = true;

function validarCodigo() {
    limpiarResultado();

    var codigoUsuario = document.getElementById("codigo").value;

    if (codigoUsuario === "") {
        return;
    }

    if (codigoUsuario in codigos) {
        if (!ultimoCodigoCorrecto) {
            contadorErrores = 0;
            document.getElementById("codigoErroneo").innerText = "";
        }
        ultimoCodigoCorrecto = true;

        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.style.display = "flex";
        var texto = codigos[codigoUsuario];
        resultadoDiv.innerHTML += "<span style='font-size: 20px; font-weight: bold;'>" + texto + "</span>";
        document.getElementById("botonMenuPrincipal").style.display = "inline-block";

        document.getElementById("formulario").style.display = "none";
    } else {
        ultimoCodigoCorrecto = false;
        contadorErrores++;
        contadorTotalErrores++;
        mostrarContadorErrores(contadorErrores);
        document.getElementById("codigoErrores").style.display = "none";
        var codigoErroneoDiv = document.getElementById("codigoErroneo");
        var mensaje = "¡Código Erróneo! ";
        if (contadorErrores > 1) {
            mensaje += contadorErrores + " Errores";
        }
        codigoErroneoDiv.innerText = mensaje;
    }
}

function limpiarResultado() {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";
}

function mostrarContadorErrores(contador) {
    var contadorDiv = document.getElementById("codigoErroneo");
    contadorDiv.innerText = "¡Código Erróneo! " + contador + " Errores";
}

function irAlMenu() {
    document.getElementById("formulario").style.display = "block";
    document.getElementById("resultado").style.display = "none";
    document.getElementById("botonMenuPrincipal").style.display = "none";
}

document.getElementById("codigo").addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        validarCodigo();
    }
});
