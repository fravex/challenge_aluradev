main_comunidade = document.getElementsByClassName('main_comunidade')[0]

const dados_projeto_local_storage = localStorage.dados_projetos;
dados_projeto_JSON = JSON.parse(dados_projeto_local_storage)

function criaElementos(projeto, index){
    console.log(projeto.like)
    if (projeto.like == true){
        imagem_coracao = 'coracao_comunidade_colorido.svg'
    }
    else{
        imagem_coracao = 'coracao_comunidade.svg'
    }
    card_section = document.createElement('section')
    card_section.setAttribute("id", `card_${index+1}`)
    card_section.innerHTML = `
<div>
    <div class="card">
        <code class="card_code" style="border: ${projeto.cor_borda} 1.5rem solid;" contenteditable="false"
            aria-placeholder="Digite seu código aqui">
${projeto.codigo_projeto}
            </code>
    </div>
</div>
<div class="card_comunidade">
    <h2>${projeto.nome_projeto}</h2>
    <p>${projeto.descricao_projeto}</p>
    <div class="card_comunidade_footer" id="card_comunidade_footer">
        <div class="likes_comentarios">
            <button>
                <img src="/img/balao_comuidade.svg" alt=""><span>9</span>
            </button>
            <button id='like'><img src="/img/${imagem_coracao}" alt=""></img><span>${projeto.quantidade_likes}</span></button>
        </div>
        <div class="perfil">
            <img src="/img/foto_perfil.png" alt="" srcset="" style="width: 1.25rem ;">
            <span>@Harry</span>
        </div>
    </div>
</div>
`
    main_comunidade.appendChild(card_section)

}


dados_projeto_JSON.forEach(criaElementos);



