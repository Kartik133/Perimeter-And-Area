var gameState = "select",selectShape,measurement,radius,heights,lengths,slength,widths,set,reset,x,y;

function setup() {
  createCanvas(windowWidth,windowHeight);

  radius = createInput("0","number");
  heights = createInput("0","number");
  widths = createInput("0","number");
  lengths = createInput("0","number");
  slength = createInput("0","number");
  set = createButton("set");
  reset = createButton("reset");
  selectShape = createSelect();
  selectShape.option("Select");
  selectShape.option("Square");
  selectShape.option("Rectangle");
  selectShape.option("Triangle");
  selectShape.option("Circle");
  selectShape.option("Semicircle");
  selectShape.option("Parallelogram");
  selectShape.option("Rhombus");
  selectShape.option("Trepezium");
  selectShape.option("Cube");
  selectShape.option("Cuboid");
  selectShape.option("Cylinder");
  selectShape.option("Cone");
  selectShape.option("Sphere");
  selectShape.option("Hemisphere");
  measurement = createSelect();
  measurement.option("Select");
  measurement.option("Perimeter");  
  measurement.option("Circumference");
  measurement.option("Area");
  measurement.option("T.S.A");
  measurement.option("C.S.A");
  measurement.option("Volume");
  

  radius.position((width/2)-50,(height/2)-10);
  lengths.position((width/2)-50,(height/2)-40);
  widths.position((width/2)-50,(height/2)-10);
  heights.position((width/2)-50,(height/2)+20);
  slength.position((width/2)+150,(height/2)+20);
  set.position((width/2)-50,(height/2)+50);
  reset.position((width/2)-50,(height/2)+50);
  selectShape.position((width/2)-50,(height/2)-40);
  measurement.position((width/2)-50,(height/2)-10);
}

