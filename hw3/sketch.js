function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    drawCreature(92, 115, 100, '#5e6976', '#1b324d');
    drawCreature(487, 110, 100, '#bfdc65', '#abb880');
    drawCreature(454, 423, 100, '#aebb83', '#227876');
    drawCreature(333, 227, 100, '#94ba77', '#3f5364');
    drawCreature(117, 314, 100, '#648d8e', '#afc272');
    drawCreature(900, 200, 100, 'grey', 'black')
   
    
    drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:

function drawCreature(centerX, centerY, size, color1, color2){
    
    fill(color1);
    rect(centerX, centerY, size * .75, size * .5)
    circle(centerX - size * .025, centerY + size * .25, size * .5)
    triangle(centerX + 30, centerY + 200 , centerX + 125, 
            centerY - 75, centerX + 210, centerY + 200 )
     

    circle(centerX + size * 1, centerY + size * .175, size * 1);
    fill(color2)
    circle(centerX + size * .75, centerY - size * .01, size * .15);
    circle(centerX - size * .1, centerY + size * .1, size * .075);
    

}


