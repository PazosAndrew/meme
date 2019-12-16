let img;
let radius2 = 100;

let eyebrowY= 0;
let fingerX=0;

function setup() {

    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    cnv.parent('content'); //this puts my sketch in a div
  
}

function draw() {


    stroke(0);
 
       background('#4B4B4C');
  
        //head shape

        fill(255, 240, 25);
        push();
       
        translate(300,300);
        ellipse(255,55,375,375);
        pop();

        //eyes

        fill (0,0,0);
        push ();
        translate(300, 300);
        rect(150, 0, 55, 55, 25, 25);
        rect(300, 0, 55, 55, 25, 25);
        pop();

        // Eyebrows
        fill (0,0,0);
        push ();
        translate(285, 275);
        let eyebrowY = map(mouseX,200,500, 5,10); 
        
        rect(150, eyebrowY, 85, 15, 25, 25 ,45); //left eyebrow
        rect(300, eyebrowY, 85, 15, 25, 25, 25);  // right eyebrow

        pop();

        //Mouth 
         fill(255, 240, 25);
         push();
         strokeWeight(4);
         stroke(51);
         translate(320,320);
         line(200,100,280,110);
         pop();


      // Finger and thumb 
         fill(255, 240, 25);

        push();
        strokeWeight(4);
         stroke(51);
         translate(400,400);
   

         rect(28, 10, 50, 150, 35);  //thumb
         //line(88,70,230,80);     
         let fingerX= map(mouseX,200,500,5,20);
         bezier( 28, 108, 70, 28, 200, 150, 200,fingerX);    //index finger

       
        pop();
          // knuckles 
           fill(255, 240, 25);
        push();
       
        translate(400,400);
        // rect(30, 200, 55, 55, 20);
//    console.log("X: " + mouseX);
//    console.log("Y: " + mouseY);
}
