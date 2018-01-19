
var catalina = {
	nombre: 'Catalina',
	apellido: 'Mardones',
	correo: 'catalina.mardones2015@alu.uct.cl',
	ciudad: 'Freire',
	ocupacion: 'Estudiante de ciencia política',
	foto: 'img/fotoperfil.jpg',
	img_facebook: 'img/facebook.png',
	img_instagram: 'img/instagram.png',
	img_linkedin: 'img/linkedin.png', 
	

	crearTarjeta: function() {
		var body = document.getElementById('body');
		var tarjeta = document.createElement('div');
		tarjeta.setAttribute('id', 'tarjeta');

		var perfil = document.createElement('img');
		perfil.setAttribute('src', this.foto);
		perfil.setAttribute('id', 'perfil');
		tarjeta.appendChild(perfil);
		body.appendChild(tarjeta);

		var nombre = document.createElement('p');
		var textNombre = document.createTextNode('Nombre: ' + this.nombre);
		nombre.appendChild(textNombre);
		nombre.setAttribute('class', 'texto');
		tarjeta.appendChild(nombre);

		var apellido = document.createElement('p');
		var textApellido = document.createTextNode('Apellido: ' + this.apellido);
		apellido.appendChild(textApellido);
		apellido.setAttribute('class', 'texto');
		tarjeta.appendChild(apellido);

		var correo = document.createElement('p');
		var textCorreo = document.createTextNode('Correo: ' + this.correo);
		correo.appendChild(textCorreo);
		correo.setAttribute('class', 'texto');
		tarjeta.appendChild(correo);

		var ciudad = document.createElement('p');
		var textCiudad = document.createTextNode('Ciudad: ' + this.ciudad);
		ciudad.appendChild(textCiudad);
		ciudad.setAttribute('class', 'texto');
		tarjeta.appendChild(ciudad);

		var ocupacion = document.createElement('p');
		var textOcupacion = document.createTextNode('Ocupación: ' + this.ocupacion);
		ocupacion.appendChild(textOcupacion);
		ocupacion.setAttribute('class', 'texto');
		tarjeta.appendChild(ocupacion);

		var img_facebook = document.createElement('img');
		img_facebook.setAttribute('src', this.img_facebook);
		img_facebook.setAttribute('class', 'iconos')
		body.appendChild(img_facebook);

		var img_linkedin = document.createElement('img');
		img_linkedin.setAttribute('src', this.img_linkedin);
		img_linkedin.setAttribute('class', 'iconos');
		body.appendChild(img_linkedin);

		var img_instagram = document.createElement('img');
		img_instagram.setAttribute('src', this.img_instagram);
		img_instagram.setAttribute('class', 'iconos');
		body.appendChild(img_instagram);
		


	}

}