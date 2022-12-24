function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src='imagens/morning.jpg'
        document.body.style.background = '#B9E1F8'
        
    } else if (hora >= 12 && hora < 18){
        img.src = 'imagens/afternoon.jpg'
        document.body.style.background = '#FCCF35'
    } else {
        img.src = 'imagens/night.jpg'
        document.body.style.background = '#882D42'
    }

}