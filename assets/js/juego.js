// 2c es un 2 de treboles 
// 2d de diamonds
// 2h two of hearts 
// 2s twp of spades 

let deck = []; 
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

//esta fb crea una nueba baraja
const crearDeck = ()=>{
    for( let i = 2; i <= 10 ; i++){
       for( let tipo of tipos) {
        deck.push(i + tipo)
       } 
       
       for(let tipo of tipos) {
          for(let esp of especiales){
            deck.push(esp +  tipo)
          }
       }
    
    }

  
   // console.log(deck);

    deck = _.shuffle(deck);
    console.log(deck)
    return deck;
}

crearDeck();


// esta funcion permite pedir una nueva carta 
const pedirCarta = ()=>{
 if(deck.length === 0){
   throw 'No Hay Cartas chavon';
 }

   const carta = deck.pop() // va la ultima carta de m i arreglo
  
   console.log(deck);
   console.log(carta) // carta debe ser de la baraja,
   return carta;

}
  // pedirCarta();


  // valor de cada carta 
  const valorCarta = (carta)=>{
       const valor = carta.substring(0, carta.length - 1);
      return (isNaN(valor)) ?
      (valor === 'A') ? 11 : 10
      : valor * 1;
  }
 const valor =  valorCarta(pedirCarta())
 console.log({valor});