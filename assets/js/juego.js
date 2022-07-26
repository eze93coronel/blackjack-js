// 2c es un 2 de treboles 
// 2d de diamonds
// 2h two of hearts 
// 2s twp of spades 

let deck = []; 
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];
let puntosJugador = 0;
let   puntosComputadora = 0;
//referencias del html 

  const btnPedir = document.querySelector('#btnPedir')
  const btnDetener= document.querySelector('#btnDetener')
  const btnNuevo= document.querySelector('#btnNuevo')


  const puntosHTML = document.querySelectorAll('small');
  const divCartasJugador = document.querySelector('#jugador-cartas')
const divCartasComputadora = document.querySelector('#computadora-cartas')
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

  // turno de la computadora 
  const turnoComputadora = (puntosMinimos)=>{
    do {
      const carta = pedirCarta()
      puntosComputadora = puntosComputadora + valorCarta(carta)
      puntosHTML[1].innerText = puntosComputadora;
    
      const imgCarta = document.createElement('img');
      imgCarta.src = `/assets/cartas/${carta}.png`;
     imgCarta.classList.add('carta')
     divCartasComputadora.append(imgCarta);

      if( puntosMinimos > 21 ){
        break;
      }
   } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21 ));
 
   setTimeout(()=>{
    if( puntosComputadora === puntosMinimos){
      alert("Nadie gana =)")
     }else if(puntosMinimos > 21 ){
      alert("Computadora Gana");
     }else if (puntosComputadora >21){
      alert("Jugador Gana")
     }else{
      alert("Computadora Gana")
     }
   },10)
  
  }

  //eventos 
btnPedir.addEventListener('click', ()=>{
  const carta = pedirCarta()
  puntosJugador = puntosJugador + valorCarta(carta)
  puntosHTML[0].innerText = puntosJugador;

  const imgCarta = document.createElement('img');
  imgCarta.src = `/assets/cartas/${carta}.png`;
 imgCarta.classList.add('carta')
  divCartasJugador.append(imgCarta);

  if(puntosJugador > 21 ){
    console.warn('lo siento pa perdiste');
    btnPedir.disabled = true;
     btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  }else  if(puntosJugador === 21){
    console.warn('ganaste la partida')
    btnPedir.disabled = true;
  btnDetener.disabled = true;
    turnoComputadora(puntosJugador);

  }

});

btnDetener.addEventListener('click', ()=>{
  btnPedir.disabled = true;
  btnDetener.disabled = true;

  turnoComputadora(puntosJugador);
})
btnNuevo.addEventListener('click', ()=>{
     console.clear();

     deck = [];

      deck = crearDeck();
    
      puntosJugador = 0;
      puntosComputadora = 0;
      puntosHTML[0].innerText = 0;
      puntosHTML[1].innerText= 0;

      divCartasComputadora.innerHTML = '';
      divCartasJugador.innerHTML = '';
       
      btnPedir.disabled = false;
  btnDetener.disabled = false;

})