const avanca = ducument.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function () {
        const atual = document.querySelector('.ativo')
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo')

        atual.classlist.remove('ativo');
        document.getElementById(proximoPasso).classlist.ad('ativo')
    })
})
    ;