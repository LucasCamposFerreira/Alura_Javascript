var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    var infoPeso = paciente.querySelector(".info-peso");
    var infoAltura = paciente.querySelector(".info-altura");

    var infoImc = paciente.querySelector(".info-imc");

    var altura = infoAltura.textContent;
    var peso = infoPeso.textContent;

    var pesoValido = true;
    var alturaValida = true;

    if (peso <=0 || peso >=1000) {
        pesoValido = false;
        infoImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <=0 || altura >=3.00) {
        alturaValida = false;
        infoImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso,altura);
        infoImc.textContent = imc;
    }
}

function calculaImc(peso,altura) {
    var imc = 0;

    imc = peso / altura**2;

    return imc.toFixed(2);
}