


function draw(color){
	var canvas = document.getElementById("coord");
	var ctx = canvas.getContext("2d");

	ctx.font = "30px Linden Hill";
	ctx.fillStyle = "darkcyan";
	ctx.textAlign = "center";

	ctx.lineWidth = 2;
	ctx.strokeStyle = color;

	ctx.moveTo(150, 750);
	ctx.lineTo(1200, 750);
	ctx.stroke(); 

	ctx.moveTo(1200, 750);
	ctx.lineTo(1200-10, 750-10);
	ctx.stroke(); 
	ctx.moveTo(1200, 750);
	ctx.lineTo(1200-10, 750+10);
	ctx.stroke(); 

	ctx.moveTo(150, 750);
	ctx.lineTo(150, 100);
	ctx.stroke(); 

	ctx.moveTo(150, 100);
	ctx.lineTo(150-10, 100+10);
	ctx.stroke(); 
	ctx.moveTo(150, 100);
	ctx.lineTo(150+10, 100+10);
	ctx.stroke(); 


	ctx.fillText("Time", 675, 777); 

	ctx.fillText("Freq", 150-40, 425); 
}

// ctx.fillStyle = 'green';
// ctx.fillRect(10, 500, 150, 100);