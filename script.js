var players = 2
const radius = 150;
const parentdiv = document.getElementById('parentdiv');
// parseInt fetches integer from string
// offsetwidth returns html width
const offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2);
const offsetToChildCenter = 20;
const totalOffset = offsetToParentCenter - offsetToChildCenter;

const joinButton = document.getElementById("joinButton");

// fetches and resets all player circles
function removeCircles() {
    const allChildDivs = document.getElementsByClassName('div2')
    while (allChildDivs[0]) {
        allChildDivs[0].parentNode.removeChild(allChildDivs[0]);
    }
}

function addCircles() {
    for (var i = 1; i <= players; ++i) {
        // create a div
        const childdiv = document.createElement('div');
        // give it a class
        childdiv.className = 'div2';
        // determine the xy coordinates
        var div = 360 / players;
        const y = Math.sin((div * i) * (Math.PI / 180)) * radius;
        const x = Math.cos((div * i) * (Math.PI / 180)) * radius;
        // offset it
        childdiv.style.top = (y + totalOffset).toString() + "px";
        childdiv.style.left = (x + totalOffset).toString() + "px";
        parentdiv.appendChild(childdiv);
    }
}


joinButton.addEventListener("click", joinFunction);

function joinFunction() {
    players ++;
    console.log(players)
    removeCircles();
    addCircles();
}

