document.getElementById('copyButton').addEventListener('click', function() {
    // Selecciona el campo de texto
    const emailField = document.getElementById('email');
    emailField.select();
    emailField.setSelectionRange(0, 99999); // Para móviles

    // Copia el texto dentro del campo
    document.execCommand('copy');

    // Muestra un mensaje de éxito
    const copiedMessage = document.getElementById('copiedMessage');
    copiedMessage.style.display = 'block';

    // Oculta el mensaje después de 2 segundos
    setTimeout(function() {
        copiedMessage.style.display = 'none';
    }, 2000);
});
