// hljs.highlightElement(document.getElementsByClassName('card_code')[0]);

btn_visualiza_highlight = document.getElementById('btn_visualiza_highlight');
btn_visualiza_highlight.addEventListener('click', (e)=>{
    e.preventDefault();
    hljs.highlightElement(document.getElementsByClassName('card_code')[0]);
})