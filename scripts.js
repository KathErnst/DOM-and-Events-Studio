// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landButton = document.getElementById("landing");

    takeOffButton.addEventListener("click", function() {
        let ready = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (ready) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML += 10000;
        }
    });
    landButton.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });

})