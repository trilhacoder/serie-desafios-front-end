function carregaDadosDoCarrinhoNaTela() {
    let listaProdutos = document.querySelector("#carrinho ul")
    listaProdutos.innerHTML = ""
    produtosDoCarrinho.forEach(function(produto) {
        exibeProdutoNoCarrinho(produto)
    })
}

function isCarrinhoVazio() {
    return document.querySelectorAll("#carrinho li").length == 0
}

function atualizaNumeroProdutosDoCarrinho() {
    let numeroProdutosNoCarrinho = produtosDoCarrinho.reduce(function(quantidadeTotalAtual, produtoDoCarrinho) {
        return quantidadeTotalAtual + produtoDoCarrinho.quantidade
    }, 0)
    document.querySelector("#icone-carrinho-contador").textContent = numeroProdutosNoCarrinho
}

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

document.querySelector("#icone-carrinho").addEventListener("click", function() {
    document.querySelector("#carrinho").classList.toggle("aberto")
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
