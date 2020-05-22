var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth
canvas.height = 600;

var delay = 1 //this is how often the main function is called in real time
var time = 0;
var step = 0.001; //This is how fine the time intervals are

var controls = [] // Array of control points
var curvePoint = []; // Array of all the points which the main dot has passed through

var clickMode = false; //whether we are allowed to click or not
var start = false; //whether we will continue to call main
var numberOfControls = 0;
var showLines = false;

function rand(lo,hi){
    // Returns a random number between range lo and hi
    return Math.random()*(hi-lo) + lo
}

function randColour(){
    return "rgb(" + String(Math.floor(Math.random()*255)) + "," +  String(Math.floor(Math.random()*255)) + "," + String(Math.floor(Math.random()*255))
}

function beginClicking(){
    wipe();
    clickMode = true;
}

function click(e){
    // Creates a control points for the Bezier Curve where the mouse is clicked
    let x = Math.floor(e.clientX)
    let y = Math.floor(e.clientY)
    if(x >= 0 && x <= canvas.width && y <= canvas.height && y >=0 && clickMode){
        numberOfControls++
        let p = new Point(x,y)
        controls.push(p)

        p.draw(15,"White")
        ctx.strokeStyle = "Blue"
        ctx.font = "20px Arial"
        ctx.strokeText(numberOfControls, p.x, p.y) //Writes the 
    }
}

document.addEventListener("mousedown", click); //This checks for a mouseclick and then activates printMousePos



function main(){
    document.getElementById("click_mode").innerHTML = "Click mode: " + String(clickMode);

    if(start){
        ctx.clearRect(0,0,canvas.width, canvas.height) // Clear the canvas

        time += step //for the formula used in linearInterpolation: 0 < time < 1, we globally update time as it is used in the linearInterpolation 
        if (time > 1){
            time = 0;
        }

        for(let i = 0; i < controls.length; i++){
            // Draw the control points and write their respective indexes
            let p = controls[i]
            p.draw(15,"White")
            ctx.strokeStyle = "Blue"
            ctx.font = "20px Arial"
            ctx.strokeText(i, p.x, p.y)
        }

        for(let i = 0; i < curvePoint.length; i++){
            let p = curvePoint[i] //Draw all the points that the main point has been through ! this is the BEZIER CURVE
            p.draw(2,"Blue")
        }
        bezier(controls) //this finds the next arrays of walking points

    }
}


var intervalID = setInterval(main, delay) //This calls the main function after "delay" amount of time

if(!clickMode){
    randomRestart()
}
