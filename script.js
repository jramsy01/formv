function mostrarSeccion(idSeccion) {
    // Ocultar todas las secciones
    document.querySelectorAll('section').forEach(seccion => {
      seccion.style.display = 'none';
    });

    // Mostrar la sección deseada
    document.getElementById(idSeccion).style.display = 'block';
  }

  function soloLetras(event) {
    var code = (event.which) ? event.which : event.keyCode;
        if (code == 8 || code == 32) { // Retroceso y espacio
        return true;
        } else if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) { // Letras a-z y A-Z
        return true;
        } else {
        return false;
        }
   }


   function solonumeros(evento) {
    var code = (evento.which) ? evento.which : evento.keyCode;
        if (code == 8) { // Retroceso
        return true;
        } else if (code >= 48 && code <= 57) { // Números 0-9
        return true;
        } else {
        return false;
}
}

function solodecimal(evento) {
  var code = (evento.which) ? evento.which : evento.keyCode;
      if (code == 8) { // Retroceso
      return true;
      } else if (code == 46 || code >= 48 && code <= 57) { // Números 0-9
      return true;
      } else {
      return false;
}
}

function validar(event){
  if (event.target.value.length === 0){
      event.target.focus();
      return 0;
  }
}


function enviarFormulario(){
  $.ajax({
      type: "POST",
      url: "grabar.jsp",
      data: $("form").serialize(),
      success: function(){
          document.getElementById("formulario").reset();
          alert("Registro Grabado")
      }
  })
}
function convertirCantidadALetras() {
  var cantidad = document.getElementById("cantidad").value;
  var unidades = ['', 'UN ', 'DOS ', 'TRES ', 'CUATRO ', 'CINCO ', 'SEIS ', 'SIETE ', 'OCHO ', 'NUEVE ', 'DIEZ ', 'ONCE ', 'DOCE ', 'TRECE ', 'CATORCE ', 'QUINCE ', 'DIECISEIS ', 'DIECISIETE ', 'DIECIOCHO ', 'DIECINUEVE '];
  var decenas = ['', '', 'VEINTE', 'TREINTA ', 'CUARENTA ', 'CINCUENTA ', 'SESENTA ', 'SETENTA ', 'OCHENTA ', 'NOVENTA '];
  var centenas = ['', 'CIENTO ', 'DOSCIENTOS ', 'TRESCIENTOS ', 'CUATROCIENTOS ', 'QUINIENTOS ', 'SEISCIENTOS ', 'SETECIENTOS ', 'OCHOCIENTOS ', 'NOVECIENTOS '];


  function convertirNumeroALetras(num) {
      if ((num = num.toString()).length > 9) return 'overflow';
      var n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
      if (!n) return;
      var str = '';
      str += (n[1] != 0) ? (centenas[Number(n[1])] || decenas[n[1][0]] + unidades[n[1][1]]) + 'MILLONES ' : '';
      str += (n[2] != 0) ? (centenas[Number(n[2])] || decenas[n[2][0]] + unidades[n[2][1]]) + 'MIL ' : '';
      str += (n[3] != 0) ? (centenas[Number(n[3])] || decenas[n[3][0]] + unidades[n[3][1]]) : '';
      str += (n[4] != 0) ? centenas[Number(n[4])] : '';
      str += (n[5] != 0) ? (str != '' ? 'Y ' : '') + (centenas[Number(n[5])] || decenas[n[5][0]] + unidades[n[5][1]]) : '';
      return str;
  }

  var cantidadEnLetras = convertirNumeroALetras(cantidad);
  document.getElementById("cantidadLetras").value = cantidadEnLetras;
}