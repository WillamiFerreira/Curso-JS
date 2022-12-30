function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var ano_n = window.document.getElementById('ano_nasc')
    var sexo = window.document.getElementsByName('sexo')
    var imagem = document.createElement('img')
    var res = window.document.getElementById('resposta')
    var idade = (ano - ano_n.value)
    
    if (ano_n.value.length == 0){
        window.alert('Digite uma data de nascimento!')

    } else {
        if (sexo[0].checked){
           sexo.value = 'Homem'
          if (idade > 0 && idade <= 8){
           imagem.src = 'imagens/boy.jpg'
          } else if (idade < 22) {
            imagem.src = 'imagens/young_boy.jpg'
          } else if (idade < 50){
            imagem.src = 'imagens/man.jpg'
          } else {
            imagem.src = 'imagens/old_man.jpg'
          }
            
        } else {
            sexo.value = 'Mulher'
          if (idade > 0 && idade <= 8){
           imagem.src = 'imagens/girl.jpg'
          } else if (idade < 22) {
            imagem.src = 'imagens/young_girl.jpg'
          } else if (idade < 50){
            imagem.src = 'imagens/woman.jpg'
          } else {
            imagem.src = 'imagens/old_woman.jpg'
          }
        }
        res.innerHTML = `${sexo.value} de ${idade} anos`
        res.appendChild(imagem)
       

    } 
}