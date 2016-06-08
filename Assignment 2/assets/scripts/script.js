window.onload = function() {
    
    var c = document.getElementById("main");
    window.ctx = c.getContext("2d"); // Dealing with a global context is easier
    
    ship(100, 100);
    
}

function planet(x, y) {
    ctx.translate(x, -y/2);
    ctx.rotate(0.785);
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.arc(x, y, 16, 0, 6.28, false);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "#7777ee";
    ctx.scale(2, 1);
    ctx.arc(x/2, y, 12, 0, 6.28, false);
    ctx.stroke();
}

function ship(x, y) {
    ctx.fillStyle = "#585858";
    ctx.fillRect(x, y, 20, 20);
    ctx.beginPath();
    ctx.strokeStyle = "#585858";
    ctx.arc(x + 10, y, 10, 0, 6.28, false);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "#585858";
    ctx.moveTo(x, y + 20);
    ctx.lineTo(x - 5, y + 20);
    ctx.lineTo(x, y + 10);
    ctx.fill();
    ctx.stroke();
    ctx.moveTo(x + 20, y + 20);
    ctx.lineTo(x + 25, y + 20);
    ctx.lineTo(x + 20, y + 10);
    ctx.fill();
    ctx.stroke();
    ctx.fillRect(x + 3, y + 20, 5, 3);
    ctx.fillRect(x + 12, y + 20, 5, 3);
}

function satellite(x, y) {
    ctx.fillStyle = "#000050";
    ctx.strokeStyle = "#000050";
}