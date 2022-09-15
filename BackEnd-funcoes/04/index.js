const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar : function(valor){
        novoSaldo=this.saldo+valor
        this.historicos.push(
            {
                tipo: "Depósito",
                valor: 10000, //aqui será o valor informado no argumento do método depositar
            }
        )
       
    }
}

contaBancaria.depositar()