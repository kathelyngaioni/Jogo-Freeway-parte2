//Código do Carro

//Carro 1
//Carro com posição inicial fora da tela
let xCarro1 = 600;
let yCarro1 = 40;
let velCarro1 = 2;

//Carro 2
let xCarro2 = 600;
let yCarro2 = 96;
let velCarro2 = 2.5;

//Carro 3
let xCarro3 = 600;
let yCarro3 = 150;
let velCarro3 = 3.2;

function mostraCarro() {
  image(imagemCarro1,xCarro1,yCarro1,50,40);
  image(imagemCarro2,xCarro2,yCarro2,50,40);
  image(imagemCarro3,xCarro3,yCarro3,50,40);
}

function movimentaCarro(){
  xCarro1 -= velCarro1;
  xCarro2 -= velCarro2;
  xCarro3 -= velCarro3;
}

function voltaPosicaoInicialCarros(){
  if(xCarro1 <-50)
    xCarro1 = 600;
  
  if(xCarro2 <-50)
    xCarro2 = 600;
  
  if(xCarro3 <-50)
    xCarro3 = 600;
  
}