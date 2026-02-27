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
  background(109,191,242);// Color del fons del dibuix.
  //El primer número es el nivell de vermell"R", el segon número es el nivell de verd "G" i el tercer número es l'entensitat de blau "B", per tant color RGB en html. Dintre de background o fons.
 fill(255,246,229);//Color de  la cara exterior.
  //En el cas del fill serà al mateix pero el que fa es omplir de color la figura següent que son dos ellipses.
  ellipse(300,200,200+h,250+h);//Forma de la cara exterior
  //El primer número es la posició x del centre de l'ellipse desde la cantonada superior esquerra que es al "0,0",el segon número es la posició "y" o alçada del centre de l'ellipse  i el tercer número l'amplada del ellipse. El quart número es l'alçada de l'ellipse.
     fill(255,255,255);//Color blanc dels ulls
      
  ellipse(250,160,30,25);   // Forma de l'ull dret perquè x=250   
    ellipse(350, 160,30,25); //Forma de l'ull esquerra perquè x=350          
     fill(255-h*4,0,0);//Color de la boca

arc(300,250,100,50+h,0,PI);//Forma de la boca

  line(320,140,370,130);
  line(220,140,300,130)
}
