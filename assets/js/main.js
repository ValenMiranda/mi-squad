function MiembroSquad(nombre,apellido,edad,hobbieUno,hobbieDos,hobbieTres){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbieUno = uno;
	this.hobbieDos = dos;
	this.hobbieTres = tres;
}

const fena = new MiembroSquad("Fernanda","Zamora",30,"escuchar música","tomar fotografías","pensar en el existencialismo");
const cindi = new MiembroSquad("Cindialy","Berrios",23,"trekking","escuchar música","deportes");
const espe = new MiembroSquad("Esperanza","Lucero",25,"fotografía","leer","dormir");
const diana = new MiembroSquad("Diana","Villasmil",29,"cantar","ver series coreanas","leer");

document.getElementById("miembro").innerHTML += ("Nombre: " + this.nombre + " " + this.apellido + "<br>");