// creamos variables gloales para guardar las direcciones de los elementos
// de lo que el ususario le dado click
var direccion_imagen;
var modelo_moto;
var color_moto;
var espejos_moto;
var parabrisa_moto;

/**
 * Abre la página de detalles de una moto y guarda los valores en sessionStorage.
src_imagen - La URL de la imagen de la moto.
modelo - El modelo de la moto.
color - El color de la moto.
espejos - El tipo de espejos de la moto.
parabrisas - El tipo de parabrisas de la moto.
 */
function abrir_detalles_moto(src_imagen,modelo,color,espejos,parabrisas) {
    // Guarda la URL de la imagen en sessionStorage
    direccion_imagen = src_imagen;
    sessionStorage.setItem("urlImagenSeleccionada", src_imagen);

    window.location.href = "detalles_moto.html";
    (function () {
         // Codifica los valores para pasarlos como parámetros en la URL
    modelo_moto = encodeURIComponent(modelo);
    color_moto = encodeURIComponent(color);
    espejos_moto = encodeURIComponent(espejos);
    parabrisa_moto = encodeURIComponent(parabrisas);

    // Guarda los valores en sessionStorage
    sessionStorage.setItem('modeloSeleccionado', modelo_moto);
    sessionStorage.setItem('colorSeleccionado', color_moto);
    sessionStorage.setItem('espejosSeleccionado', espejos_moto);
    sessionStorage.setItem('parabrisasSeleccionado', parabrisa_moto);

    // Redirige a la nueva página
    window.location.href = "detalles_moto.html";
    })();
}

document.addEventListener('DOMContentLoaded', function() {
    // Recupera la URL de la imagen almacenada en sessionStorage
    var urlImagen = sessionStorage.getItem('urlImagenSeleccionada');

    // Crea un elemento de imagen y asigna la URL
    var imagen = document.createElement('img');
    imagen.src = urlImagen;
    imagen.alt = 'Imagen seleccionada';
    imagen.width = 500;
    imagen.style.margin = '10px';
    imagen.style.borderRadius = '5px';

    // Agrega la imagen al contenedor en el DOM
    document.getElementById('contenedorImagen').appendChild(imagen);

    // Recupera los valores almacenados en sessionStorage
    var modelo = decodeURIComponent(sessionStorage.getItem('modeloSeleccionado'));
    var color = decodeURIComponent(sessionStorage.getItem('colorSeleccionado'));
    var espejos = decodeURIComponent(sessionStorage.getItem('espejosSeleccionado'));
    /**
     * Variable que almacena el parabrisas seleccionado.
     */
    var parabrisas = decodeURIComponent(sessionStorage.getItem('parabrisasSeleccionado'));

    // Muestra los valores en los elementos HTML
    document.getElementById('modelo').textContent = modelo;
    document.getElementById('color').textContent = color;
    document.getElementById('espejos').textContent = espejos;
    document.getElementById('parabrisas').textContent = parabrisas;
});
document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    const agregarOpcionBtn = document.getElementById('agregar_al_carrito');
    const eliminarDelCarritoBtn = document.getElementById('eliminar_del_carrito');
    const productosSeleccionados = document.getElementById('productos_seleccionados');

    // Event listener para el botón Agregar al carrito
    agregarOpcionBtn.addEventListener('click', function() {
        // Obtener el modelo y el color de la moto desde sessionStorage
        const modelo = decodeURIComponent(sessionStorage.getItem('modeloSeleccionado'));
        const color = decodeURIComponent(sessionStorage.getItem('colorSeleccionado'));

        // Verificar si el producto ya está en el carrito
        const productoEnCarrito = `${modelo} - ${color}`;
        if (!productoYaEnCarrito(productosSeleccionados, productoEnCarrito)) {
            // Crear un nuevo elemento de opción para el select
            const nuevaOpcion = document.createElement('option');
            nuevaOpcion.value = productoEnCarrito;
            nuevaOpcion.text = productoEnCarrito;

            // Agregar la nueva opción al select
            productosSeleccionados.add(nuevaOpcion);

            // Almacenar la lista actualizada en sessionStorage
            actualizarCarrito(productosSeleccionados);
        } else {
            alert('Este producto ya está en el carrito.');
        }
    });

    // Event listener para el botón Eliminar del carrito
    eliminarDelCarritoBtn.addEventListener('click', function() {
        // Eliminar la opción seleccionada del select
        const indiceSeleccionado = productosSeleccionados.selectedIndex;
        if (indiceSeleccionado !== -1) {
            productosSeleccionados.remove(indiceSeleccionado);

            // Almacenar la lista actualizada en sessionStorage
            actualizarCarrito(productosSeleccionados);
        }
    });

    // Recuperar la lista del carrito al cargar la página
    cargarCarrito(productosSeleccionados);
});

// Función para verificar si un producto ya está en el carrito
function productoYaEnCarrito(selectElement, producto) {
    return Array.from(selectElement.options).some(option => option.value === producto);
}


// Función para actualizar la lista del carrito en sessionStorage
function actualizarCarrito(selectElement) {
    const productosEnCarrito = Array.from(selectElement.options).map(option => option.value);
    sessionStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
}

// Función para cargar la lista del carrito desde sessionStorage
function cargarCarrito(selectElement) {
    const productosEnCarrito = JSON.parse(sessionStorage.getItem('productosEnCarrito')) || [];
    
    // Agregar cada producto almacenado en sessionStorage al select
    productosEnCarrito.forEach(producto => {
        const nuevaOpcion = document.createElement('option');
        nuevaOpcion.value = producto;
        nuevaOpcion.text = producto;
        selectElement.add(nuevaOpcion);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const irAPagarBtn = document.getElementById('pagarAhora');

    irAPagarBtn.addEventListener('click', function() {
        
        // Redirigir a la página de pago
        window.location.href = "pagar produccro.html";
    });
});

function compra_cancelada() {
    // Obtener los valores de los campos
    var direccion = document.getElementById("direccion").value;
    var codigoPostal = document.getElementById("codigoPostal").value;
    var tarjeta = document.getElementById("tarjeta").value;

    // Verificar si los campos están llenos
    if (direccion && codigoPostal && tarjeta) {
        // Mostrar la alerta de compra cancelada solo si los campos están llenos
        alert("Compra cancelada");
    } 
}
