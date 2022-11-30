console.log();

function menuFechar(){
    menu_slide.style.display = 'none';
    btn_fechar.style.display = 'none';
    btn_menu.style.display = 'block'
    main.style.display = 'block'

}

function menuAbrir(){
    menu_slide.style.display = 'block';
    btn_fechar.style.display = 'block';
    btn_menu.style.display = 'none'
}

const btn_menu = document.getElementById('btn_menu');
const btn_fechar = document.getElementById('btn_fechar');
const menu_slide = document.getElementsByClassName('menu_slide')[0];
const main = document.getElementsByClassName('main')[0];
console.log(btn_menu);



btn_fechar.addEventListener("click", menuFechar);
btn_menu.addEventListener("click", menuAbrir);


