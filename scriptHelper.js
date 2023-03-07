// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput === "") {
    return "Empty";
   } 
   let toNumber = Number(testInput);
   if (toNumber === "number") {
    return "Is a Number";
   } else {
    return "Not a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotValidity = validateInput(pilot);
   let copilotValidity = validateInput(copilot);
   let fuelLevelValidity = validateInput(fuelLevel);
   let cargoLevelValidity = validateInput(cargoLevel);

   if (pilotValidity !== "Not a Number") {
    alert("Invalid input for pilot, please enter a name.")
   }
   if (copilotValidity !== "Not a Number") {
    alert("Invalid input for copilot, please enter a name.")
   }
   if (fuelLevelValidity !== "Is a Number") {
    alert("Invalid input for fuel level, please enter a number.")
   }
   if (cargoLevelValidity !== "Is a Number") {
    alert("Invalid input for cargo level, please enter a number.")
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
