document.querySelectorAll('btn-proximo');
avanca.forEach(button=>{
    button.addEventlistener('click', function(){
    const atual = document.querySelectorAll('.ativo');
    const proximoPasso ='passo-'+ this.getAtribut('data-proximo');

    atual.classList.remover('ativo');
    document.getElementsById(proximoPasso).classList.add('ativo')
})
})