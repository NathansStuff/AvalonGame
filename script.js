var players = 0
const radius = 150;
const parentdiv = document.getElementById('parentdiv');
// parseInt fetches integer from string
// offsetwidth returns html width
const offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2);
const offsetToChildCenter = 20;
const totalOffset = offsetToParentCenter - offsetToChildCenter;

const startButton = document.getElementById('startButton')
const joinButton = document.getElementById("joinButton");
const leaveButton = document.getElementById("leaveButton");

// fetches and resets all player circles
function removeCircles() {
    const allChildDivs = document.getElementsByClassName('playerCircle')
    while (allChildDivs[0]) {
        allChildDivs[0].parentNode.removeChild(allChildDivs[0]);
    }
}

function addCircles() {
    for (var i = 1; i <= players; ++i) {
        // create a div
        const childdiv = document.createElement('playerCircle');
        // give it a class
        childdiv.className = 'playerCircle';
        // determine the xy coordinates
        var div = 360 / players;
        const y = Math.sin((div * i) * (Math.PI / 180)) * radius;
        const x = Math.cos((div * i) * (Math.PI / 180)) * radius;
        // offset it
        childdiv.style.top = (y + totalOffset).toString() + "px";
        childdiv.style.left = (x + totalOffset).toString() + "px";
        parentdiv.appendChild(childdiv);
    }
    if (players >= 5) {
        startButton.disabled = false;
    } else {
        startButton.disabled = true;
    }
    if (players >= 10) {
        joinButton.disabled = true;
    } else {
        joinButton.disabled = false;
    }
    if (players < 1) {
        leaveButton.disabled = true;
    }
    else {
        leaveButton.disabled = false;
    }
}

// Join Button
joinButton.addEventListener("click", joinFunction);

function joinFunction() {
    players ++;
    removeCircles();
    addCircles();
}

// Leave Button
leaveButton.addEventListener("click", leaveFunction);

function leaveFunction() {
    players --;
    removeCircles();
    addCircles();
}