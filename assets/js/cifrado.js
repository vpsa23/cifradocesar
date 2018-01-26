// function cesar(phrase){
	do{
		var answer = prompt("Indique el número de lo que desea hacer: 1)Encriptar - 2)Descriptar");
		if(answer != ""){
			if(answer == "1") {
				var phrase = prompt("Introduzca su palabra para Encriptar")
				cipher(phrase);
			} else if (answer == "2") {
				var phrase = prompt("Introduzca su palabra para Desencriptar")
				decipher(phrase);
			} else {
				alert("Ingrese una opción válida");
			}
		}
	} while (answer == "" || (answer != "1" && answer != "2"));

function cipher(phrase){
	var result = "";
	var  codigo= 0;

	phrase = phrase.toUpperCase();


	for (var i = 0; i<phrase.length; i++){
		codigo = phrase.charCodeAt(i);
		codigo = ((codigo-65+33)%26)+65;
		result = result + String.fromCharCode(codigo);
	}
	phrase = phrase.toLowerCase();
	alert(result);
}


function decipher(phrase){
	var result = "";
	var  codigo= 0;

	phrase = phrase.toUpperCase();

	for (var i = 0; i<phrase.length; i++){
		codigo = phrase.charCodeAt(i);
		codigo = ((codigo-65-7+26)%26+65);
		result = result + String.fromCharCode(codigo);
	}
	phrase = phrase.toLowerCase();
	alert(result);
}