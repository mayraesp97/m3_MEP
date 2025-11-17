$(document).ready(function () {

    // Índice actual de la imagen mostrada en el modal
    let currentIndex = 0;

    // Arreglo de URLs de imágenes grandes (placeholders)
    let images = [
        "https://picsum.photos/id/1015/900/600",
        "https://picsum.photos/id/1016/900/600",
        "https://picsum.photos/id/1018/900/600",
        "https://picsum.photos/id/1020/900/600",
        "https://picsum.photos/id/1024/900/600",
        "https://picsum.photos/id/1027/900/600",
        "https://picsum.photos/id/1031/900/600",
        "https://picsum.photos/id/1033/900/600",
        "https://picsum.photos/id/1035/900/600"
    ];

    // Función para actualizar la imagen del modal con efecto
    function mostrarImagen(index) {
        $("#modalImg").fadeOut(150, function () {
            $(this).attr("src", images[index]).fadeIn(150);
        });
    }

    // Al hacer clic en una miniatura
    $(".thumb").click(function () {
        currentIndex = Number($(this).data("index")); // leemos el índice desde data-index
        $("#modalImg").attr("src", images[currentIndex]);

        // Mostrar modal con efecto
        $("#modal").fadeIn(300).css("display", "flex");
    });

    // Botón siguiente
    $("#nextBtn").click(function (event) {
        event.stopPropagation(); // evita que se dispare el click del fondo
        currentIndex = (currentIndex + 1) % images.length;
        mostrarImagen(currentIndex);
    });

    // Botón anterior
    $("#prevBtn").click(function (event) {
        event.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        mostrarImagen(currentIndex);
    });

    // Cerrar modal al hacer clic en X o en el fondo oscuro
    $("#closeBtn, #modal").click(function (e) {
        // solo cerramos si se clickea el fondo (#modal) o el botón X
        if (e.target.id === "modal" || e.target.id === "closeBtn") {
            $("#modal").fadeOut(300);
        }
    });

});
