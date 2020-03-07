function mostrar()
{
  alert("dos");
  var peso;
  var precio;
  var variedad;
  var respuesta;
  var descuento;
  var importeTotal;
  var importeDescuento;
  var promedioPrecio;

  do {
    peso = prompt("ingrese peso");
    peso = parseInt(peso);
    precio = prompt("ingrese precio");
    precio  = parseInt(precio);
    variedad = prompt("ingrese variedad animal, vegetal, mezcla (a, v, m)");

    
    
    while (isNaN(peso)|| peso < 10 || peso > 1000) {
      peso = prompt("ingrese peso valido");
    }
    while (isNaN(precio)|| precio <0) {
      precio = prompt("ingrese peso valido");
    }
    while (isNaN(variedad)|| variedad != "a" && variedad != "v" && variedad != "m") {
      variedad = prompt("ingrese variedad valida (a, v, m)");
    }
    
    if (peso > 300) {
      descuento = peso * 0.75;
    }else if (peso > 100 && peso <300) {
      descuento = peso * 0.85;
    }
    if (variedad && bandera == 0 || precioAlimentoMax < precio ) {
      precioAlimentoMax = precio;
      bandera++;
    }
    if (precio) {
      precioContador++;
    }
    respuesta = confirm("indique si para continuar?");
  } while (respuesta == "si");
  
  importeTotal = peso * precio;
  importeDescuento = precio * descuento;
  promedioPrecio = precio / precioContador;

//hacer la cuenta con cada compra//
}
document.write("el importe total es " + importeTotal + <br/>);
document.write("el importe con descuento " + importeDescuento + <br/>);
document.write("el alimento mas caro es " + precioAlimentoMax + <br/>);
document.write("el promedio de precio kilo es " + promedioPrecio + <br/>);