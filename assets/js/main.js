function MiembroSquad(nombreApellido,edad,hobbies){
	this.nombreApellido = nombreApellido;
	this.edad = edad;
	this.hobbieUno = hobbies;
}

var arr = [
	new MiembroSquad("Fernanda Zamora",30,["escuchar música","tomar fotografías","pensar en el existencialismo"]),
	new MiembroSquad("Cindialy Berrios",23,["trekking","escuchar música","deportes"]),
	new MiembroSquad("Esperanza Lucero",25,["fotografía","leer","dormir"]),
	new MiembroSquad("Diana Villasmil",29,["cantar","ver series coreanas","leer"]),
	new MiembroSquad("Natalia Villalobos",29,["Ver series Coreanas", "Cantar", "Escuchar música"])

];

var miembro = document.getElementById("miembro");
arr.forEach(function(elemento){
	
})