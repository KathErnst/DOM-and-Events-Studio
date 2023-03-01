// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
    const takeOffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");
    
    const shuttleBackground = document.getElementById("shuttleBackground");
    const flightStatus = document.getElementById("flightStatus");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket");

    let rocketPosX = 0;
    let rocketPosY = 0;
    let altitude = 0;

    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");

    takeOffButton.addEventListener("click", function() {
        let ready = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (ready) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = 10000;
        }
    });
    landButton.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });
    missionAbortButton.addEventListener("click", function () {
        let abort = window.confirm("Confirm that you want to abort the mission.");
        if (abort) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    });
    upButton.addEventListener("click", function () {
        altitude += 10000 
        spaceShuttleHeight.innerHTML = altitude;
         rocketPosY += 10;
         rocket.style.marginBottom = rocketPosY + 'px';
    });

    downButton.addEventListener("click", function () {
        altitude -= 10000 
        spaceShuttleHeight.innerHTML = altitude;
        rocketPosY -= 10;
        rocket.style.marginBottom = rocketPosY + 'px';
   });

   leftButton.addEventListener("click", function () {
        rocketPosX -= 10;
        rocket.style.marginLeft = rocketPosX + 'px';
});

    rightButton.addEventListener("click", function () {
        rocketPosX += 10;
        rocket.style.marginLeft = rocketPosX + 'px';
});

})