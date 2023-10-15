const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    location.reload()
    alert("Sua mensagem foi enviada com sucesso! Obrigado!")
})

//Script para a manipulação do formulário na página de contatos