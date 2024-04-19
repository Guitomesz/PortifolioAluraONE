document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.formcontato__form');
    const submitButton = document.querySelector('.formcontato__botao');

    function validaNome() {
        const nomeInput = document.getElementById('nome');
        const nomeValue = nomeInput.value.trim();

        if (nomeValue === '') {
            alert('Por favor, preencha corretamente o campo de nome. \nDica: O campo de nome não pode ficar vazio.');
            return false;
        } else if (nomeValue.length > 50) {
            alert('Por favor, preencha corretamente o campo de nome. \nDica: São necessários menos de 50 caracteres.');
            return false;
        } else if (nomeValue.length < 3) {
            alert('Por favor, preencha corretamente o campo de nome. \nDica: São necessários ao menos 3 caracteres.');
            return false;
        } else if (nomeValue.match(/[^a-zA-Z\s]/)) {
            alert('Por favor, preencha corretamente o campo de nome. \nDica: O campo de nome não pode conter números ou caracteres especiais.');
            return false;
        }
        return true;
    }

    function validaEmail() {
        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === '') {
            alert('Por favor, preencha corretamente o campo de email. \nDica: O campo de email não pode ficar vazio.');
            return false;
        } else if (!emailRegex.test(emailValue)) {
            alert('Por favor, preencha corretamente o campo de email. \nDica: O email deve ser válido, seguindo o exemplo: "usuario@usuario.com".');
            return false;
        }
        return true;

    }

    function validaAssunto() {
        const assuntoInput = document.getElementById('assunto');
        const assuntoValue = assuntoInput.value.trim();

        if (assuntoValue === '') {
            alert('Por favor, preencha corretamente o campo de assunto. \nDica: O campo de assunto não pode ficar vazio.');
            return false;
        } else if (assuntoValue.length > 50) {
            alert('Por favor, preencha corretamente o campo de assunto. \nDica: São necessários menos de 50 caracteres.')
            return false;
        }
        return true;

    };

    function validaMensagem() {
        const mensagemInput = document.getElementById('mensagem');
        const mensagemValue = mensagemInput.value.trim();

        if (mensagemValue === '') {
            alert('Por favor, preencha corretamente o campo de mensagem. \nDica: O campo de mensagem não pode ficar vazio.');
            return false;
        } else if (mensagemValue.length > 300) {
            alert('Por favor, preencha corretamente o campo de mensagem. \nDica: São necessários menos de 300 caracteres.');
            return false;
        }
        return true;

    }

    function validaForm() {
        if (!validaNome() || !validaEmail() || !validaAssunto() || !validaMensagem()) {
            alert('Por favor, preencha corretamente o formulário. \nDica: Todos os campos são obrigatórios.')
            return false;
        } else {
            alert('Formulário preenchido corretamente! Enviando...');
            return true;
        }
    }

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        validaForm();
    });
});

