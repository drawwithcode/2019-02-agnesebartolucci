var colorList1= ['#aa2447', '#cff6f5e', '#40bfc1'];
var colorList2 =['#f375b5', '#fcd783','#816ad6'];
var colorList3 = ['#ffa45b', '#ffda77', '#aee6e6'];
var colorList4 = ['#c6d663', '#fa921f', '#a01862'];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 5);

    for(var x=65; x<=windowWidth; x+=100) {
      for(var y=65; y<=windowHeight; y+=100) {
        push();
        fill('white');
        noStroke();
        translate(x,y);
        rotate(frameCount/40);
        ellipse(40,40,10);
        pop();
      }
    }

  for(var x=25; x<=windowWidth; x+=100)
  for(var y=25; y<=windowHeight; y+=100) {
      push();
      translate(x,y);
      noStroke();
      if (mouseX < windowWidth/2 && mouseY < windowHeight/2) {
        fill(color(random(colorList1)));
      }
      else if (mouseX < windowWidth && mouseY < windowHeight/2) {
        fill(color(random(colorList2)));
      }
      else if (mouseX < windowWidth/2 && mouseY < windowHeight) {
        fill(color(random(colorList3)));
      }
       else {
        fill(color(random(colorList4)));
      }
      ellipse(40,40,50);
      pop();
    }
}
