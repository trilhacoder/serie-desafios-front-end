
let posicaoItem = 0
let deslocamentoImagens = 0

let $irDireita = document.querySelector(".ir-direita")
$irDireita.addEventListener("click", function() {
    console.log("direita")
    if (posicaoItem < 3) {
        console.log(posicaoItem)   
        posicaoItem++;
        deslocamentoImagens = posicaoItem * 375
        let $imagens = document.querySelector("#imagens")
        $imagens.style.transform = `translate(-${deslocamentoImagens}px)`  
    }
})

document.querySelector(".ir-esquerda").addEventListener("click", function() {
    console.log("esquerda")
    if (posicaoItem > 0) {
        console.log(posicaoItem)   
        posicaoItem--;
        deslocamentoImagens = deslocamentoImagens - 375
        let $imagens = document.querySelector("#imagens")
        $imagens.style.transform = `translate(-${deslocamentoImagens}px)`  
    }
})