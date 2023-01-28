
let produtoAtual = retornaDadosDoProdutoAtual()
carregaDadosDoProdutoNaTela()

let produtosDoCarrinho = retornaProdutosDoCarrinho()
carregaDadosDoCarrinhoNaTela()

atualizaNumeroProdutosDoCarrinho()

function atualizaNumeroProdutosDoCarrinho() {
    let numeroProdutosNoCarrinho = produtosDoCarrinho.reduce(function(quantidadeTotalAtual, produtoDoCarrinho) {
        return quantidadeTotalAtual + produtoDoCarrinho.quantidade
    }, 0)
    document.querySelector("#icone-carrinho-contador").textContent = numeroProdutosNoCarrinho
}

function carregaDadosDoCarrinhoNaTela() {
    let listaProdutos = document.querySelector("#carrinho ul")
    listaProdutos.innerHTML = ""
    produtosDoCarrinho.forEach(function(produto) {
        exibeProdutoNoCarrinho(produto)
    })
}

function retornaProdutosDoCarrinho() {
    // mock, esses dados poderiam estar vindo de uma API por exemplo
    let carrinho = [{
        id: 1,
        tag: "Sneaker Company",
        titulo: "Fall Limited Edition Sneakers 1",
        descricao: "novo descrição These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        preco: "$125.00",
        desconto: "50%",
        precoCheio: "$250.00",
        miniatura: "images/image-product-1-thumbnail.jpg",
        quantidade: 1
    },
    {
        id: 2,
        tag: "Sneaker Company",
        titulo: "Fall Limited Edition Sneakers 2",
        descricao: "novo descrição These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        preco: "$125.00",
        desconto: "50%",
        precoCheio: "$250.00",
        miniatura: "images/image-product-1-thumbnail.jpg",
        quantidade: 2
    },
    {
        id: 3,
        tag: "Sneaker Company 2",
        titulo: "Fall Limited Edition Sneakers 3",
        descricao: "novo descrição These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        preco: "$125.00",
        desconto: "50%",
        precoCheio: "$250.00",
        miniatura: "images/image-product-1-thumbnail.jpg",
        quantidade: 3
    }]    

    return carrinho
}

function retornaDadosDoProdutoAtual() {
    // mock, esses dados poderiam estar vindo de uma API por exemplo
    let produto = {
        id: 99,
        tag: "Sneaker Company",
        titulo: "Fall Limited Edition Sneakers 3",
        descricao: "novo descrição These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        preco: "$125.00",
        desconto: "50%",
        precoCheio: "$250.00",
        miniatura: "images/image-product-1-thumbnail.jpg",
        quantidade: 1
    }
    return produto
}

function carregaDadosDoProdutoNaTela() {
    document.querySelector("#produtoSelecionado #tag").textContent = produtoAtual.tag
    document.querySelector("#produtoSelecionado #titulo").textContent = produtoAtual.titulo
    document.querySelector("#produtoSelecionado #descricao").textContent = produtoAtual.descricao
    document.querySelector("#produtoSelecionado #preco").textContent = produtoAtual.preco
    document.querySelector("#produtoSelecionado #desconto").textContent = produtoAtual.desconto
    document.querySelector("#produtoSelecionado #preco-cheio").textContent = produtoAtual.precoCheio
}

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

    let produtoProcurado = produtosDoCarrinho.find(function(produtoDoCarrinho) {
        return produtoDoCarrinho.id == produtoAtual.id
    })

    if (produtoProcurado) {
        let $quantidade = document.querySelector("#quantidade")
        produtoProcurado.quantidade += Number($quantidade.textContent)
        carregaDadosDoCarrinhoNaTela()
    } else {
        produtosDoCarrinho.push(produtoAtual)
        exibeProdutoNoCarrinho(produtoAtual)    
        exibeOcultaMsgCarrinhoVazio()
    }
    atualizaNumeroProdutosDoCarrinho()
})

function exibeProdutoNoCarrinho(produto) {

    let id = produto.id
    let titulo = produto.titulo
    let preco = produto.preco
    let quantidade = produto.quantidade
    let total = Number(preco.replace("$", "")) * Number(quantidade)
    let miniatura = produto.miniatura
    console.log(titulo, preco, quantidade, total.toFixed(2))

    let listaProdutos = document.querySelector("#carrinho ul")

    let produtoLi = document.createElement("li")

    let produtoDiv = document.createElement("div")
    produtoDiv.classList.add("produto")
    produtoDiv.setAttribute("data-idproduto", id)
    
    let produtoImgMiniatura = document.createElement("img")
    produtoImgMiniatura.classList.add("produto-miniatura")
    produtoImgMiniatura.src = miniatura

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
        let $divProduto = event.target.parentElement
        let $liProduto = $divProduto.parentElement

        let idprodutoremovido = $divProduto.dataset.idproduto
        console.log("produto removido " + idprodutoremovido)

        let indice = produtosDoCarrinho.findIndex(function(produto) {
            return produto.id == idprodutoremovido
        })

        produtosDoCarrinho.splice(indice, 1)
        console.log(produtosDoCarrinho)
        $liProduto.remove()

        atualizaNumeroProdutosDoCarrinho()

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
}
