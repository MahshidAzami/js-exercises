/* 
An array of travel destinations is defined below.
Each destination has a name, a distance from Glasgow, and a list of transportations available to go there.

1) Filter the travelDestinations array to return all destination names reachable within 500 kms.
2) Find a destination name reachable by ferry.
3) Print in the console all the destination names more than 300 kms far away and reachable by train.
*/

var destination1 = {
  destinationName: "Edinburgh",
  distanceKms: 80,
  transportations: ["car", "bus", "train"]
};

var destination2 = {
  destinationName: "London",
  distanceKms: 650,
  transportations: ["car", "bus", "train"]
};

var destination3 = {
  destinationName: "Paris",
  distanceKms: 900,
  transportations: ["train", "plane"]
};

var destination4 = {
  destinationName: "Dublin",
  distanceKms: 350,
  transportations: ["plane", "ferry"]
};

var travelDestinations = [
  destination1,
  destination2,
  destination3,
  destination4
];

/* 
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/
function getNames(destination) {
  return destination.destinationName;
}

function lessThan500Km(destination) {
  return destination.distanceKms < 500;
}
var destinationNamesWithin500Kms = travelDestinations
  .filter(lessThan500Km)
  .map(getNames); // Complete here

function includeFerry(destination) {
  return destination.transportations.includes("ferry");
}
var destinationNameReachableByFerry = travelDestinations
  .filter(includeFerry)
  .map(getNames); // Complete here

function moreThan300ByTrain(destination) {
  return (
    destination.distanceKms >= 300 &&
    destination.transportations.includes("train")
  );
}

var destinationNamesMoreThan300KmsAwayByTrain = travelDestinations
  .filter(moreThan300ByTrain)
  .map(getNames);
// Complete here (PRINT THE RESULT IN THE CONSOLE USING FOREACH)
/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  "Question 1) Expected result: Edinburgh,Dublin, actual result: " +
    destinationNamesWithin500Kms
);
console.log(
  "Question 2) Expected result: Dublin, actual result: " +
    destinationNameReachableByFerry
);
console.log(
  "Question 3) Expected result: London,Paris, actual result: " +
    destinationNamesMoreThan300KmsAwayByTrain
);
