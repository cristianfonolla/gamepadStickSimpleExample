
var ball1;
var ball2;

window.addEventListener("gamepadconnected", function(e) {

    ball1 = document.getElementById("ball1");
    ball2 = document.getElementById("ball2");
    ball1.style.backgroundColor = "green";
    ball2.style.backgroundColor = "green";
    document.getElementsByTagName("p")[0].innerHTML = e.gamepad.id;
    console.log(e.gamepad)
    updateLoop();

});

function updateLoop() {

    var gp = navigator.getGamepads()[0];
    var left = (gp.axes[0] + 1) / 2 * (window.innerWidth - ball1.offsetWidth);
    var right = (gp.axes[1] + 1) / 2 * (window.innerHeight - ball1.offsetHeight);

    var left2 = (gp.axes[2] + 1) / 2 * (window.innerWidth - ball2.offsetWidth);
    var right2 = (gp.axes[3] + 1) / 2 * (window.innerHeight - ball2.offsetHeight);



    ball1.style.left = left + "px";
    ball1.style.top =  right + "px";


    ball2.style.left = 50 + left2 + "px";
    ball2.style.top =  right2 + "px";

    if (gp.buttons[0].pressed) {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "white";
    }
    if (gp.buttons[7].pressed) {
        document.getElementsByTagName("h3")[0].innerHTML = "DISPARO 2";
    }

    if (gp.buttons[6].pressed) {
        document.getElementsByTagName("h3")[0].innerHTML = "DISPARO 1";
    }

    requestAnimationFrame(updateLoop);

}
