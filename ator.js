//Código do ator
let yAtor= 366;

function mostraAtor(){
  image(imagemDoAtor,100,yAtor,30,30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
}

/*function voltaPosicaoInicialAtor(){
  if(yAtor <0)
    yAtor = 366;  
}
*/