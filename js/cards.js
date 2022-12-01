function alteraCorCard(){
    card_projeto.style.border = "#a218ab 1.5rem solid";
}

const card_projeto = document.getElementsByClassName('main_textarea')[0];
const input_cor = document.getElementsByClassName('input_cor')[0];

input_cor.addEventListener('change', (e)=>{
    card_projeto.style.border = `${e.target.value} 1.5rem solid`;
    console.log(e.target.value)
});