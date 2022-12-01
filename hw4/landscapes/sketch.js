const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
    
    // picks a random number between 0 and 100:
    let rando = Math.random() * 100;
    console.log(rando);
    
    // picks a random number between 10 and 500:
    rando = Math.random() * 490 + 10;
    console.log(rando);
    
    // draws 4 stars: 
    strokeWeight(0);
    fill('white');
    circle(50, 80, 2.5);
    circle(50, 400, 1.5);
    circle(600, 287, 3);
    circle(400, 143, 1.5);
}

function drawStars() {
     
    const ball = {
        x: randomIntFromInterval(0, canvasWidth), 
        y: randomIntFromInterval(0, canvasHeight),
        d: randomIntFromInterval(10, 75),
        speedX: 3,
        speedY: 2,
        
    };
    i++;
    circle(ball.x, ball.y, ball.d)
    fill('lightblue')
}

    strokeWeight(0);
    fill('white');
    for (let i = 0; i < 1000; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 2 + 0.5;
        circle(x, y, width);
    }


function drawBubbles() {
    strokeWeight(1);
    stroke('white');
    noFill()
    for (let i = 0; i < 500; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 40 + 5;
        circle(x, y, width);
    }
}

