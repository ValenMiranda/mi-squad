function MiembroSquad(nombreApellido,edad,hobbies){
	this.nombreApellido = nombreApellido;
	this.edad = edad;
	this.hobbies = hobbies;
}

var squad = [];

	var fena = new MiembroSquad("Fernanda Zamora",30,["Escuchar música","Tomar fotografías","Pensar en el existencialismo"]);
	var cindi = new MiembroSquad("Cindialy Berrios",23,["Trekking","Escuchar música","Deportes"]);
	var espe = new MiembroSquad("Esperanza Lucero",25,["Fotografía","Leer","Dormir"]);
	var diana = new MiembroSquad("Diana Villasmil",29,["Cantar","Ver series coreanas","Leer"]);
	var nati = new MiembroSquad("Natalia Villalobos",29,["Tocar batería","Dormir","Hacer queques"]);
	var vann = new MiembroSquad("Vanessa Pellegrini",25,["Jugar lol","Ver series","Visitar parques"]);
	var vane = new MiembroSquad("Vanessa García",25,["Aprender de Agilidad","Probar cervazas","Escuchar música"]);
	var vale = new MiembroSquad("Valentina Miranda",26,["Dibujar","Ver anime y series","Cocinar"]);

squad.push(fena,cindi,espe,diana,nati,vann,vane,vale);

function print(){
	 var caja = document.getElementById("miembro");
	 var contenido = "";

	 squad.forEach(function(elemento){
	 	contenido += '<div class="integrante">' +
	 				'<strong>Nombre: </strong>' + elemento.nombreApellido + 
	 				'<br>' +
	 				'<strong>Edad: </strong>' + elemento.edad +
            		'<br>' +
            		'<strong>Hobbies: </strong>' +
            		'<ul class= "integrante">';

    elemento.hobbies.forEach(function(el){
    	contenido += '<li>' + el + '</li>';
	});

	contenido += '</ul></div><br>';
	});

	caja.innerHTML = contenido; 
}

print();