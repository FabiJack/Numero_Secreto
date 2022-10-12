
var secreto = Math.round(Math.random()*10);
var input = document.querySelector("input");
var button = document.querySelector("button");

console.log(secreto)

function saltarLinea() {
	document.write("<br>");
}

function imprimir(argument) {
	document.write(argument);
	saltarLinea();
}

function verificar() {
	
	if (input.value == secreto) {
		alert("Usted acerto")
	}

	else {
		alert("Usted erro");
	}

}
