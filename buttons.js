// This is a file for all the functions which buttons in the HTML 
// Document calls



function randomRestart(){
    //randomly initialises n control points
    //resets time
    wipe()
    for (let i = 0; i < 6; i++){
        let randx = rand(0, canvas.width)
        let randy = rand(0,canvas.height)
        controls.push(new Point(randx, randy))
        let p = controls[i]
        p.draw(15,"White")
        ctx.strokeStyle = "Blue" //draw control points
        ctx.font = "20px Arial"
        ctx.strokeText(i, p.x, p.y)
    }
}

function wipe(){
    //this completely resets everything
    ctx.clearRect(0,0,canvas.width,canvas.height)
    showLines = false;
    clickMode = false;
    controls = []; //array of control points
    curvePoint = []; //array of main point
    start = false;
    numberOfControls = 0;
    time = 0;
}
