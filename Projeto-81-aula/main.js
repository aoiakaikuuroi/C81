var mouseEvent = "empty";
var lastPositionX, lastPositionY;

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    
    color = "red";
    widthLine = 2;

    canvas.addEventListener("mousedown", myMouseDown);

    function myMouseDown(e)
    {
        color = document.getElementById("color").value;
        widthLine = document.getElementById("widthLine").value;
        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mousemove", myMouseMove);

    function myMouseMove(e)
    {
        PositionMouseX = e.clientX - canvas.offsetLeft;
        PositionMouseY = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;
        ctx.moveTo(lastPositionX, lastPositionY);
        ctx.lineTo(PositionMouseX, PositionMouseY);
        ctx.stroke();
        }

        lastPositionX = PositionMouseX; 
        lastPositionY = PositionMouseY;
    }

    canvas.addEventListener("mouseup", myMouseUp);
    function myMouseUp(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", myMouseLeave);
    function myMouseLeave(e)
    {
        mouseEvent = "mouseleave";
    }


// Função quando o botão de limpar área for clicado
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}