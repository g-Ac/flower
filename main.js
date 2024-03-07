
onload = () => {
    document.body.classList.remove("container");

    // Esperar 5 segundos após o carregamento da página e então mostrar a mensagem
    setTimeout(() => {
        const messageSection = document.querySelector('.womens-day-message');
        if (messageSection) {
            messageSection.style.opacity = '1';
            messageSection.style.transform = 'translateY(0)';
        }
    }, 5000);
};
