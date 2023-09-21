// Definir un objeto con la información de los elementos químicos
let elementos = {
    metales: [
      { simbolo: "Fe", nombre: "Hierro", numeroAtomico: 26, masaAtomica: 55.84 },
      { simbolo: "Cu", nombre: "Cobre", numeroAtomico: 29, masaAtomica: 63.55 },
      { simbolo: "Au", nombre: "Oro", numeroAtomico: 79, masaAtomica: 196.97 },
      { simbolo: "Ag", nombre: "Plata", numeroAtomico: 47, masaAtomica: 107.87 },
      { simbolo: "Zn", nombre: "Zinc", numeroAtomico: 30, masaAtomica: 65.38 },
      { simbolo: "Ni", nombre: "Níquel", numeroAtomico: 28, masaAtomica: 58.69 },
      { simbolo: "Pt", nombre: "Platino", numeroAtomico: 78, masaAtomica: 195.08 },
      // Agregar más elementos aquí
    ],
    metaloides: [
      { simbolo: "Si", nombre: "Silicio", numeroAtomico: 14, masaAtomica: 28.09 },
      { simbolo: "Ge", nombre: "Germanio", numeroAtomico: 32, masaAtomica: 72.63 },
      { simbolo: "As", nombre: "Arsénico", numeroAtomico: 33, masaAtomica: 74.92 },
      { simbolo: "Sb", nombre: "Antimonio", numeroAtomico: 51, masaAtomica: 121.76 },
      { simbolo: "Te", nombre: "Telurio", numeroAtomico: 52, masaAtomica: 127.60 },
      { simbolo: "Po", nombre: "Polonio", numeroAtomico: 84, masaAtomica: 209.00 },
      { simbolo: "Bi", nombre: "Bismuto", numeroAtomico: 83, masaAtomica: 208.98 },
      // Agregar más elementos aquí
    ],
    noMetales: [
      { simbolo: "H", nombre: "Hidrógeno", numeroAtomico: 1, masaAtomica: 1.01 },
      { simbolo: "O", nombre: "Oxígeno", numeroAtomico: 8, masaAtomica: 15.99 },
      { simbolo: "N", nombre: "Nitrógeno", numeroAtomico: 7, masaAtomica: 14.01 },
      { simbolo: "C", nombre: "Carbono", numeroAtomico: 6, masaAtomica: 12.01 },
      { simbolo: "F", nombre: "Flúor", numeroAtomico: 9, masaAtomica: 18.99 },
      { simbolo: "P", nombre: "Fósforo", numeroAtomico: 15, masaAtomica: 30.97 },
      { simbolo: "S", nombre: "Azufre", numeroAtomico: 16, masaAtomica: 32.07 },
      // Agregar más elementos aquí
    ],
  };
  
  // Saludar al usuario
  alert("¡Bienvenido al Consultor de Elementos de la Tabla Periódica!");
  
  // Función para mostrar categorías
  function mostrarCategorias() {
    let opcion = parseInt(prompt("Elija una categoría:\n1-Metales\n2-Metaloides\n3-No Metales"));
  
    // Validar la opción elegida
    if (opcion === 1) {
      mostrarElementos(elementos.metales);
    } else if (opcion === 2) {
      mostrarElementos(elementos.metaloides);
    } else if (opcion === 3) {
      mostrarElementos(elementos.noMetales);
    } else {
      alert("Opción no válida. Recarga la página para intentar de nuevo.");
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
  