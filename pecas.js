var ListaDePecas = ["Filtro de ar","Motor","Amortecedor"]

if (ListaDePecas.length < 10){
    //é possivel cadastrar
    console.log("É possível cadastrar mais peças")
}else{
    console.log("não tem mais espaço na lista")
}

 let peso = 50;
 if (peso<100){
console.log("A peça deve pesar no mínimo 100g")

 }else{
     console.log("A peça possui peso adequado")
 }

 let Nomepeca = "disco de freio"
 if (Nomepeca.length>3){
     console.log("Nome da peça está adequado para o cadastro!")
 }else if (Nomepeca.length==0){
         console.log("O nome da peça não pode ser vazio")
    }else{
        console.log("O nome deve conter mais que 3 caracteres para ser cadastrado!")
    }


    //= -> atribuição de valor ler recebe
   // == -> verificação se os valores são iguais -> É igual?
  //  === -> verificação se o valor e o tipo de valor são iguais

  // let idade ='23'
  // if (idade === '23')


  switch(Nomepeca.length){
      Case 0:
      console.log("nome da peça não pode ser vazio")
      break;

      Case 1:
      Case 2:
      Case 3:
      console.log("Onome da peça deve conter mais de 3 caracteres, digite um nome adequado:")

      default:
          console.log("o nome da peça está adequado")
          break;
  }