document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener('click', function (event) {
        // Verifica se o clique ocorreu no lado direito da página
        if (event.clientX > window.innerWidth / 2) {
            // Rola suavemente para a próxima seção
            document.getElementById('about-section').scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});