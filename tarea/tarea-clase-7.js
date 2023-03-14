/*
 * Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
 * Escribir pruebas para esas funciones.
 *
 * Adicional: Escribir pruebas para las funciones de tareas anteriores.
 *
 * */

const $form = document.querySelector(`[name=formulario]`);
const $button = $form.submit;

$button.onclick = function (event) {
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form[`descripcion-regalo`].value;

  console.log(validarCiudad(ciudad));
  console.log(validarDescripcionRegalo(descripcionRegalo));

  event.preventDefault();
};

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "Debes seleccionar una ciudad";
  }

  return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length >= 100) {
    return "El campo descripcion es muy largo";
  }
  if (descripcionRegalo.length === 0) {
    return "El campo descripcion no puede estar vacio";
  }

  return "";
}
