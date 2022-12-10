const formulario_codigo = document.getElementById('formulario_projeto')
const botao_salvar_projeto = document.getElementById('salvar_projeto')

const codigo_projeto = document.getElementById('codigo_projeto');
const nome_projeto = formulario_codigo.elements['nome_projeto'];
const descricao_projeto = formulario_codigo.elements['descricao_projeto'];
const linguagem_codigo = formulario_codigo.elements['linguagem'];
const cor_borda = formulario_codigo.elements['cor_borda'];

if(localStorage.dados_projetos){
    var lista_projetos = JSON.parse(localStorage.dados_projetos);
}
else{
    var lista_projetos = [];
}

botao_salvar_projeto.addEventListener('click', (e)=>{
    e.preventDefault();
    salvaProjeto(codigo_projeto, nome_projeto, descricao_projeto, linguagem, cor_borda);
})


function salvaProjeto(codigo_projeto, nome_projeto, descricao_projeto, linguagem_codigo, cor_borda ){

    dados_projeto = {
        "codigo_projeto": codigo_projeto.textContent,
        "nome_projeto": nome_projeto.value,
        "descricao_projeto": descricao_projeto.value,
        "linguagem": linguagem_codigo.value,
        "cor_borda": cor_borda.value,
        "quantidade_likes": 15,
        "like": false
    }

    lista_projetos.push(dados_projeto)
    console.log(lista_projetos)

    localStorage.setItem("dados_projetos" , JSON.stringify(lista_projetos)) ;
}



