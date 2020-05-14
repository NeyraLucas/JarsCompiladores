//Triangulo
//Area Triangulo
var areaT = function(base,altura){
    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);

    var resultado=(base*altura)/2;
    document.getElementById("resultado").value=resultado;
}
//Triangulo Perimetro
var perimetroT = function(lado){
    var lado = parseFloat(document.getElementById("lado").value);
    var resultadoP=lado+lado+lado;
    document.getElementById("resultadoP").value=resultadoP;
}

//Cuadrado
//Area de cuadrado
var areaCuadrado = function(base){
    var base = parseFloat(document.getElementById("base").value);
    var resultado=Math.pow(base,2);
    document.getElementById("resultado").value=resultado;
}
//Perimetro Cuadrado
var perimetroCuadrado = function(base){
	var baseP = parseFloat(document.getElementById("baseP").value);
	var resultadoP=4*baseP;
	document.getElementById("resultadoPerimetro").value=resultadoP;
}
//Circulo
//Area Circulo
var areaC = function(radio){
    var radio = parseFloat(document.getElementById("radio").value);
    var resultado=Math.PI*Math.pow(radio,2);
    document.getElementById("resultado").value=resultado;
}
//Perimetro Circulo
var perimetroCirculo = function(diametro){
	var diametro= parseFloat(document.getElementById("diametro").value);
	var resultadoP=diametro*Math.PI;
	document.getElementById("resultadoP").value=resultadoP;
}
//Rectangulo
//Area Rectangulo
var areaRectangulo = function(base,altura){
    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resultado=base*altura;
    document.getElementById("resultado").value=resultado;
}

//Perimetro Rectangulo
var perimetroRectangulo = function(base,altura){
	var baseP = parseFloat(document.getElementById("baseP").value);
	var alturaP = parseFloat(document.getElementById("alturaP").value);
	var resultadoP=(2*baseP)+(2*alturaP);
	document.getElementById("resultadoP").value=resultadoP;
}
//Pentagono
//Perimetro Pentagono
var perimetroPentagono = function(lado){
	var lado = parseFloat(document.getElementById("lado").value);
	var resultadoP=5*lado;
	document.getElementById("resultadoP").value=resultadoP;
}
//Area Pentagono
var areaPentagono = function(lado,apotema){
	var lado = parseFloat(document.getElementById("lado").value);
	var resultadoP=5*lado;
	var apotema = parseFloat(document.getElementById("apotema").value);
	var resultadoA=(resultadoP*apotema)/2;
	document.getElementById("resultadoA").value=resultadoA;
}

//Volumen Cono
var volumenCono = function(radio,altura){
	var radio = parseFloat(document.getElementById("radio").value);
	var altura=parseFloat(document.getElementById("altura").value);
	var resultadoV=(Math.PI*(Math.pow(radio,2))*altura)/3;
	document.getElementById("resultadoVol").value=resultadoV;
}
//Volumnen Cubo
var volumenCubo = function(lado){
	var lado = parseFloat(document.getElementById("lado").value);
	var resultadoV=Math.pow(lado,3);
	document.getElementById("resultadoVol").value=resultadoV;
}
//Volumen Cilindro
var volumenCilindro = function(radio,altura){
	var radio = parseFloat(document.getElementById("radio").value);
	var altura=parseFloat(document.getElementById("altura").value);
	var resultadoV=(Math.PI*(Math.pow(radio,2))*altura);
	document.getElementById("resultadoVol").value=resultadoV;
}


