# Bezier-Curves
HTML and JS implementation of Bezier Curves. 

https://en.wikipedia.org/wiki/B%C3%A9zier_curve

A Bezier Curve is defined by its control points. Take a bezier curve with 3 control points A, B, C (A quadratic bezier curve) as time passes we have a points P and Q which "walk" along lines AB and BC respectively using Linear Interpolation between the points 

There is then a final point K which 'walks' along the line PQ. The coordinates that K passes through is the Bezier Curve. 

This idea generalises to more control points where we have points walking along lines which create more lines of points walking across them etc... Hence its a good idea to implement recursion, but it may not be the most efficient method. 

Bezier Curves are used a lot in Graphic Design and computer aided drawing since it's a way to create a smooth curve that begins and ends at a point and can be morphed by a third. Lots of quadratic Bezier Curves stitched together are usually used in the making of fonts.

To use this programme click the link to the website and select one of the buttons to create control points. Press start when you want to see the bezier curve. 
