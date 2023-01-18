function probarValidaciones() {
  console.assert(validarCiudad("")) === "Debes seleccionar una ciudad",
    "Validar ciudad no valido que la ciudad no sea vacio";

  console.assert(validarDescripcionRegalo("")) ===
    "Debes escribir que regalo queres recibir",
    "Validar Descripcion Regalo no valido que la descripcion no sea vacio";
}
