// a Bezier Curve is defined by its control points 
// Take a bezier curve with 3 control points A, B, C (A quadratic bezier curve) 
// as time passes we have a points P and Q which "walk" along
// lines AB and BC respectively using the linInterpolate method from the Point class 

// There is then a final point K which 'walks' along the line PQ. 
// The coordinates that K passes through is the Bezier Curve. These coords are stored in an array called 
// curvePoint and they are drawn each frame. 

//This idea generalises to more control points where we have points walking along lines which
//create more lines of points walking across them etc... 

function bezier(points){7
    //points is an array of Point objects
    //bezier(points) returns the array of points which are walking along the points in points array
    //This process is repeated recursively until we reach a points array of length 2 
    //Which we then return the final walking point, which actually defines the Bezier Curve
    
    let level = points.length
    if(level <= 2){
        // If we have 2 points then all we want is one walking along them and then we are finished
        let newP = new Point(0,0)
        newP.linInterpolate(points[0],points[1]) //This is the 'walking' action of the points
        if(showLines){
            points[0].line(points[1])
        }
        newP.draw(8,"Red") //colour the main point RED AND BIG
        if(curvePoint.length < 1000){
            curvePoint.push(newP) //add it to array of all points its been through so we can trace it
        }
    }
    else {
        var newPoints = [];
        for(let i = 0; i < level-1; i++){ //We only go to level - 1 since there will be 1 less points returned than in the points array
            newPoints[i] = new Point(0,0)
            newPoints[i].linInterpolate(points[i], points[i+1]) //find the interpolation between two adjacent points

            if(showLines){
                points[i].line(points[i+1]) // Draw a line between them if showLines boolean is TRUE 
            }

            newPoints[i].draw(5, "Yellow") //all walking points that arent main have colour YELLOW
        }
        bezier(newPoints) //recursively call the bezier function till we hit level 2
    }
}