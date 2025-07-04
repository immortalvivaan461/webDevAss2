let intervalId;
let startTime;
let getStarted = false;

function randomposition() {
    intervalId = setInterval(() => {
        let x = Math.floor(Math.random() * (800 - 40 + 1)) + 40;
        let y = Math.floor(Math.random() * (500 - 40 + 1)) + 40;

        let box = document.getElementById("box");
        box.style.left = `${x}px`;
        box.style.top = `${y}px`;

    }, 1000);

}
document.getElementById("start-btn").onclick = function () {
    randomposition();
    getStarted = true;
    startTime = Date.now();
    document.getElementById("start-btn").innerText = "Speed 🚀"
    document.getElementById("stop-btn").innerText = "STOP";
}

document.getElementById("stop-btn").onclick = function () {
    clearInterval(intervalId);
    getStarted = false;
    document.getElementById("stop-btn").innerText = "Stopped";
    document.getElementById("start-btn").innerText = "START"
};



document.getElementById("box").onclick = function () {
    let reactionTime = ((Date.now() - startTime) / 1000);
    let para = document.createElement("p");
    para.style.color = "black";
    para.style.fontWeight = "bold";
    para.innerText = `${reactionTime}`;
    document.getElementById("results").appendChild(para);

}