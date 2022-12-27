var numero = window.document.getElementById("txtn")
var display = window.document.getElementById("seltab")
var dados = window.document.getElementById('dados')
var lista = []

function adicionar(){
    dados.innerText = ''
    if (numero.value >= 1 && numero.value <= 100){
        if (numero.value.length == 0){
            window.alert('Digite um valor!')
        }
        var n = Number(numero.value)
        if (lista.indexOf(n) == -1) {
            var item = document.createElement('option')
            lista.push(n)
            item.text = `O valor ${n} foi adicionado`
            display.appendChild(item)

        } else {
            window.alert(`O número ${n} já está na lista`)
        }
    } else {
        window.alert('Apenas valores entre 1 e 100!')
    }
    txtn.value = ''
    txtn.focus()

}
function finalizar(){
    if (lista.length == 0){
        window.alert('Não existe elementos registrados')
    } else {
    var soma = lista.reduce((accumulator,value) => accumulator + value,0);
    var maior = Math.max.apply(null, lista)
    var menor = Math.min.apply(null, lista)
    dados.innerText = `Foram registrados ${lista.length} Números.\nO maior número é o ${maior}.\nO menor número é o ${menor}\nA soma dos números é ${soma}\nA média é ${soma/lista.length}` 
    }
    
    
}