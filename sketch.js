

var a = prompt("enter a value");

var b = prompt("enter a value");

function setup(){
  createCanvas(400, 400);
b2 = createButton("click here to Swap");

  }

function draw()
{
  b2.mousePressed(swap);
}

function swap()
{
  [a,b]=[b,a]
  console.log(a)
  console.log(b)
}