// Verificar si hay datos almacenados en localStorage al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const categoriaAlmacenada = localStorage.getItem('categoria');
    if (categoriaAlmacenada) {
        mostrarElementos(getElementosPorCategoria(categoriaAlmacenada));
    } else {
        mostrarCategorias();
    }
});

let elementos = [
    { simbolo: "H", nombre: "Hidrógeno", numeroAtomico: 1, masaAtomica: 1.01, grupo: 1, periodo: 1, tipo: "noMetales" },
    { simbolo: "He", nombre: "Helio", numeroAtomico: 2, masaAtomica: 4.00, grupo: 18, periodo: 1, tipo: "noMetales" },
    // Agregar más elementos aquí...

    // Ejemplos de Metales
    { simbolo: "Li", nombre: "Litio", numeroAtomico: 3, masaAtomica: 6.94, grupo: 1, periodo: 2, tipo: "metales" },
    { simbolo: "Be", nombre: "Berilio", numeroAtomico: 4, masaAtomica: 9.01, grupo: 2, periodo: 2, tipo: "metales"  },
    { simbolo: "Na", nombre: "Sodio", numeroAtomico: 11, masaAtomica: 22.99, grupo: 1, periodo: 3, tipo: "metales" },
    { simbolo: "Al", nombre: "Aluminio", numeroAtomico: 13, masaAtomica: 26.98, grupo: 13, periodo: 3, tipo: "metales"  },
    { simbolo: "K", nombre: "Potásio", numeroAtomico: 19, masaAtomica: 39.10, grupo: 1, periodo: 4, tipo: "metales" },
    { simbolo: "Ti", nombre: "Titanio", numeroAtomico: 22, masaAtomica: 47.87, grupo: 4, periodo: 4, tipo: "metales"  },
    { simbolo: "Ir", nombre: "Iridio", numeroAtomico: 77, masaAtomica: 192.2, grupo: 9, periodo: 6, tipo: "metales"  },
    // Ejemplos de Metaloides
    { simbolo: "B", nombre: "Boro", numeroAtomico: 5, masaAtomica: 10.81, grupo: 13, periodo: 2, tipo: "metaloides" },
    { simbolo: "Si", nombre: "Silicio", numeroAtomico: 14, masaAtomica: 28.09, grupo: 14, periodo: 3, tipo: "metaloides" },
    { simbolo: "Ge", nombre: "Germanio", numeroAtomico: 32, masaAtomica: 72.63, grupo: 14, periodo: 4, tipo: "metaloides" },
    { simbolo: "As", nombre: "Arsénico", numeroAtomico: 33, masaAtomica: 74.92, grupo: 15, periodo: 4, tipo: "metaloides" },
    { simbolo: "Sb", nombre: "Antimonio", numeroAtomico: 51, masaAtomica: 121.8, grupo: 15, periodo: 5, tipo: "metaloides" },
    { simbolo: "Te", nombre: "Telunio", numeroAtomico: 51, masaAtomica: 127.6, grupo: 16, periodo: 5, tipo: "metaloides" },
    { simbolo: "At", nombre: "Astato", numeroAtomico: 85, masaAtomica: 210, grupo: 17, periodo: 6, tipo: "metaloides" },
    

    // Ejemplos de No Metales
    { simbolo: "C", nombre: "Carbono", numeroAtomico: 6, masaAtomica: 12.01, grupo: 14, periodo: 2, tipo: "noMetales" },
    { simbolo: "O", nombre: "Oxígeno", numeroAtomico: 8, masaAtomica: 15.99, grupo: 16, periodo: 2, tipo: "noMetales" },
    { simbolo: "F", nombre: "Flúor", numeroAtomico: 9, masaAtomica: 18.99, grupo: 17, periodo: 2, tipo: "noMetales" },
    { simbolo: "Ne", nombre: "Neón", numeroAtomico: 10, masaAtomica: 20.18, grupo: 18, periodo: 2, tipo: "noMetales" },
    { simbolo: "Xe", nombre: "Xenón", numeroAtomico: 54, masaAtomica: 131.3, grupo: 18, periodo: 5, tipo: "noMetales" },
    { simbolo: "Br", nombre: "Bromo", numeroAtomico: 35, masaAtomica: 79.90, grupo: 17, periodo: 4, tipo: "noMetales" },
    // ... Agregar más elementos aquí ...
];

function mostrarTablaPeriodica() {
    const tablaPeriodica = document.getElementById("tablaPeriodica");
    tablaPeriodica.innerHTML = "";

    elementos.forEach(elemento => {
        const celda = document.createElement("div");
        celda.classList.add("celda", elemento.tipo);
        celda.textContent = `${elemento.simbolo} - ${elemento.nombre}`;

        tablaPeriodica.appendChild(celda);
    });
}


function filtrarPorTipo() {
    const tipoSeleccionado = document.getElementById("tipoElemento").value;

    if (tipoSeleccionado === "todos") {
        mostrarTablaPeriodica();
    } else {
        const elementosFiltrados = elementos.filter(elemento => elemento.tipo === tipoSeleccionado);
        mostrarElementosFiltrados(elementosFiltrados);
    }
}



function mostrarElementosFiltrados(elementosFiltrados) {
    const tablaPeriodica = document.getElementById("tablaPeriodica");
    tablaPeriodica.innerHTML = "";

    elementosFiltrados.forEach(elemento => {
        const celda = document.createElement("div");
        celda.classList.add("celda", elemento.tipo);
        celda.textContent = `${elemento.simbolo}\n${elemento.nombre}\nNúmero Atómico: ${elemento.numeroAtomico}\nMasa Atómica: ${elemento.masaAtomica}\nGrupo: ${elemento.grupo}\nPeríodo: ${elemento.periodo}`;

        tablaPeriodica.appendChild(celda);
    });
}

mostrarTablaPeriodica();
