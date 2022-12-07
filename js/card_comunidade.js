const main_page = document.getElementsByClassName('main_comunidade')[0];
const card_footer = document.getElementsByClassName('card_comunidade_footer')

cards = []

for (let i = 0; i < main_page.childElementCount; i++) {
    cards.push(document.getElementById(`card_` + (i+1)))
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
