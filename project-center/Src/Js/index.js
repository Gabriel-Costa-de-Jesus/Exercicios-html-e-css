document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = window.location.pathname.split("/").pop(); // Obtém o nome do arquivo da URL
    const menuItems = document.querySelectorAll('#botoes-navegacao a'); // Seleciona todos os links de navegação

    menuItems.forEach(item => {
        // Remove a classe active de todos os itens
        item.classList.remove('active');

        // Adiciona a classe active ao item que corresponde à página atual
        if(item.getAttribute("href") === currentLocation) {
            item.classList.add('active');
        }
    });
});
