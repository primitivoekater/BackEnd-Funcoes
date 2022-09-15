const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    addProduto:function (NovoProduto){
        carrinho.produtos.push(NovoProduto)
    },
imprimirResumoDoCarrinho:function(){
        console.log(this.nomeDoCliente)
        quantidade=0
        for(itens of this.produtos ){
                quantidade+=itens.qtd
        }
        console.log(`total de itens : ${quantidade} itens`)
        precoTotalItem=0
        for(unidade of this.produtos){
            precoTotalItem+=(unidade.qtd*unidade.precoUnit)
        }
      
        console.log(`total a pagar : $  ${precoTotalItem}`)
        },

        
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
carrinho.addProduto(novaBermuda)
carrinho.addProduto(novoTenis)
carrinho.imprimirResumoDoCarrinho()