function draw() {
  background(0);
  console.log(gameState,"CylinderVolume");

  if(gameState==="select") {
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    reset.hide();
    selectShape.show();
    measurement.show();

    set.mouseReleased(()=>{
      var xxx = selectShape.value() + measurement.value()
      gameState = xxx;
    });
  }else {
    selectShape.hide();
    measurement.hide();
    set.hide();
   }

  if(gameState==="CylinderVolume") {
    radius.show();
    heights.show();
    set.show();
    widths.hide();
    lengths.hide();
    slength.hide();
    reset.hide();
   
    text("radius",(width/2)-100,(height/2)+10);
    text("height",(width/2)-100,(height/2)+40);

    set.mouseReleased(()=>{
      x = int(radius.value());
      y = int(heights.value());
      gameState = "cva";
    });
  }
  
  if(gameState==="cva"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    cylinderVol(x,y);

    reset.mouseReleased(()=>{
      gameState = "CylinderVolume";
      radius.value(0);
      heights.value(0);
    });
  }

  if(gameState==="CylinderC.S.A") {
    radius.show();
    heights.show();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.show();
    reset.hide();
   
    text("radius",(width/2)-100,(height/2)+10);
    text("height",(width/2)-100,(height/2)+40);

    set.mouseReleased(()=>{
      x = int(radius.value());
      y = int(heights.value());
      gameState = "cca";
    });
  }

  if(gameState==="cca"){
    radius.hide();
    heights.hide();
    set.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    reset.show();

    cylinderCSA(x,y);

    reset.mouseReleased(()=>{
      gameState = "CylinderC.S.A";
      radius.value(0);
      heights.value(0);
    });
  }

  if(gameState==="CylinderT.S.A") {
    radius.show();
    heights.show();
    set.show();
    widths.hide();
    lengths.hide();
    slength.hide();
    reset.hide();

    text("radius",(width/2)-100,(height/2)+10);
    text("height",(width/2)-100,(height/2)+40);

    set.mouseReleased(()=>{
      x = int(radius.value());
      y = int(heights.value());
      gameState = "cta";
    });
  }

  if(gameState==="cta"){
    radius.hide();
    heights.hide();
    set.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    reset.show();

    cylinderTSA(x,y);

    reset.mouseReleased(()=>{
      gameState = "CylinderT.S.A";
      radius.value(0);
      heights.value(0);
    });
  }
  
  if(gameState==="ConeVolume") {
    radius.show();
    heights.show();
    set.show();
    widths.hide();
    lengths.hide();
    slength.hide();
    reset.hide();
   
    text("radius",(width/2)-100,(height/2)+10);
    text("height",(width/2)-100,(height/2)+40);

    set.mouseReleased(()=>{
      x = int(radius.value());
      y = int(heights.value());
      gameState = "cova";
    });
  }
  
  if(gameState==="cova"){
    radius.hide();
    heights.hide();
    set.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    reset.show();

    coneVol(x,y);

    reset.mouseReleased(()=>{
      gameState = "ConeVolume";
      radius.value(0);
      heights.value(0);
    });
  }

  if(gameState==="ConeC.S.A") {
    radius.show();
    heights.show();
    widths.hide();
    lengths.hide();
    slength.show();
    set.show();
    reset.hide();
   
    text("radius",(width/2)-100,(height/2)+10);
    text("height",(width/2)-100,(height/2)+40);
    text("or",(width/2)+115,(height/2)+35);

    set.mouseReleased(()=>{
      x = int(radius.value());
      y = int(heights.value());
      z = int(slength.value());
      gameState = "coca";
    });
  }

  if(gameState==="coca"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    console.log(slength.value(),z);

    if(z !== 0) {
      coneCSA(x,z);
    }else {
       coneCSAA(x,y);
     }

    reset.mouseReleased(()=>{
      gameState = "ConeC.S.A";
      radius.value(0);
      heights.value(0);
    });
  }

  if(gameState==="ConeT.S.A") {
    radius.show();
    heights.show();
    widths.hide();
    lengths.hide();
    slength.show();
    set.show();
    reset.hide();

    text("radius",(width/2)-100,(height/2)+10);
    text("height",(width/2)-100,(height/2)+40);

    set.mouseReleased(()=>{
      x = int(radius.value());
      y = int(heights.value());
      z = int(slength.value());
      gameState = "cota";
    });
  }

  if(gameState==="cota"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    if(z !== 0) {
      coneTSA(x,z);
    }else {
       coneTSAA(x,y);
     }
    

    reset.mouseReleased(()=>{
      gameState = "ConeT.S.A";
      radius.value(0);
      heights.value(0);
    });
  }

  if(gameState==="SphereT.S.A") {
    radius.show();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.show();
    reset.hide();

    text("radius",(width/2)-100,(height/2)+10);

    set.mouseReleased(()=>{
      x = int(radius.value());
      gameState = "sta";
    });
  }

  if(gameState==="sta"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    sphereTSA(x);
    
    reset.mouseReleased(()=>{
      gameState = "SphereT.S.A";
      radius.value(0);
    });
  }

  if(gameState==="SphereC.S.A") {
    radius.show();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.show();
    reset.hide();

    text("radius",(width/2)-100,(height/2)+10);

    set.mouseReleased(()=>{
      x = int(radius.value());
      gameState = "sca";
    });
  }

  if(gameState==="sca"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    sphereCSA(x);
    
    reset.mouseReleased(()=>{
      gameState = "SphereC.S.A";
      radius.value(0);
    });
  }

  if(gameState==="SphereVolume") {
    radius.show();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.show();
    reset.hide();

    text("radius",(width/2)-100,(height/2)+10);

    set.mouseReleased(()=>{
      x = int(radius.value());
      gameState = "sva";
    });
  }

  if(gameState==="sva"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    sphereVol(x);
    
    reset.mouseReleased(()=>{
      gameState = "SphereVolume";
      radius.value(0);
    });
  }

  if(gameState==="HemisphereVolume") {
    radius.show();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.show();
    reset.hide();

    text("radius",(width/2)-100,(height/2)+10);

    set.mouseReleased(()=>{
      x = int(radius.value());
      gameState = "hva";
    });
  }

  if(gameState==="hva"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    hemispereVol(x);
    
    reset.mouseReleased(()=>{
      gameState = "HemisphereVolume";
      radius.value(0);
    });
  }

  if(gameState==="HemisphereT.S.A") {
    radius.show();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.show();
    reset.hide();

    text("radius",(width/2)-100,(height/2)+10);

    set.mouseReleased(()=>{
      x = int(radius.value());
      gameState = "hta";
    });
  }

  if(gameState==="hta"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    hemispereTSA(x);
    
    reset.mouseReleased(()=>{
      gameState = "HemisphereT.S.A";
      radius.value(0);
    });
  }

  if(gameState==="HemisphereC.S.A") {
    radius.show();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.show();
    reset.hide();

    text("radius",(width/2)-100,(height/2)+10);

    set.mouseReleased(()=>{
      x = int(radius.value());
      gameState = "hca";
    });
  }

  if(gameState==="hca"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    hemispereCSA(x);
    
    reset.mouseReleased(()=>{
      gameState = "HemisphereC.S.A";
      radius.value(0);
    });
  }

  if(gameState==="CubeC.S.A") {
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.show();
    slength.hide();
    set.show();
    reset.hide();

    text("side",(width/2)-100,(height/2)-20);

    set.mouseReleased(()=>{
      x = int(lengths.value());
      gameState = "cuca";
    });
  }

  if(gameState==="cuca"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    cubeCSA(x);
    
    reset.mouseReleased(()=>{
      gameState = "CubeC.S.A";
      lengths.value(0);
    });
  }

  if(gameState==="CubeT.S.A") {
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.show();
    slength.hide();
    set.show();
    reset.hide();

    text("side",(width/2)-100,(height/2)-20);

    set.mouseReleased(()=>{
      x = int(lengths.value());
      gameState = "cuta";
    });
  }

  if(gameState==="cuta"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    cubeTSA(x);
    
    reset.mouseReleased(()=>{
      gameState = "CubeT.S.A";
      lengths.value(0);
    });
  }

  if(gameState==="CubeVolume") {
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.show();
    slength.hide();
    set.show();
    reset.hide();

    text("side",(width/2)-100,(height/2)-20);

    set.mouseReleased(()=>{
      x = int(lengths.value());
      gameState = "cuva";
    });
  }

  if(gameState==="cuva"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    cubeVol(x);
    
    reset.mouseReleased(()=>{
      gameState = "CubeVolume";
      lengths.value(0);
    });
  }

  if(gameState==="CuboidVolume") {
    radius.hide();
    heights.show();
    widths.show();
    lengths.show();
    slength.hide();
    set.show();
    reset.hide();

    text("length",(width/2)-100,(height/2)-20);
    text("width",(width/2)-100,(height/2)+10);
    text("height",(width/2)-100,(height/2)+40);

    set.mouseReleased(()=>{
      x = int(lengths.value());
      y = int(widths.value());
      z = int(heights.value());
      gameState = "cubva";
    });
  }

  if(gameState==="cubva"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    cuboidVol(x,y,z);
    
    reset.mouseReleased(()=>{
      gameState = "CuboidVolume";
      lengths.value(0);
      widths.value(0);
      heights.value(0);
    });
  }

  if(gameState==="CuboidC.S.A") {
    radius.hide();
    heights.show();
    widths.show();
    lengths.show();
    slength.hide();
    set.show();
    reset.hide();

    text("length",(width/2)-100,(height/2)-20);
    text("width",(width/2)-100,(height/2)+10);
    text("height",(width/2)-100,(height/2)+40);

    set.mouseReleased(()=>{
      x = int(lengths.value());
      y = int(widths.value());
      z = int(heights.value());
      gameState = "cubca";
    });
  }

  if(gameState==="cubca"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    cuboidCSA(x,y,z);
    
    reset.mouseReleased(()=>{
      gameState = "CuboidC.S.A";
      lengths.value(0);
      widths.value(0);
      heights.value(0);
    });
  }

  if(gameState==="CuboidT.S.A") {
    radius.hide();
    heights.show();
    widths.show();
    lengths.show();
    slength.hide();
    set.show();
    reset.hide();

    text("length",(width/2)-100,(height/2)-20);
    text("width",(width/2)-100,(height/2)+10);
    text("height",(width/2)-100,(height/2)+40);

    set.mouseReleased(()=>{
      x = int(lengths.value());
      y = int(widths.value());
      z = int(heights.value());
      gameState = "cubta";
    });
  }

  if(gameState==="cubta"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    cuboidTSA(x,y,z);
    
    reset.mouseReleased(()=>{
      gameState = "CuboidT.S.A";
      lengths.value(0);
      widths.value(0);
      heights.value(0);
    });
  }

  if(gameState==="SquarePerimeter") {
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.show();
    slength.hide();
    set.show();
    reset.hide();

    text("length",(width/2)-100,(height/2)-20);

    set.mouseReleased(()=>{
      x = int(lengths.value());
      gameState = "sqpa";
    });
  }

  if(gameState==="sqpa"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    squarePerimeter(x);
    
    reset.mouseReleased(()=>{
      gameState = "SquarePerimeter";
      lengths.value(0);
    });
  }

  if(gameState==="SquareArea") {
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.show();
    slength.hide();
    set.show();
    reset.hide();

    text("length",(width/2)-100,(height/2)-20);

    set.mouseReleased(()=>{
      x = int(lengths.value());
      gameState = "sqaa";
    });
  }

  if(gameState==="sqaa"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    squareArea(x);
    
    reset.mouseReleased(()=>{
      gameState = "SquareArea";
      lengths.value(0);
    });
  }

  if(gameState==="RectanglePerimeter") {
    radius.hide();
    heights.hide();
    widths.show();
    lengths.show();
    slength.hide();
    set.show();
    reset.hide();

    text("length",(width/2)-100,(height/2)-20);
    text("width",(width/2)-100,(height/2)+10);

    set.mouseReleased(()=>{
      x = int(lengths.value());
      y = int(widths.value());
      gameState = "rpa";
    });
  }

  if(gameState==="rpa"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    rectanglePerimeter(x,y);
    
    reset.mouseReleased(()=>{
      gameState = "RectanglePerimeter";
      lengths.value(0);
      widths.value(0);
    });
  }

  if(gameState==="RectangleArea") {
    radius.hide();
    heights.hide();
    widths.show();
    lengths.show();
    slength.hide();
    set.show();
    reset.hide();

    text("length",(width/2)-100,(height/2)-20);
    text("width",(width/2)-100,(height/2)+10);

    set.mouseReleased(()=>{
      x = int(lengths.value());
      y = int(widths.value());
      gameState = "raa";
    });
  }

  if(gameState==="raa"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    rectangleArea(x,y);
    
    reset.mouseReleased(()=>{
      gameState = "RectangleArea";
      lengths.value(0);
      widths.value(0);
    });
  }

  if(gameState==="CircleCircumference") {
    radius.show();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.show();
    reset.hide();

    text("radius",(width/2)-100,(height/2)+10);

    set.mouseReleased(()=>{
      x = int(radius.value());
      gameState = "cica";
    });
  }

  if(gameState==="cica"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    circleCircumference(x);
    
    reset.mouseReleased(()=>{
      gameState = "CircleCircumference";
      radius.value(0);
    });
  }

  if(gameState==="CircleArea") {
    radius.show();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.show();
    reset.hide();

    text("radius",(width/2)-100,(height/2)+10);

    set.mouseReleased(()=>{
      x = int(radius.value());
      gameState = "ciaa";
    });
  }

  if(gameState==="ciaa"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    circleArea(x);
    
    reset.mouseReleased(()=>{
      gameState = "CircleArea";
      radius.value(0);
    });
  }

  if(gameState==="ParallelogramPerimeter") {
    radius.hide();
    heights.show();
    widths.show();
    lengths.hide();
    slength.hide();
    set.show();
    reset.hide();

    text("height",(width/2)-100,(height/2)+40);
    text("base",(width/2)-100,(height/2)+10);

    set.mouseReleased(()=>{
      x = int(widths.value());
      y = int(heights.value());
      gameState = "ppa";
    });
  }

  if(gameState==="ppa"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    parallelogramPerimeter(x,y);
    
    reset.mouseReleased(()=>{
      gameState = "ParallelogramPerimeter";
      heights.value(0);
      widths.value(0);
    });
  }

  if(gameState==="ParallelogramArea") {
    radius.hide();
    heights.show();
    widths.show();
    lengths.hide();
    slength.hide();
    set.show();
    reset.hide();

    text("height",(width/2)-100,(height/2)+40);
    text("base",(width/2)-100,(height/2)+10);

    set.mouseReleased(()=>{
      x = int(widths.value());
      y = int(heights.value());
      gameState = "paa";
    });
  }

  if(gameState==="paa"){
    radius.hide();
    heights.hide();
    widths.hide();
    lengths.hide();
    slength.hide();
    set.hide();
    reset.show();

    parallelogramArea(x,y);
    
    reset.mouseReleased(()=>{
      gameState = "ParallelogramArea";
      heights.value(0);
      widths.value(0);
    });
  }
}

