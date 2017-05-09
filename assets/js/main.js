function pesoPluton(){
	var peso = document.getElementById("peso").value
	var gravedad = 0.40;
	var calculo = peso * gravedad;
	var nuevoPeso = calculo.toFixed(2);

	return alert("Tu peso en Plutón es de: " + nuevoPeso + " kilos.");
}

function pesoNeptuno(){
	var peso = document.getElementById("peso").value
	var gravedad = 11;
	var calculo = peso * gravedad;

	return alert("Tu peso en Neptuno es de: " + calculo + " kilos.");
}

function pesoUrano(){
	var peso = document.getElementById("peso").value
	var gravedad = 7.77;
	var calculo = peso * gravedad;
	var nuevoPeso = calculo.toFixed(2);

	return alert("Tu peso en Urano es de: " + nuevoPeso + " kilos.");
}

function pesoSaturno(){
	var peso = document.getElementById("peso").value
	var gravedad = 9.05;
	var calculo = peso * gravedad;
	var nuevoPeso = calculo.toFixed(2);

	return alert("Tu peso en Saturno es de: " + nuevoPeso + " kilos.");
}

function pesoJupiter(peso){
	var peso = document.getElementById("peso").value
	var gravedad = 22.88;
	var calculo = peso * gravedad;
	var nuevoPeso = calculo.toFixed(2);

	return alert("Tu peso en Júpiter es de: " + nuevoPeso + " kilos.");
}

function pesoMarte(){
	var peso = document.getElementById("peso").value
	var gravedad = 3.72;
	var calculo = peso * gravedad;
	var nuevoPeso = calculo.toFixed(2);

	return alert("Tu peso en Marte es de: " + nuevoPeso + " kilos.");
}

function pesoVenus(){
	var peso = document.getElementById("peso").value
	var gravedad = 8.87;
	var calculo = peso * gravedad;
	var nuevoPeso = calculo.toFixed(2);

	return alert("Tu peso en Venus es de: " + nuevoPeso + " kilos.");
}

function pesoMercurio(){
	var peso = document.getElementById("peso").value
	var gravedad = 2.78;
	var calculo = peso * gravedad;
	var nuevoPeso = calculo.toFixed(2);

	return alert("Tu peso en Mercurio es de: " + nuevoPeso + " kilos.");
}