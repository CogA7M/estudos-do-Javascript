document.addEventListener("DOMContentLoaded", function() {
    const telefoneInput = document.querySelector('.telefone');
    const geraButton = document.querySelector('.gera');
    const enviaButton = document.querySelector('.envia');
    const txtCopia = document.querySelector('.txtcopia');
    const resultado = document.querySelector('.resultado');
    const mensagem = document.getElementById('mensagem');

    // Desativar os botões inicialmente
    geraButton.disabled = true;
    enviaButton.disabled = true;

    // Verificar a entrada do telefone e ativar/desativar botões
    telefoneInput.addEventListener('input', function() {
        const telefone = telefoneInput.value.replace(/\D/g, '');
        const isValid = telefone.length === 11;
        
        geraButton.disabled = !isValid;
        enviaButton.disabled = !isValid;
        telefoneInput.style.borderColor = isValid ? 'green' : 'red';
    });

    telefoneInput.addEventListener('click', limparMensagem);
    telefoneInput.addEventListener('input', function() {
        mascaraTelefone(this);
    });

    function limparMensagem() {
        mensagem.style.display = 'none';
        resultado.classList.remove('mostrar'); 
        txtCopia.value = ''; 
    }
});

function mascaraTelefone(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    input.value = value;
}

function geraLink() {
    const telefoneInput = document.querySelector('.telefone');
    const telefone = telefoneInput.value.replace(/\D/g, ''); // Remove non-numeric characters
    const isValid = telefone.length === 11;

    if (isValid) {
        const link = `https://wa.me/55${telefone}`;
        const txtCopia = document.querySelector('.txtcopia');
        txtCopia.value = link;
        document.querySelector('.resultado').classList.add('mostrar');
        mensagem.style.display = 'block';
        telefoneInput.style.borderColor = 'green';
    } else {
        telefoneInput.style.borderColor = 'red';
    }
}

function abrirLink() {
    const link = document.querySelector('.txtcopia').value;
    if (link) {
        window.open(link, '_blank');
    }
}

function copiarTexto(input) {
    input.select();
    //  API clipboard 
    navigator.clipboard.writeText(input.value).then(() => {
        mensagem.textContent = 'Link copiado para área de transferência';
        setTimeout(() => {
            mensagem.textContent = 'Clique no link para copiar';
        }, 8000);
    });
}


