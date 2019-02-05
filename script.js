function drawSunset()
{

    drawRectangle();
    drawSun();
    drawImage();
    movePic();
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

    // background
    //ctx.fillStyle = "#F1F1F1";
    //ctx.fillRect(0,0,500,500);
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 0.5;
    ctx.arc(250,320,100,(Math.PI/180)*0,(Math.PI/180)*360,false);
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
    ctx.drawImage(pic1,190,50,350,90); //picture, x-coord, y-coord, height, width
}
function movePic()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    picX = picX + moveX;
    picY = picY + moveY;
    pic2X = pic2X + move2X;
    pic2Y = pic2Y + move2Y;
    ctx.drawImage(pic1, picX, picY, picW, picH);
    ctx.drawImage(pic2, pic2X, pic2Y, pic2W, pic2H);
}

