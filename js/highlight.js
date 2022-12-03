const btn_visualiza_highlight = document.getElementById('btn_visualiza_highlight');
const input_linguagem = document.getElementById('linguagem');
const card_code = document.getElementsByClassName('card_code')[0]

btn_visualiza_highlight.addEventListener('click', (e)=>{
    e.preventDefault();
    classes_card_code = card_code.className;
    pattern = /language\-\S+/g;
    resultado = classes_card_code.match(pattern);
    linguagem = input_linguagem.value;
    if (resultado != null){
        resultado.forEach(elemento =>{
            card_code.classList.remove(elemento);
        })
    }
    console.log(resultado);
    card_code.classList.add(`language-${linguagem}`);
    hljs.highlightElement(document.getElementsByClassName('card_code')[0]);
})