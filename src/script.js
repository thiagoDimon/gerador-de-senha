const tamanhoSenha = document.getElementById('tamanho-senha');
const senhaGerada = document.getElementById('senha-gerada');
const opcaoNumeral = document.getElementById('opcao-numeral');
const opcaoMaiusculas = document.getElementById('opcao-maiusculas');
const opcaoMinusculas = document.getElementById('opcao-minusculas');
const opcaoSimbolos = document.getElementById('opcao-simbolos');
const btnGerarSenha = document.getElementById('gerar-senha');
const btnCopiarSenha = document.getElementById('copiar-senha');

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const simbolos = ['$', '@', '%', '#', '&', '*', '!', '(', ')', '+', '=', '-'];
const caracteres = Array.from(Array(26)).map((_, i) => i + 97);
const lowerCaseCaracteres = caracteres.map((item) => String.fromCharCode(item));
const upperCaseCaracteres = lowerCaseCaracteres.map((item) => item.toUpperCase());

function setBackgroundColorDark(id) {
    document.getElementById(id).style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
}

function setBackgroundColorWhite(id) {
    document.getElementById(id).style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
}

function isClicked(event) {
    if (event.target.id === 'opcao-maiusculas') {
        if (document.getElementById('opcao-maiusculas').checked) {
            document.getElementById('opcao-maiusculas').checked = false;  
            setBackgroundColorWhite(event.target.id);
        } else {
            document.getElementById('opcao-maiusculas').checked = true;
            setBackgroundColorDark(event.target.id);
        }
    } else if (event.target.id === 'opcao-numeral') {
        if (document.getElementById('opcao-numeral').checked) {
            document.getElementById('opcao-numeral').checked = false;  
            setBackgroundColorWhite(event.target.id);
        } else {
            document.getElementById('opcao-numeral').checked = true;
            setBackgroundColorDark(event.target.id);
        }
    } else if (event.target.id === 'opcao-minusculas') {
        if (document.getElementById('opcao-minusculas').checked) {
            document.getElementById('opcao-minusculas').checked = false;  
            setBackgroundColorWhite(event.target.id);
        } else {
            document.getElementById('opcao-minusculas').checked = true;
            setBackgroundColorDark(event.target.id);
        }
    } else {
        if (document.getElementById('opcao-simbolos').checked) {
            document.getElementById('opcao-simbolos').checked = false;  
            setBackgroundColorWhite(event.target.id);
        } else {
            document.getElementById('opcao-simbolos').checked = true;
            setBackgroundColorDark(event.target.id);
        }
    }
}

opcaoMaiusculas.addEventListener('click', isClicked);
opcaoMinusculas.addEventListener('click', isClicked);
opcaoNumeral.addEventListener('click', isClicked);
opcaoSimbolos.addEventListener('click', isClicked);

function gerarSenha(hasMaiusculas, hasMinusculas, hasNumeral, hasSimbolos) {
    const caracteresSelecionados = [
        ...hasMaiusculas ? upperCaseCaracteres : [],
        ...hasMinusculas ? lowerCaseCaracteres : [],
        ...hasNumeral ? numeros : [],
        ...hasSimbolos ? simbolos : [],
    ]

    if (caracteresSelecionados.length === 0) {
        return window.alert('Por favor, selecione algum caractere!');
    }

    let password = '';

    for (let i = 0; i < tamanhoSenha.value; i++) {
        const randomIndex = Math.floor(Math.random() * caracteresSelecionados.length);
        password += caracteresSelecionados[randomIndex];
    }

    senhaGerada.value = password;
}

btnGerarSenha.addEventListener('click', () => {
    gerarSenha(
        opcaoMaiusculas.checked,
        opcaoMinusculas.checked,
        opcaoNumeral.checked,
        opcaoSimbolos.checked
    );

function copiarSenha() {
    let senhaCopiada = document.getElementById('senha-gerada');
    senhaCopiada.select();
    senhaCopiada.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(senhaCopiada.value);
}

btnCopiarSenha.addEventListener('click', copiarSenha);
})