function carregaDadosDoProdutoNaTela() {
    document.querySelector("#produtoSelecionado #tag").textContent = produtoAtual.tag
    document.querySelector("#produtoSelecionado #titulo").textContent = produtoAtual.titulo
    document.querySelector("#produtoSelecionado #descricao").textContent = produtoAtual.descricao
    document.querySelector("#produtoSelecionado #preco").textContent = produtoAtual.preco
    document.querySelector("#produtoSelecionado #desconto").textContent = produtoAtual.desconto
    document.querySelector("#produtoSelecionado #preco-cheio").textContent = produtoAtual.precoCheio
}

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