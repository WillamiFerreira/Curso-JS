var btm_contar = window.document.getElementById('botao_contar')
btm_contar.addEventListener('click', contar)
function contar(){
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')

    if (inicio.value.length == 0){
        window.alert('Digite um valor para o inicio')

    } else if (fim.value.length == 0) {
        window.alert('Digite uma valor para o fim.')

    } else if (passo.value.length == 0){
        window.alert('Como não foi digitado valor para o passo, será considerado com 1.')
        passo.value = 1

    } else {
            var mensagem = window.document.getElementById('msg')
            var i = Number(inicio.value)
            var f = Number(fim.value)
            var p = Number(passo.value)
            if (i < f){
                for (var c = i; c <= f; c += p){
                    mensagem.innerHTML += `${c} \u{1F449}`
                }
            } else {
                for (var c = i; c >= f; c -= p){
                    mensagem.innerHTML += `${c} \u{1f449}`
                }
            }
            mensagem.innerHTML += `\u{1f3c1}`       
        } 
        
      
    } 
