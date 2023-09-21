// Definir un objeto con la información de los elementos químicos
let elementos = {
  Metales: [
      { simbolo: "H", nombre: "Hidrógeno", numeroAtomico: 1, masaAtomica: 1.01, grupo: 1, periodo: 1 },
      { simbolo: "He", nombre: "Helio", numeroAtomico: 2, masaAtomica: 4.00, grupo: 18, periodo: 1 },
      { simbolo: "Li", nombre: "Litio", numeroAtomico: 3, masaAtomica: 6.94, grupo: 1, periodo: 2 },
      { simbolo: "Be", nombre: "Berilio", numeroAtomico: 4, masaAtomica: 9.01, grupo: 2, periodo: 2 },
      { simbolo: "B", nombre: "Boro", numeroAtomico: 5, masaAtomica: 10.81, grupo: 13, periodo: 2 },
      { simbolo: "C", nombre: "Carbono", numeroAtomico: 6, masaAtomica: 12.01, grupo: 14, periodo: 2 },
      { simbolo: "N", nombre: "Nitrógeno", numeroAtomico: 7, masaAtomica: 14.01, grupo: 15, periodo: 2 },
      // Continuar con más elementos...
  ],
  NoMetales: [
      { simbolo: "O", nombre: "Oxígeno", numeroAtomico: 8, masaAtomica: 15.99, grupo: 16, periodo: 2 },
      { simbolo: "F", nombre: "Flúor", numeroAtomico: 9, masaAtomica: 18.99, grupo: 17, periodo: 2 },
      { simbolo: "Ne", nombre: "Neón", numeroAtomico: 10, masaAtomica: 20.18, grupo: 18, periodo: 2 },
      { simbolo: "Na", nombre: "Sodio", numeroAtomico: 11, masaAtomica: 22.99, grupo: 1, periodo: 3 },
      { simbolo: "Mg", nombre: "Magnesio", numeroAtomico: 12, masaAtomica: 24.31, grupo: 2, periodo: 3 },
      { simbolo: "Al", nombre: "Aluminio", numeroAtomico: 13, masaAtomica: 26.98, grupo: 13, periodo: 3 },
      { simbolo: "Si", nombre: "Silicio", numeroAtomico: 14, masaAtomica: 28.09, grupo: 14, periodo: 3 },
      // Continuar con más elementos...
  ],
};

// Saludar al usuario
alert("¡Bienvenido al Consultor de Elementos de la Tabla Periódica!");

// Función para mostrar categorías y filtrar por grupo o período
function mostrarCategorias() {
  let opcion = parseInt(prompt("Elija una categoría:\n1-Metales\n2-No Metales\n3-Filtrar por grupo o período"));

  if (opcion === 1) {
      mostrarElementos(elementos.Metales);
  } else if (opcion === 2) {
      mostrarElementos(elementos.NoMetales);
  } else if (opcion === 3) {
      filtrarPorGrupoOPeriodo();
  } else {
      alert("Opción no válida. Recarga la página para intentar de nuevo.");
  }
}


// Función para filtrar por grupo o período
function filtrarPorGrupoOPeriodo() {
  let filtro = parseInt(prompt("Recuerde, nuestra librería es acotadaElija una opción:\n1-Filtrar por grupo\n2-Filtrar por período"));
  let valorFiltro = parseInt(prompt("Ingrese el número de grupo o período a filtrar:"));

  let elementosFiltrados = [];

  for (let categoria in elementos) {
      elementosFiltrados = elementosFiltrados.concat(elementos[categoria].filter(elemento => elemento.grupo === valorFiltro || elemento.periodo === valorFiltro));
  }

  if (elementosFiltrados.length === 0) {
      alert("No se encontraron elementos que correspondan al grupo o período seleccionado.");
      mostrarCategorias(); // Devolver al prompt de mostrar categorías
  } else {
      mostrarElementos(elementosFiltrados);
  }
}


// Función para mostrar elementos y obtener detalles
function mostrarElementos(elementosArray) {
  let lista = "Lista de Elementos:\n";

  for (let i = 0; i < elementosArray.length; i++) {
      let elemento = elementosArray[i];
      lista += `${i + 1}. ${elemento.nombre}\n`;
  }

  let seleccion = parseInt(prompt(lista + "Ingrese el número del elemento deseado:"));

  if (seleccion >= 1 && seleccion <= elementosArray.length) {
      let elementoElegido = elementosArray[seleccion - 1];
      alert(`Símbolo: ${elementoElegido.simbolo}\nNombre: ${elementoElegido.nombre}\nNúmero Atómico: ${elementoElegido.numeroAtomico}\nMasa Atómica: ${elementoElegido.masaAtomica}`);

      let volver = confirm("¿Desea volver a consultar?");

      if (volver) {
          mostrarCategorias(); // Volver a la selección de categorías
      } else {
          alert("Gracias por usar el Consultor de Elementos. ¡Hasta luego!");
      }
  } else {
      alert("Selección no válida. Recarga la página para intentar de nuevo.");
  }
}

// Iniciar la aplicación mostrando las categorías
mostrarCategorias();
