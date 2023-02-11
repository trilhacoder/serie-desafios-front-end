import produtoService from "./produto-service.js"
import carrinhoService from "./carrinho-service.js"
import produtoComponente from "./produto.js"
import carrinhoComponente from "./carrinho.js"

let idProduto = 99

let produtoAtual = produtoService.buscaProduto(idProduto)
produtoComponente.init(produtoAtual)
produtoComponente.carregaDadosDoProdutoNaTela()

let produtosDoCarrinho = carrinhoService.buscaProdutosCarrinho()
carrinhoComponente.init(produtosDoCarrinho)
carrinhoComponente.carregaDadosDoCarrinhoNaTela()
carrinhoComponente.atualizaNumeroProdutosDoCarrinho()
carrinhoComponente.exibeOcultaMsgCarrinhoVazio()
