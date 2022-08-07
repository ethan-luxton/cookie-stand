'use strict';
// Base definitons of each variable
let i = 0;
let hours = [6,7,8,9,10,11,12,1,2,3,4,5,6,7];
const locations = ['seattle', 'tokyo', 'dubai', 'paris', 'lima'];
const minMax = [[23, 3, 11, 20, 2],[65, 24, 38, 38, 16]]
const avgCookieSold = [6.3, 1.2, 3.7, 2.3, 4.6]
let locationDataArr = [];
let totalArr = [[],[],[],[],[]];
// Returns a random number of customers in each object defined below by numCustomers
function randomNum() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
}
// Outlines objects to be created
function createLocation(name, min, max, avgCookie) {
    let obj = {};
    obj.name = name;
    obj.min = min;
    obj.max = max;
    obj.avgCookie = avgCookie;
    obj.numCustomers = randomNum;
    return obj;
}
// Creates new array index for each new object
for (i = 0; i < locations.length; i++) {
    const name = locations[i];
    let min = minMax[0][i];
    let max = minMax[1][i];
    let avgCookie = avgCookieSold[i];
    locationDataArr.push(createLocation(name, min, max, avgCookie));
}
// Calculates number of cookies sold per hour
function calcHourlyCookies() {
    let avgHourlyCookies = []
    for (i = 0; i < 5; i++) {
        avgHourlyCookies.push(Math.round(locationDataArr[i].avgCookie * locationDataArr[i].numCustomers()))
    }
    return avgHourlyCookies;
}
function createTable() {
    // Creates hours on table
    let sum1 = [];
    let sum2 = [];
    let n = 0;
    for (let i = 0; i < hours.length + 1; i++) {
        let tableHours = document.createElement('th');
        tableHours.classList.add('hour');
        let j = hours[i];
        if (i < 6) {
            document.getElementById('time').appendChild(tableHours);
            tableHours.appendChild(document.createTextNode(j + ':00am'));
        } else if (i >= 6 && i != 14) {
            document.getElementById('time').appendChild(tableHours);
            tableHours.appendChild(document.createTextNode(j + ':00pm')); 
        } else if (i = 14) {
            document.getElementById('time').appendChild(tableHours);
            tableHours.appendChild(document.createTextNode('Daily location Total')); 
        }
    }
    // Creates table entries for each city, cookies sold in an hour, and total cookies sold in the day
    for (let i = 0; i < locationDataArr.length; i++) {
        let tableCity = document.createElement('td');
        tableCity.classList.add('city');
        document.getElementById(locations[i]).appendChild(tableCity);
        tableCity.appendChild(document.createTextNode(locationDataArr[i].name.toUpperCase()));  
    }
    for (let i = 0; i < hours.length; i++) {
        for (let j = 0; j < 5; j++) {
            // Pushes the cookies per hour into an array to get the sum
            totalArr[j].push(calcHourlyCookies()[j])
            // Creates table data for each locations cookies sold per hour  
            let tableCookies = document.createElement('td');
            tableCookies.classList.add('cookiesPerHour');
            document.getElementById(locations[j]).appendChild(tableCookies);
            tableCookies.appendChild(document.createTextNode(totalArr[j][i]));     
            // Creates total at the end of each hour and daily location total     
        }   
    }
    let arrNum = [[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    for (let i = 0; i < hours.length; i++) {
        for (let j = 0; j < 5; j++) {
            arrNum[i].push(totalArr[j][i]);
            sum1[i] = arrNum[i].reduce((val1, val2) => {
                return val1 + val2;
            }, 0); 
        }
        
        let totalCookies = document.createElement('td');
        totalCookies.classList.add('cookiesPerHour');
        document.getElementById('totals').appendChild(totalCookies);
        totalCookies.appendChild(document.createTextNode(sum1[i]));
        
    }
    let dailyTotal = [];
    for (let j = 0; j < 5; j++) {
        let totalCookies = document.createElement('td');
        totalCookies.classList.add('cookiesPerHour');
        sum2[j] = totalArr[j].reduce((val1, val2) => {
            return val1 + val2;
        }, 0);
        document.getElementById(locations[j]).appendChild(totalCookies);
        totalCookies.appendChild(document.createTextNode(sum2[j] + ' total cookies.'));
        dailyTotal.push(n += sum2[j]);
    }  
    let totalCookies = document.createElement('td');
    totalCookies.classList.add('cookiesPerHour'); 
    document.getElementById('totals').appendChild(totalCookies);
    totalCookies.appendChild(document.createTextNode(dailyTotal[4] + ' total cookies.'));
}
createTable();