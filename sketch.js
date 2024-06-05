let posicaox = 200
let posicaoy = 200
let tamanho = 30
let xraquete = 5
let yraquete = 200
let xraqueteoponente = 435
let yraqueteoponente = 200
let larguraraquete = 15
let alturaraquete = 100
let raio = tamanho/2
let velocidadex = 5
let velocidadey = 5
let velocidadeyraquete;
let largura = 450
let altura = 400
let colidiu = false
let meuspontos = 0
let oponentepontos = 0




function setup() {
  createCanvas(largura, altura);
}

function draw() {
  background(0);
 criabolinha();
velocidadebolinha();
  tocaborda();
  criaraquete();
  moveraquete();
  colisaoraquete();
  criaraqueteoponente();
  movimentoraqueteoponente();
  colisaoraqueteoponente();
  criarplacar();
  contarpontos();
  
  
 

  
  
  
  
}
function criabolinha(){circle(posicaox,posicaoy,tamanho)}
function velocidadebolinha (){
posicaox += velocidadex
posicaoy += velocidadey}
function tocaborda(){if(posicaox + raio  > largura|| posicaox-raio < 0)
    velocidadex *= -1
  if(posicaoy + raio > altura|| posicaoy-raio < 0)
    velocidadey *= -1}
   function criaraquete(){ rect(xraquete,yraquete,larguraraquete,alturaraquete)}
  function moveraquete(){  if (keyIsDown(UP_ARROW))
  yraquete-= 10
  if (keyIsDown(DOWN_ARROW))
  yraquete+= 10}
   function colisaoraquete(){if(posicaox - raio < xraquete + larguraraquete
    && posicaoy - raio < yraquete + alturaraquete
    && posicaoy + raio > yraquete) 
    velocidadex *= -1
}
function criaraqueteoponente(){
rect(xraqueteoponente, yraqueteoponente, larguraraquete, alturaraquete)
}
function  movimentoraqueteoponente(){
velocidadeyraquete = posicaoy - yraqueteoponente - larguraraquete/ 
  2 - 30
  yraqueteoponente += velocidadeyraquete
}
function colisaoraqueteoponente(){
 colidiu = collideRectCircle(xraqueteoponente,yraqueteoponente,larguraraquete,alturaraquete,posicaox,posicaoy,tamanho)
 if(colidiu)
  velocidadex *= -1
}
  function criarplacar (){
    stroke(255)
    fill(color(181,15,52))
    rect(80,20,40,30)
    rect(332,20 , 40, 30)
    textAlign(CENTER)
    textSize(30)
    fill(255)
    text (meuspontos,100,45)
    text (oponentepontos,350,45)
  }
function contarpontos(){
  if(posicaox < 15)
    oponentepontos += 1
  if (posicaox > 540)
    meuspontos += 1
    
}
   










