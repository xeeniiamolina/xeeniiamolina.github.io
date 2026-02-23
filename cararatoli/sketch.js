let mic;//Crea una variable pel micròfon
function setup() {
  createCanvas(600, 400);//Tamany de l'àrea de dibuix
  //El primer número es l'amplada en pixels i el segon número es l'alçada en pixels.
  mic=new p5.AudioIn();//El micròfon es una entrada de audio amb p5
  mic.start();//Activa el micròfon
}

function draw() {
  let vol=mic.getLevel();
  let h=map(vol,0,1,0,4000);
  background(mouseX-224,mouseY-91,mouseX+32);// Color del fons del dibuix.
  //El primer número es el nivell de vermell"R", el segon número es el nivell de verd "G" i el tercer número es l'entensitat de blau "B", per tant color RGB en html. Dintre de background o fons.
 fill(255,246,229);//Color de  la cara exterior.
  //En el cas del fill serà al mateix pero el que fa es omplir de color la figura següent que son dos ellipses.
  //mouseX=300,mouseY=200
  ellipse(mouseX,mouseY,200+h,250+h);//Forma de la cara exterior
  //El primer número es la posició x del centre de l'ellipse desde la cantonada superior esquerra que es al "0,0",el segon número es la posició "y" o alçada del centre de l'ellipse  i el tercer número l'amplada del ellipse. El quart número es l'alçada de l'ellipse.
     fill(255,255,255);//Color blanc dels ulls
      
  ellipse(mouseX-50,mouseY-40,30,25);   // Forma de l'ull dret perquè x=250   
    ellipse(mouseX+50,mouseY-40,30,25); //Forma de l'ull esquerra perquè x=350          
  fill(0,0,0)
  ellipse(mouseX-50, mouseY-40, 20, 15)
  ellipse(mouseX+50, mouseY-40, 20, 15)
     fill(255-h*4,0,0);//Color de la boca

arc(mouseX,mouseY+50,100,50+h,0,PI);//Forma de la boca

  line(mouseX+20,mouseY-60,mouseX+70,mouseY-70);//Ceja derecha
  line(mouseX-80,mouseY-60,mouseX-30,mouseY-70);//Ceja izquierda

}
