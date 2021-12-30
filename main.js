//Create a reference for canvas (done)
canvas = document.getElementById("Mycanvas");

ctx = canvas.getContext("2d");

greencar_width = 75;

greencar_height = 150;

//Give specific height and width to the car image(done)

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 295;

greencar_y = 335;

//Set initial position for a car image.(done)

function add() {
	//upload car, and background images on the canvas.(done)
	background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’ (done)
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’. (done)
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward (done)
	if (greencar_y >= 0){
		greencar_y -= 5;
		console.log("function up succesful " + greencar_y + greencar_x);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward (done)
	if(greencar_y <= 500){
		greencar_y += 5;
		console.log("function down succesful " + greencar_x + " " + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side (done)
	if (greencar_x >= 0){
		greencar_x -= 5;
		console.log("function left succesful " + greencar_y + " " + greencar_x);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side (done)
	if(greencar_x <= 700){
		greencar_x += 5;
		console.log("function right succesful " + greencar_y + " " + greencar_x);
		uploadBackground();
		uploadgreencar();
	}
}
