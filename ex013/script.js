function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano_nasc')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/boy.jpg' )
            } else if (idade >= 10 && idade < 21){
                img.setAttribute('src', 'imagens/young_boy.jpg' )
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/man.jpg')
            } else {
                img.setAttribute('src', 'imagens/old_man.jpg')
            }
        } else {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/girl.jpg' )
            } else if (idade >= 10 && idade < 21){
                img.setAttribute('src', 'imagens/young_girl.jpg' )
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/woman.jpg')
            } else {
                img.setAttribute('src', 'imagens/old_woman.jpg')
            }
        }
        res.style.textAlign = 'center'//centraliza o texto
        res.innerHTML = `${gênero} com ${idade} anos`
        res.appendChild(img)
    }

}