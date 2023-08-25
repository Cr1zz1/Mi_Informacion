document.addEventListener("DOMContentLoaded", function() {
    var texto = document.querySelector(".texto");
    window.addEventListener("scroll", function() {
        var scroll = window.scrollY || window.pageYOffset;

        if (scroll >= 300) {
            texto.classList.remove("oculto");
        } else {
            texto.classList.add("oculto");
        }
    });
});
