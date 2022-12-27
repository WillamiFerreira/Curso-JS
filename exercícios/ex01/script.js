function carregar(){
    data = new Date
    hora = data.getHours()
    
    var msg = document.getElementById('msg').innerHTML = `São ${hora} horas`
    var img = document.getElementById('imagem')
    
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/morning.jpg'
        document.body.style.background = '#847BAB'
    } else if (hora < 18){
        img.src = 'imagens/afternoon.jpg'
        document.body.style.background = '#9F660F'
    } else {
        img.src = 'imagens/night.jpg'
        document.body.style.background = '#211F1E'
    }


}