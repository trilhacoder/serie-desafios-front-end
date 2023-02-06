// mock dos produtos do carrinho
let produtosCarrinho = [{
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

function buscaProdutosCarrinho() {
  return produtosCarrinho
}

function buscaProdutoCarrinho(idProduto) {
  return produtosCarrinho.find(produtoCarrinho => produtoCarrinho.id == idProduto)
}

function adicionaProdutoCarrinho(produto) {
  produtosCarrinho.push(produto)
}

function removeProdutoCarrinho(idProduto) {
  let indice = produtosCarrinho.findIndex(produtoCarrinho => produtoCarrinho.id == idProduto)
  produtosCarrinho.splice(indice, 1)
}
