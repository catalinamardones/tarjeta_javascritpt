
var catalina = {
	nombre: 'catalina',
	apellido: 'mardones',
	correo: 'catalina.mardones2015@alu.uct.cl',
	ciudad: 'freire',
	ocupacion: 'estudiante de ciencia política',
	foto: 'img/fotoperfil.jpg',

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
		var textNombre = document.createTextNode('nombre:' + this.nombre);
		nombre.appendChild(textNombre);
		nombre.setAttribute('class', 'texto');
		tarjeta.appendChild(nombre);

		var apellido = document.createElement('p');
		var textApellido = document.createTextNode('apellido:' + this.apellido);
		apellido.appendChild(textApellido);
		apellido.setAttribute('class', 'texto');
		tarjeta.appendChild(apellido);

		

	}

}