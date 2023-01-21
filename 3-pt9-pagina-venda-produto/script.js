exibeOcultaMsgCarrinhoVazio()

function exibeOcultaMsgCarrinhoVazio() {
    if (isCarrinhoVazio()) {
        let msg = document.querySelector("#msg-carrinho-vazio")
        msg.classList.add("carrinho-vazio")
        console.log("if")
    } else {
        let msg = document.querySelector("#msg-carrinho-vazio")
        msg.classList.remove("carrinho-vazio")
        console.log("else")
    }
    
}

function isCarrinhoVazio() {
    return document.querySelectorAll("#carrinho li").length == 0
}

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

let $iconeAbrirMenu = document.querySelector("#icone-abrir-menu")
$iconeAbrirMenu.addEventListener("click", function() {
    console.log("abrir menu")
    let $fundoCinza = document.querySelector("#fundo-cinza")
    let $menuNavegacao = document.querySelector("#menu-navegacao")
    $fundoCinza.classList.toggle("active")
    $menuNavegacao.classList.toggle("active")
})

let $iconeFecharMenu = document.querySelector("#icone-fechar-menu")
$iconeFecharMenu.addEventListener("click", function() {
    let $fundoCinza = document.querySelector("#fundo-cinza")
    let $menuNavegacao = document.querySelector("#menu-navegacao")
    $fundoCinza.classList.toggle("active")
    $menuNavegacao.classList.toggle("active")
})

document.querySelector("#quantidade-mais").addEventListener("click", function() {
    console.log("mais")
    let $quantidade = document.querySelector("#quantidade")
    $quantidade.textContent = Number($quantidade.textContent) + 1
})

document.querySelector("#quantidade-menos").addEventListener("click", function() {
    console.log("menos")
    let $quantidade = document.querySelector("#quantidade")
    let quantidadeNumber = Number($quantidade.textContent)
    if ( quantidadeNumber > 0) {
        $quantidade.textContent = quantidadeNumber - 1
    }
})

document.querySelector("#icone-carrinho").addEventListener("click", function() {
    document.querySelector("#carrinho").classList.toggle("aberto")
})

document.querySelector("#botaoAdicionarCarrinho").addEventListener("click", function() {
    console.log("adicionar...")
    let titulo = document.querySelector("#produtoSelecionado #titulo").textContent
    let preco = document.querySelector("#produtoSelecionado #preco").textContent
    let quantidade = document.querySelector("#produtoSelecionado #quantidade").textContent
    let total = Number(preco.replace("$", "")) * Number(quantidade)
    console.log(titulo, preco, quantidade, total.toFixed(2))

    let listaProdutos = document.querySelector("#carrinho ul")
    
    let produtoLi = document.createElement("li")
    
    let produtoDiv = document.createElement("div")
    produtoDiv.classList.add("produto")
    
    let produtoImgMiniatura = document.createElement("img")
    produtoImgMiniatura.classList.add("produto-miniatura")
    produtoImgMiniatura.src = "images/image-product-1-thumbnail.jpg"

    let produtoDescricao = document.createElement("div")
    produtoDescricao.classList.add("produto-descricao")

    let produtoH2 = document.createElement("h2")
    produtoH2.textContent = titulo

    let produtoSpanPreco = document.createElement("span")
    produtoSpanPreco.classList.add("produto-preco")
    produtoSpanPreco.textContent = preco + " x " + quantidade

    let produtoSpanPrecoTotal = document.createElement("span")
    produtoSpanPrecoTotal.classList.add("produto-preco-total")
    produtoSpanPrecoTotal.textContent = "$" + total.toFixed(2)

    let produtoImgDeletar = document.createElement("img")
    produtoImgDeletar.src = "images/icon-delete.svg"

    produtoImgDeletar.addEventListener("click", function(event) {
        let $divProduto = event.target.parentElement.parentElement
        $divProduto.remove()
        exibeOcultaMsgCarrinhoVazio()
    })

    produtoLi.appendChild(produtoImgMiniatura)
    produtoDescricao.appendChild(produtoH2)
    produtoDescricao.appendChild(produtoSpanPreco)
    produtoDescricao.appendChild(produtoSpanPrecoTotal)

    produtoLi.appendChild(produtoDescricao)

    produtoDiv.appendChild(produtoImgMiniatura)
    produtoDiv.appendChild(produtoDescricao)
    produtoDiv.appendChild(produtoImgDeletar)

    produtoLi.appendChild(produtoDiv)

    listaProdutos.appendChild(produtoLi)

    exibeOcultaMsgCarrinhoVazio()

})