function cylinderVol(r,h) {
  noStroke();
  fill(255);
  text(22/7*r*r*h,(width/2)-50,height/2);
}

function cylinderCSA(r,h) {
  noStroke();
  fill(255);
  text(2*22/7*r*h,(width/2)-50,height/2);
}

function cylinderTSA(r,h) {
  noStroke();
  fill(255);
  text(2*22/7*r*(r+h),(width/2)-50,height/2);
}

function coneVol(r,h) {
  noStroke();
  fill(255);
  text(1/3*22/7*r*r*h,(width/2)-50,height/2);
}

function coneCSA(r,l) {
  noStroke();
  fill(255);
  text(22/7*r*l,(width/2)-50,height/2);
}

function coneTSA(r,l) {
  noStroke();
  fill(255);
  text(22/7*r*(r+l),(width/2)-50,height/2);
}

function coneCSAA(r,h) {
  noStroke();
  fill(255);
  text(22/7*r*(sqrt((h*h+r*r))),(width/2)-50,height/2);
}

function coneTSAA(r,h) {
  noStroke();
  fill(255);
  text(22/7*r*(r+(sqrt((h*h+r*r)))),(width/2)-50,height/2);
}

function sphereCSA(r) {
  noStroke();
  fill(255);
  text(4*22/7*r*r,(width/2)-50,height/2);
}

