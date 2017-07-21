//Arregos vacios para compañeras y para comentarios
var arr = [];
var arrComentarios = [];


//Constructor de Squad
function Squad(nombre,edad,hobbies,id,image){
	this.nombre = nombre;
	this.edad = edad;
  	this.hobbies = hobbies;
  	this.id = id;
  	this.image = image;
}


/*
Para que se cuenten los like vi en una web que se crea un objeto contructor, 
pero contenia el atributo 'data-bind' en las etiquetas para que incrementar el valor.
Hubo cosas que intente comprender, pero solo pude sumar un número al like del primer comentario.
Adjunto link donde vi ese forma de crear el boton y hacer una suma:
http://jsfiddle.net/rniemeyer/3Lqsx/
*/
function LikeClick(){
	this.numberOfClicks = ko.observable(0);
	this.registerClick = function() {
        this.numberOfClicks(this.numberOfClicks() + 1);
    };
}


//Se construye el Squad
function mySquad(){
	var fena = new Squad("Fernanda Zamora",30,["Escuchar música","Tomar fotografías","Pensar en el existencialismo"],1,"assets/image/fda.jpg");
	var cindi = new Squad("Cindialy Berrios",23,["Trekking","Escuchar música","Deportes"],2,"https://image.freepik.com/free-vector/social-media-elements-in-flat-style_23-2147575234.jpg");
	var espe = new Squad("Esperanza Lucero",25,["Fotografía","Leer","Dormir"],3,"https://image.freepik.com/free-vector/social-media-elements-in-flat-style_23-2147575234.jpg");
	var diana = new Squad("Diana Villasmil",29,["Cantar","Ver series coreanas","Leer"],4,"assets/image/DIANA.jpg");
	var nati = new Squad("Natalia Villalobos",29,["Tocar batería","Dormir","Hacer queques"],5,"assets/image/naty.jpg");
	var vann = new Squad("Vanessa Pellegrini",25,["Jugar lol","Ver series","Visitar parques"],6,"assets/image/vann.jpg");
	var vane = new Squad("Vanessa García",25,["Aprender de Agilidad","Probar cervazas","Escuchar música"],7,"assets/image/vane.jpg");
	var vale = new Squad("Valentina Miranda",26,["Dibujar","Ver anime y series","Cocinar"],8,"https://image.freepik.com/free-vector/social-media-elements-in-flat-style_23-2147575234.jpg");

	arr.push(fena,cindi,espe,diana,nati,vann,vane,vale);

	escribeEnHTML();
}
 
//Va que contiene el id de la etiqueda div desde el html
var escribir = document.getElementById('mi-squad');


//Function que crea todos los elementos: foto, datos, cuadro de comentario, boton y comentarios
function escribeEnHTML(){
	arr.forEach(function(el){
		var imgAux = document.createElement("div");
		imgAux.innerHTML += "<img class='foto-perfil' src= '" + el.image + "' >" + "<br>";
		escribir.appendChild(imgAux);

		var squadAux = document.createElement("div");
		squadAux.innerHTML +=  '<b>Nombre:</b> ' + el.nombre + '<br><b>Edad:</b> ' + el.edad + '<br><b>Hobbies:</b><br>';
						
		var squadAux2 = document.createElement("ul");
		squadAux2.innerHTML = el.hobbies.forEach(function(h){squadAux.innerHTML += "<li>" + h + "</li>"});

		squadAux.innerHTML += "<br>";

		var comAux = document.createElement("textarea");
		comAux.setAttribute("class", "caja-comentario");
		comAux.setAttribute("id", el.id );
		comAux.setAttribute("type", "text");
		comAux.setAttribute("placeholder","Escribe Comentario");
		squadAux.appendChild(comAux);

		squadAux.innerHTML += "<br><br>";

		var botonAux = document.createElement("a");
		botonAux.innerHTML += "Comentar";
		botonAux.setAttribute("onclick", "elBoton(this.comAux,this," + el.id + ", this.divTextoAux)");
		botonAux.setAttribute("id", "boton");
		botonAux.setAttribute("class", "el-boton");
		squadAux.appendChild(botonAux); 

		squadAux.innerHTML += "<br><br>";

		var divTextoAux = document.createElement("div");
		divTextoAux.setAttribute("class", "comentarios");
		divTextoAux.setAttribute("id", el.id);

		squadAux.appendChild(divTextoAux);



		squadAux.innerHTML += "<br><br>";
		squadAux.innerHTML += "<hr/>";
		squadAux.innerHTML += "<br>";


		escribir.appendChild(squadAux);
	});
}

//Var contador like
var elNum =0;


//Function para boton de comentarios
function elBoton(comAux,botonAux,elId,divTextoAux){

	comAux = document.getElementById(elId).value;
	divTextoAux = document.getElementsByClassName("comentarios");

	var recorre = arr.filter(function(r){
		return r.id == elId;
	})

	var likeCaja = document.createElement("div");
	likeCaja.setAttribute("class", "caja-div-like");
	likeCaja.setAttribute("align", "right");	
	likeCaja.setAttribute("id", arrComentarios.length + 1);

	var botonLike = document.createElement("a");
	botonLike.innerHTML += "❤";
	botonLike.setAttribute("class", "el-boton-like");
	botonLike.setAttribute("id", arrComentarios.length + 1);
	botonLike.setAttribute("onclick", "contLike('"+ elNum +"')");


	var contador = document.createElement("a")
	contador.innerHTML += " ";
	var numEdit = document.createTextNode(elNum);
	contador.appendChild(numEdit)
	contador.setAttribute("type", "number");
	contador.setAttribute("class", "el-contador");
	contador.setAttribute("id", "num");

	botonLike.appendChild(contador);

	likeCaja.appendChild(botonLike);

	var losCom = document.createElement("div");
	losCom.setAttribute("id", elId);
	losCom.innerHTML = "<b>~</b> " + document.getElementById(elId).value;


	if(recorre[0].id == elId && comAux != ""){
		arrComentarios.push(losCom);
		divTextoAux[recorre[0].id - 1].appendChild(losCom);
		divTextoAux[recorre[0].id - 1].appendChild(likeCaja);
		divTextoAux[recorre[0].id - 1].innerHTML += "<br><br>";
		document.getElementById(elId).value = "";

	//divTextoAux[recorre[0].id - 1].innerHTML += "<button onclick='contLike(contador)'> ♥ "+ contador +"</button><br>";
	}

}

	/*
	console.log(recorre[0].id);
	console.log(divTextoAux[recorre[0].id]);
	console.log(elId);	
	*/


//Function del contador de like
function contLike(elNum,elId){
var igualC = document.getElementById(arrComentarios.length + 1).value;	
var contadorAux = document.getElementById("num");

console.log(contadorAux);

var recorreLike = arrComentarios.filter(function(c){
	return c.id = igualC;
})
		var elNum = parseInt(elNum);
		var contador = elNum + 1;


	return contadorAux.innerHTML = " " + contador;
}	


//Llama a function principal.
mySquad();