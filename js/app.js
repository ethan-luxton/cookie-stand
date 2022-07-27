"use strict";
const locations = [];
function locationData(location) {
    const seattle = {
        min: 23,
        max: 65,
        avgCookie: 6.3,
        seattleNumCustomers: function (){
            return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        }
    };
    const tokyo = {
        min: 3,
        max: 24,
        avgCookie: 1.2,
        tokyoNumCustomers: function (){
            return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        }
    };
    const dubai = {
        min: 11,
        max: 38,
        avgCookie: 3.7,
        dubaiNumCustomers: function (){
            return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        }
    };
    const paris = {
        min: 20,
        max:38,
        avgCookie: 2.3,
        parisNumCustomers: function (){
            return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        }
    };
    const lima = {
        min: 2,
        max: 16,
        avgCookie: 4.6,
        limaNumCustomers: function (){
            return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        }
    };
    locations.push(seattle, tokyo, dubai, paris, lima);
    return locations;
    
}
locationData();

function calcHourlyCookies() {
    let avgHourlyCookies = [Math.round(locations[0].avgCookie * locations[0].seattleNumCustomers()), 
    Math.round(locations[1].avgCookie * locations[1].tokyoNumCustomers()),
    Math.round(locations[2].avgCookie * locations[2].dubaiNumCustomers()),
    Math.round(locations[3].avgCookie * locations[3].parisNumCustomers()),
    Math.round(locations[4].avgCookie * locations[4].limaNumCustomers())
    ]   
console.log(avgHourlyCookies)
return avgHourlyCookies;
}
calcHourlyCookies();

function hourlyList() {
    // code in here to add hourly cookie sales list to div for each city
}