function sphereTSA(r) {
  noStroke();
  fill(255);
  text(4*22/7*r*r,(width/2)-50,height/2);
}

function sphereVol(r) {
  noStroke();
  fill(255);
  text(4/3*22/7*r*r*r,(width/2)-50,height/2);
}

function hemispereTSA(r) {
  noStroke();
  fill(255);
  text(3*22/7*r*r,(width/2)-50,height/2);
}

function hemispereCSA(r) {
  noStroke();
  fill(255);
  text(2*22/7*r*r,(width/2)-50,height/2);
}

function hemispereVol(r) {
  noStroke();
  fill(255);
  text(2/3*22/7*r*r*r,(width/2)-50,height/2);
}

function cubeTSA(s) {
  noStroke();
  fill(255);
  text(6*s*s,(width/2)-50,height/2);
}

function cubeCSA(s) {
  noStroke();
  fill(255);
  text(4*s*s,(width/2)-50,height/2);
}

function cubeVol(s) {
  noStroke();
  fill(255);
  text(s*s*s,(width/2)-50,height/2);
}

function cuboidTSA(l,b,h) {
  noStroke();
  fill(255);
  text(2*((l*b)+(l*h)+(b*h)),(width/2)-50,height/2);
}

function cuboidCSA(l,b,h) {
  noStroke();
  fill(255);
  text(2*h*(b+l),(width/2)-50,height/2);
}

