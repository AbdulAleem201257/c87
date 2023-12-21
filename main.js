canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "grey".
    Use lineWidth and set the width to 1.
    Use rect() to create a rectangle at 150 and 143
with 430 width and 200 height.
*/

ctx.___beginPath()____;
ctx.____strokeStyle___ = "grey";
ctx.___lineWidth____ = 1;
ctx.____rect()___(x,150 y,143 width,430 height,200);
ctx.___rect()____(x,150 y,143 width, 430height,200);
ctx.___rect()__(x,150 y,143 width, 430height,200);
ctx.stroke();

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "blue".
    Use lineWidth and set the width to 5.
    Use arc() to create a circle at x = 250 and y = 210
with 40 as radius, 0 startAngle and 2 * Math.PI endAngle.
*/

ctx.__ beginPath() _____;
ctx.___strokeStyle____ = "blue";
ctx.lineWidth______ = 5;
ctx.___arc()____(x,250 y,210 r,40 startAngle,2 * Math.PI endAngle);
ctx.stroke();

// Similarly, create a black circle with position 350 and 210

// Similarly, create a red circle with position 210 and 40

// Similarly, create an orange circle with position 300 and 250

// Similarly, create a green circle with position 400 and 250
