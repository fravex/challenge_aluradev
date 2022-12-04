const card_projeto = document.getElementsByClassName('card_code')[0];
const input_cor = document.getElementsByClassName('input_cor')[0];

input_cor.addEventListener('click', (e)=>{
    card_projeto.style.border = `${e.target.value} 1.5rem solid`;
    console.log(e.target.value)
});


card_projeto.addEventListener('click', ()=>{
    card_code.textContent = ''
})

