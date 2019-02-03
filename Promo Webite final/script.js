function drawSunset()
{

    drawRectangle();
    drawSun();
    drawImage();
}

function drawRectangle()
{
    var canvas = document.getElementById("myCanvas");

    var ctx = canvas.getContext("2d");

    // Create gradient; got this from w3schools
    var grd = ctx.createLinearGradient(0,0,0,300);
    grd.addColorStop(0,"orange");
    grd.addColorStop(1,"red");

// Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,window.innerWidth, window.innerHeight);

}

function drawSun()
{
    var canvas = document.getElementById("myCanvas");

    var ctx = canvas.getContext("2d");
    ctx.rotate(360 * Math.PI / 180);


    // background
    //ctx.fillStyle = "#F1F1F1";
    //ctx.fillRect(0,0,500,500);
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 0.5;
    ctx.arc(250,300,100,(Math.PI/180)*0,(Math.PI/180)*360,false);
    // create radial gradient
    var grdRadial = ctx.createRadialGradient(250, 250, 150, 38, 50, 300);
    // light red
    grdRadial.addColorStop(0, 'red');
    // dark red
    grdRadial.addColorStop(1, 'orange');
    ctx.fillStyle = grdRadial;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

var pic1 = new Image(); //create a new image OBJECT and attach it to a ref variable
pic1.src = "img/blackbird.png";

function drawImage()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(pic1,190,50,350,120); //picture, x-coord, y-coord, height, width
}

//function movePicture()
//{
//var ctx = document.getElementById("myCanvas").getContext("2d");
  //  rectX = rectX + moveAmountX;
    //rectY = rectY + moveAmountY; //move 4 pixels every refresh
    //ctx.fillStyle = "#baacf2";
    //ctx.drawImage(pic1,200,200,100,100);
//}