function cuboidVol(l,b,h) {
  noStroke();
  fill(255);
  text(l*b*h,(width/2)-50,height/2);
}

function squarePerimeter(s) {
  noStroke();
  fill(255);
  text(4*s,(width/2)-50,height/2);
}

function squareArea(s) {
  noStroke();
  fill(255);
  text(s*s,(width/2)-50,height/2);
}

function rectanglePerimeter(l,b) {
  noStroke();
  fill(255);
  text(2*(l+b),(width/2)-50,height/2);
}

function rectangleArea(l,b) {
  noStroke();
  fill(255);
  text(l*b,(width/2)-50,height/2);
}

function circleCircumference(r) {
  noStroke();
  fill(255);
  text(2*22/7*r,(width/2)-50,height/2);
}

function circleArea(r) {
  noStroke();
  fill(255);
  text(22/7*r*r,(width/2)-50,height/2);
}

/*function rhombusPerimeter() {
  noStroke();
  fill(255);
  text(,(width/2)-50,height/2);
}

function rhombusArea() {
  noStroke();
  fill(255);
  text(,(width/2)-50,height/2);
}*/

/*function trepazium() {
  noStroke();
  fill(255);
  text(,(width/2)-50,height/2);
}

function trepazium(p1,p2) {
  noStroke();
  fill(255);
  text(,(width/2)-50,height/2);
}*/

function parallelogramPerimeter(b,h) {
  noStroke();
  fill(255);
  text(2*(b+h),(width/2)-50,height/2);
}

function parallelogramArea(b,h) {
  noStroke();
  fill(255);
  text(b*h,(width/2)-50,height/2);
}

/*function triangle(s) {
  noStroke();
  fill(255);
  text(,(width/2)-50,height/2);
}

function triangle(b,h) {
  noStroke();
  fill(255);
  text(,(width/2)-50,height/2);
}

function semicircle(r) {
  noStroke();
  fill(255);
  text(,(width/2)-50,height/2);
}

function semicircle(r) {
  noStroke();
  fill(255);
  text(,(width/2)-50,height/2);
}*/