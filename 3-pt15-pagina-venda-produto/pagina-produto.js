
let idProduto = 99

let produtoAtual = buscaProduto(idProduto)
carregaDadosDoProdutoNaTela()

let produtosDoCarrinho = buscaProdutosCarrinho()
carregaDadosDoCarrinhoNaTela()

atualizaNumeroProdutosDoCarrinho()
exibeOcultaMsgCarrinhoVazio()
