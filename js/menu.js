console.log();

function menuFechar() {
    if (barra_busca.style.display == 'block'){
        barra_busca.style.display = 'none';
        btn_menu.style.display = 'block';
        btn_fechar.style.display = 'none';
        btn_busca.style.display = 'block';
        imagem_logo.style.display = 'block';
    }
    else {
        menu_slide.style.display = 'none';
        btn_fechar.style.display = 'none';
        btn_menu.style.display = 'block'
        main.style.display = 'block'
    }
}

function menuAbrir() {
    menu_slide.style.display = 'block';
    btn_fechar.style.display = 'block';
    btn_menu.style.display = 'none'
}

function exibeBusca() {
    btn_fechar.style.display = 'block';
    btn_menu.style.display = 'none';
    imagem_logo.style.display = 'none';
    btn_busca.style.display = 'none';
    barra_busca.style.display = 'block';
    menu_slide.style.display = 'none';
}

const btn_menu = document.getElementById('btn_menu');
const btn_fechar = document.getElementById('btn_fechar');
const btn_busca = document.getElementById('btn_busca');
const menu_slide = document.getElementsByClassName('menu_slide')[0];
const main = document.getElementsByClassName('main')[0];
const imagem_logo = document.getElementsByClassName('nav_img_logo')[0];
const barra_busca = document.getElementsByClassName('nav_busca')[0];



btn_fechar.addEventListener("click", menuFechar);
btn_menu.addEventListener("click", menuAbrir);
btn_busca.addEventListener("click", exibeBusca);


