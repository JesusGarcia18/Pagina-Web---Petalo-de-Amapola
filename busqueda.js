function buscar() {
    // Obtener el término de búsqueda
    var searchTerm = document.getElementById("search").value.trim();

    // Redirigir a la página de resultados con el término de búsqueda como parámetro
    window.location.href = "resultado.html?q=" + encodeURIComponent(searchTerm);

    // Evitar que el formulario se envíe tradicionalmente
    return false;
}

function getSearchTerm() {
    var params = new URLSearchParams(window.location.search);
    return params.get('q');
}

// Función para mostrar los resultados de búsqueda correspondientes al término en la página de resultados
function mostrarResultados(searchTerm) {
    // Obtener todos los elementos ocultos en la página de resultados
    var elementosOcultos = document.querySelectorAll('.resultado_oculto');

    // Iterar sobre cada elemento oculto
    elementosOcultos.forEach(function(elemento) {
        // Verificar si el ID del elemento coincide con el término de búsqueda
        if (elemento.id === searchTerm) {
            // Mostrar el elemento correspondiente
            elemento.style.display = "block";
        } else {
            // Ocultar el elemento si no coincide con el término de búsqueda
            elemento.style.display = "none";
        }
    });
}

// Función para buscar y mostrar los resultados al cargar la página de resultados
window.onload = function() {
    var searchTerm = getSearchTerm(); // Obtener el término de búsqueda de la URL
    if (searchTerm) {
        mostrarResultados(searchTerm); // Mostrar los resultados correspondientes al término de búsqueda
    } else {
        // Manejar el caso en que no se proporciona un término de búsqueda
        console.log("No se proporcionó un término de búsqueda.");
    }
};