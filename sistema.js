let nomeDealuno = ["Marcel","Franklin","Rita","Afrânio"]

for (let nome of nomeDealuno){
    console.log(`Essa pessoa se chama ${nome}`)
}






let numerodealunos =10

let contador = 0

while(contador <=numerodealunos){
    if (contador ==0){
    console.log(`O número atual é zero`)
    }else if(contador %2!=0){
        console.log(`O número ${contador} é Par`)
    }else{
        console.log(`O número ${contador} é inpar`)
    }
    contador++
}












let numeroDeAlunos = 10

for (let contador = 0; contador <= numeroDeAlunos; contador++){
    //console.log(contador)

    if(contador == 0){
        console.log("O número atual é zero")
    }else if (contador % 2 == 0){
        console.log("O número " + contador +" é Par")
    }else{
        console.log(`O número ${contador} é Inpar`)
    }
}