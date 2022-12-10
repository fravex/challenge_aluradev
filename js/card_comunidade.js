const main_page = document.getElementsByClassName('main_comunidade')[0];
const card_footer = document.querySelectorAll('#card_comunidade_footer')

cards = []

for (let i = 0; i < main_page.childElementCount; i++) {
    cards.push(document.getElementById(`card_` + (i + 1)))
}


for(let i = 0; i <main_page.childElementCount; i++){

    cards[i].addEventListener('mouseover', ()=>{

        card_footer[i].style.display = 'flex';


    })
}


for(let i = 0; i <main_page.childElementCount; i++){

    cards[i].addEventListener('mouseout', ()=>{

        card_footer[i].style.display = 'none';
    })

}


// DAR LIKE

function darLike(botao_dar_like, index) {


    botao_dar_like.addEventListener('click', ()=>{
    
        localStorageJSON = JSON.parse(localStorage.dados_projetos)


        if(localStorageJSON[index].like == false){

            img_likes = botao_dar_like.childNodes[0]
            quantidade_likes = parseInt(botao_dar_like.childNodes[1].textContent) + 1
            localStorageJSON[index].like = true
            localStorageJSON[index].quantidade_likes += 1
            botao_dar_like.innerHTML = `<img src="/img/coracao_comunidade_colorido.svg" alt=""></img><span>${quantidade_likes}</span>`

            localStorage.dados_projetos = JSON.stringify(localStorageJSON)
        }
        else{

            img_likes = botao_dar_like.childNodes[0]
            quantidade_likes = parseInt(botao_dar_like.childNodes[1].textContent) - 1
            localStorageJSON[index].like = false
            localStorageJSON[index].quantidade_likes -= 1
            botao_dar_like.innerHTML = `<img src="/img/coracao_comunidade.svg" alt=""></img><span>${quantidade_likes}</span>`
            console.log('diminui')

            localStorage.dados_projetos = JSON.stringify(localStorageJSON)
        }


    })
}


btn_like = document.querySelectorAll('#like')

btn_like.forEach(darLike);

