const carro ={
  ligado : false,
  velocidade : 0,
  ligar :function(){
      if (this.ligado===false){
          this.ligado=true
          console.log("o carro foi ligado")
      }else console.log("carro ja ligado")
  },
  desligar :function(){
      if(this.ligado===true){
          this.ligado=false
          this.velocidade=0
          console.log("o carro foi desligado")
      }else  console.log("carro ja desligado")
  },
  acelerar : function(){
      if (this.ligado===false){
          console.log("Não é possivel acelerar um carro desligado.")
      }else this.velocidade+=10
  },
  desacelerar : function(){
    if (this.ligado===false){
        console.log("Não é possivel frear um carro desligado.")
    }else this.velocidade-=10
}
}
carro.desligar()
console.log(`Carro ${carro.ligado},velocidade ${carro.velocidade}`)
carro.ligar()
console.log(`Carro ${carro.ligado},velocidade ${carro.velocidade}`)
carro.ligar()
console.log(`Carro ${carro.ligado},velocidade ${carro.velocidade}`)
carro.acelerar()
console.log(`Carro ${carro.ligado},velocidade ${carro.velocidade}`)
carro.acelerar()
console.log(`Carro ${carro.ligado},velocidade ${carro.velocidade}`)
carro.desacelerar()
console.log(`Carro ${carro.ligado},velocidade ${carro.velocidade}`)
carro.desligar()
console.log(`Carro ${carro.ligado},velocidade ${carro.velocidade}`)
carro.acelerar()
console.log(`Carro ${carro.ligado},velocidade ${carro.velocidade}`)
carro.desacelerar()
console.log(`Carro ${carro.ligado},velocidade ${carro.velocidade}`)