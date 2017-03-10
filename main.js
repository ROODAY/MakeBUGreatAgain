window.onload = function() {
	document.querySelector('audio').volume = 0.25;
	var listener = new window.keypress.Listener();
	var ctx;
	var imgBg;
	var imgDrops;
	var x = 0;
	var y = 0;
	var noOfDrops = 50;
	var fallingDrops = [];
	var canvas = document.getElementById('c');

	listener.sequence_combo("up up down down left right left right b a enter", function() {
	    window.location.href = "https://makebu.slack.com/";
	}, true);

    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        ctx.canvas.width  = window.innerWidth;
		ctx.canvas.height = window.innerHeight;
        for (var i = 0; i < noOfDrops; i++) {
            var fallingDr = new Object();
            fallingDr["image"] =  new Image();
            var imgNum = Math.random();
        	if (imgNum < .165) {
        		fallingDr.image.src = 'img/1.png';
        	} else if (imgNum < .33) {
        		fallingDr.image.src = 'img/2.png';
        	} else if (imgNum < .495) {
        		fallingDr.image.src = 'img/3.png';
        	} else if (imgNum < .66) {
        		fallingDr.image.src = 'img/4.png';
        	} else if (imgNum < .825) {
        		fallingDr.image.src = 'img/5.png';
        	} else if (imgNum < .99) {
        		fallingDr.image.src = 'img/6.png';
        	} else {
        		fallingDr.image.src = 'img/7.png';
        	}
            fallingDr["x"] = Math.random() * window.innerWidth;
            fallingDr["y"] = -50;//Math.random() * window.innerHeight;
            fallingDr["speed"] = 3 + Math.random() * 5;
            fallingDrops.push(fallingDr);
        }
    }

    function draw() {
    	ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i=0; i< noOfDrops; i++) {
	        ctx.drawImage (fallingDrops[i].image, fallingDrops[i].x, fallingDrops[i].y); //The rain drop
	        fallingDrops[i].y += fallingDrops[i].speed; //Set the falling speed
	        if (fallingDrops[i].y > window.innerHeight) {  //Repeat the raindrop when it falls out of view
		        fallingDrops[i].y = -50 //Account for the image size
		        fallingDrops[i].x = Math.random() * window.innerWidth;    //Make it appear randomly along the width    
	        }
        }
        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);   
}