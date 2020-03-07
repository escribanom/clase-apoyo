
function mostrar()
{
	
	var contador = 0;
	var producto;
	var precio;
	var unidades;
	var marca;
	var fabricante;
	var precioBarbijoMax;
	var precioBarbijoMaxCantidad;
	var precioBarbijoMaxFabricante;
	var bandera = 0;
	var maxCantidadUnidades;
	var maxProducto;
	var maxProductoFabricante;
	var contadorJabones = 0;


		
	
	while (contador < 5) {
		contador++;
	}
		do{
			var producto = prompt("ingrese un producto (barbijo, jabón, alcohol)");
			producto = parseInt(producto);
		}while (isNaN(producto) || producto != "barbijo" && producto != "jabón" && producto != "alcohol" ) {
			producto = prompt("ingrese un producto valido (barbijo, jabón, alcohol)");
		}

		do{
			var precio = prompt("ingrese el precio");
			precio = parseInt(precio);
		}while (isNaN(precio)|| precio <100 || precio > 300 ) {
			precio = prompt("ingrese un precio valido)");
		}
		do{
			var unidades = prompt("ingrese cantidad de unidades ");
			unidades = parseInt(unidades);
		}while (isNaN(unidades)|| unidades <= 0 || unidades > 1000) {
			unidades = prompt("ingrese cantidad de unidades validas ");
		}
		do{
			var marca = prompt("ingrese una marca");
		}while (!isNaN(marca)) {
			marca = prompt("ingrese una marca valida ");
		}
		do{
			var fabricante = prompt("ingrese un fabricante");
		}while (!isNaN(fabricante)) {
			fabricante = prompt("ingrese un fabricante valido ");
		}
		if (producto == "barbijo" && bandera == 0 || precioBarbijoMax < precio ) {
			precioBarbijoMax = precio;
			precioBarbijoMaxFabricante = fabricante;
			precioBarbijoMaxCantidad = cantidad;
			bandera++;
		}
		if (producto && bandera == 0 || maxProducto < cantidad ) {
			maxProducto = cantidad;
			maxProductoFabricante = fabricante;
			bandera++;
		}
		if (producto == "jabón" ) {
			contadorJabones++;
		}
	

	 document.write("el barbijo mas caro es " + precioBarbijoMax + " el fabricante es " + precioBarbijoMaxFabricante + " y la cantidad es " + precioBarbijoMaxCantidad + <br/>);
	 document.write("el producto con mas unidades es " + maxProducto + " y el fabricante es " + maxProductoFabricante + <br/>);
	 document.write("la cantidad de jabones es " + contadorJabones + <br/>);
}
