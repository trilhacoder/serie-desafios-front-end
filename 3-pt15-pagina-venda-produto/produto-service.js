// mock dos produtos da loja (marketplace)
let produtos = [
    {
        id: 1,
        tag: "Produto 1",
        titulo: "Fall Limited Edition Sneakers 3",
        descricao: "novo descrição These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        preco: "$125.00",
        desconto: "50%",
        precoCheio: "$250.00",
        miniatura: "images/image-product-1-thumbnail.jpg",
        quantidade: 1
    },
    {
        id: 2,
        tag: "Produto 2",
        titulo: "Fall Limited Edition Sneakers 3",
        descricao: "novo descrição These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        preco: "$125.00",
        desconto: "50%",
        precoCheio: "$250.00",
        miniatura: "images/image-product-1-thumbnail.jpg",
        quantidade: 1
    },
    {
        id: 99,
        tag: "Sneaker Company",
        titulo: "Fall Limited Edition Sneakers 3",
        descricao: "novo descrição These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        preco: "$125.00",
        desconto: "50%",
        precoCheio: "$250.00",
        miniatura: "images/image-product-1-thumbnail.jpg",
        quantidade: 1
}]

function buscaProduto(idProduto) {
    return produtos.find(produto => produto.id == idProduto)
} 
