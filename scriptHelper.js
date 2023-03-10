// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML =  `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
   
}

function validateInput(testInput) {
    
   if (testInput === "") {
    return "Empty";
   } 
   if (isNaN(testInput)) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  
  let faultyItems = document.getElementById("faultyItems");
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelLevelStatus = document.getElementById("fuelStatus");
  let cargoMassStatus = document.getElementById("cargoStatus");
  let launchStatus = document.getElementById("launchStatus");
  
  let pilotValidity = validateInput(pilot);
   let copilotValidity = validateInput(copilot);
   let fuelLevelValidity = validateInput(fuelLevel);
   let cargoLevelValidity = validateInput(cargoLevel);
  
   if (pilotValidity === "Is a Number" || pilotValidity === "Empty") {
    alert("Invalid input for pilot, please enter a name.")
   }
   if (copilotValidity === "Is a Number" || copilotValidity === "Empty") {
    alert("Invalid input for copilot, please enter a name.")
   }
   if (fuelLevelValidity === "Not a Number" || fuelLevelValidity === "Empty") {
    alert("Invalid input for fuel level, please enter a number.")
   }
   if (cargoLevelValidity === "Not a Number" || cargoLevelValidity === "Empty") {
    alert("Invalid input for cargo level, please enter a number.")
   }

   pilotStatus.innerHTML =  `Pilot ${pilot} is ready for launch`
   copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`

    if (fuelLevel < 10000) {
      faultyItems.style.visibility = "visible";
      fuelLevelStatus.innerHTML = "Fuel level too low for launch"
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "rgb(199, 37, 78)"
   }

   if (cargoLevel > 10000) {
    faultyItems.style.visibility = "visible";
    cargoMassStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
   }

   if (fuelLevel > 10000 && cargoLevel < 10000) {
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    launchStatus.style.color = "rgb(65, 159, 106)"
    faultyItems.style.visibility = "visible";
    cargoMassStatus.innerHTML = "Cargo mass low enough for launch";
    fuelLevelStatus.innerHTML = "Fuel level high enough for launch";
   }
  }

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       
    return response.json();
  });
  return planetsReturned;
}

function pickPlanet(planets) {
  let numOfPlanets = planets.length;
  let numPicked = Math.floor(Math.random() * numOfPlanets);
  return planets[numPicked];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
