// Verificar si hay datos almacenados en localStorage al cargar la página
/*document.addEventListener('DOMContentLoaded', () => {
    const categoriaAlmacenada = localStorage.getItem('categoria')
    if (categoriaAlmacenada) {
        mostrarElementos(getElementosPorCategoria(categoriaAlmacenada))
    } else {
        mostrarCategorias()
    }

})  */

let elementos = [
 
    // Ejemplos de Metales
    { simbolo: "Fe", nombre: "Hierro", numeroAtomico: 26, masaAtomica: 55.84, grupo: 8, periodo: 4, tipo: "metales" },
    { simbolo: "Al", nombre: "Aluminio", numeroAtomico: 13, masaAtomica: 26.98, grupo: 13, periodo: 3, tipo: "metales" },
    { simbolo: "Cu", nombre: "Cobre", numeroAtomico: 29, masaAtomica: 63.55, grupo: 11, periodo: 4, tipo: "metales" },
    
    // Ejemplos de No Metales
    { simbolo: "O", nombre: "Oxígeno", numeroAtomico: 8, masaAtomica: 15.99, grupo: 16, periodo: 2, tipo: "noMetales" },
    { simbolo: "F", nombre: "Flúor", numeroAtomico: 9, masaAtomica: 18.99, grupo: 17, periodo: 2, tipo: "noMetales" },
    { simbolo: "N", nombre: "Nitrógeno", numeroAtomico: 7, masaAtomica: 14.01, grupo: 15, periodo: 2, tipo: "noMetales" },
   
    // Ejemplos de Metaloides
    { simbolo: "B", nombre: "Boro", numeroAtomico: 5, masaAtomica: 10.81, grupo: 13, periodo: 2, tipo: "metaloides" },
    { simbolo: "Si", nombre: "Silicio", numeroAtomico: 14, masaAtomica: 28.09, grupo: 14, periodo: 3, tipo: "metaloides" },
    { simbolo: "Sb", nombre: "Antimonio", numeroAtomico: 51, masaAtomica: 121.8, grupo: 15, periodo: 5, tipo: "metaloides" },
    // ... Agregar más elementos aquí ...
];

function mostrarTablaPeriodica() {
    const tablaPeriodica = document.getElementById("tablaPeriodica")
    tablaPeriodica.innerHTML = "";

    elementos.forEach(elemento => {
        let celda = document.createElement("div")
        celda.classList.add("celda", elemento.tipo)
        celda.innerHTML = `<p>${elemento.simbolo}</p> - <p>${elemento.nombre}</p>`

        tablaPeriodica.appendChild(celda)
    });
}


function filtrarPorTipo() {
    const tipoSeleccionado = document.getElementById("tipoElemento").value

    if (tipoSeleccionado === "todos") {
        mostrarTablaPeriodica()
    } else {
        const elementosFiltrados = elementos.filter(elemento => elemento.tipo === tipoSeleccionado)
        mostrarElementosFiltrados(elementosFiltrados)
    }
}



function mostrarElementosFiltrados(elementosFiltrados) {
    const tablaPeriodica = document.getElementById("tablaPeriodica")
    tablaPeriodica.innerHTML = "";

    elementosFiltrados.forEach(elemento => {
        let celda = document.createElement("div");
        celda.classList.add("celdaFiltrada", elemento.tipo);
        celda.innerHTML = `<p>${elemento.simbolo} - ${elemento.nombre}</p><p>Número Atómico:${elemento.numeroAtomico}</p><p>Masa Atómica:${elemento.masaAtomica}</p><p>Grupo: ${elemento.grupo}</p><p>Período: ${elemento.periodo}</p>`
        

        tablaPeriodica.appendChild(celda);
    });
}

let carrito = document.getElementById("carrito");

function agregarAlCarrito(elemento) {
    // Verificar si el elemento ya está en el carrito
    if (!estaEnCarrito(elemento)) {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = `${elemento.simbolo} - ${elemento.nombre}`;
        carrito.appendChild(nuevoElemento);
    }
}

function estaEnCarrito(elemento) {
    // Verificar si el elemento ya está en el carrito
    const elementosEnCarrito = carrito.querySelectorAll("li");
    for (let i = 0; i < elementosEnCarrito.length; i++) {
        const simboloEnCarrito = elementosEnCarrito[i].textContent.split(" - ")[0];
        if (simboloEnCarrito === elemento.simbolo) {
            alert("¡Este elemento ya está en el carrito!");
            return true;
        }
    }
    return false;
}

function mostrarCarrito() {
    const modal = document.getElementById("modalCarrito");
    const contenidoCarrito = document.getElementById("contenidoCarrito");

    // Limpiar el contenido anterior del modal
    contenidoCarrito.innerHTML = "";

    // Obtener los elementos en el carrito
    const elementosEnCarrito = carrito.querySelectorAll("li");

    // Crear nuevos elementos en el modal para cada elemento en el carrito
    elementosEnCarrito.forEach(elementoEnCarrito => {
        const nuevoElemento = document.createElement("div");
        nuevoElemento.textContent = elementoEnCarrito.textContent;
        contenidoCarrito.appendChild(nuevoElemento);
    });

    // Mostrar el modal
    modal.style.display = "block";
}

// Evento para mostrar el carrito al hacer clic en un botón (puedes agregar este botón donde desees)
document.getElementById("mostrarCarritoBtn").addEventListener("click", mostrarCarrito);

mostrarTablaPeriodica();
