let hospitals = [
  {
    "id": 1,
    "name": "Hospital A",
    "location": "Delhi",
    "noOfBeds": 450,
    "availability": "Yes"
  },
  {
    "id": 2,
    "name": "Hospital B",
    "location": "Pune",
    "noOfBeds": 150,
    "availability": "No"
  },
  {
    "id": 3,
    "name": "Hospital C",
    "location": "Pune",
    "noOfBeds": 350,
    "availability": "Yes"
  }
];

// Filter hospitals according to Number of Beds > 200
let filteredByBeds = hospitals.filter(hospital => hospital.noOfBeds > 200);

// Filter hospitals according to Availability of Beds = Yes
let filteredByAvailability = hospitals.filter(hospital => hospital.availability === 'Yes');

// Filter hospitals according to Location = Pune
let filteredByLocation = hospitals.filter(hospital => hospital.location === 'Pune');

// Display the filtered hospitals
console.log("Filter By Beds",filteredByBeds);
console.log("Filter By Availbility",filteredByAvailability);
console.log("Filter By Location",filteredByLocation);
