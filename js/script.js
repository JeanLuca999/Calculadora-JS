const $containerCalculadora = document.getElementById('container-calculadora')
const Botao = (valor, tipo, func)=> `<button onclick="${func}"class="${tipo}">${valor}</button>`
const Resultado = ()=> `<div class="calculadora-resultado" id="resultado"></div>`
const numeros = ['1','2','3','4','5','6','7','8','9','0']
const operadores = ['+','-','X','/','=']

criarCalculadora()

function adicionar(pai, filho) {
    pai.innerHTML += filho
}

function criarCalculadora() {
    adicionar($containerCalculadora, Resultado())
    numeros.forEach((numero)=>{
        adicionar($containerCalculadora, Botao(numero, 'botao-valor', 'concatenar(this)'))
    })

    operadores.forEach((operador)=>{
        adicionar($containerCalculadora,Botao(operador, 'botao-valor botao-operador', 'concatenar(this)'))
    })

    adicionar($containerCalculadora, Botao('LIMPAR','botao-limpar', 'limpar()'))

    document.getElementById('resultado').innerHTML = ''
}


function concatenar(that) {
    if(that.innerHTML == '=') {
        try{
            document.getElementById('resultado').innerHTML = eval(document.getElementById('resultado').innerHTML)
        } catch {
            window.alert('Operação inválida!')
        }
    } else {
        document.getElementById('resultado').innerHTML += that.innerHTML
    }
}

function limpar() {
    document.getElementById('resultado').innerHTML = ''
}