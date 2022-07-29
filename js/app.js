"use strict";
let i = 0;
const hours = [6,7,8,9,10,11,12,1,2,3,4,5,6,7];
let locations = [];
let totalArr = [[],[],[],[],[]];
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
        max: 38,
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
return avgHourlyCookies;
}


function hourlyList() {
    // code in here to add hourly cookie sales list to div for each city
    let morning = 'am: '
    let afternoon = 'pm: '

    while (i < hours.length) {
        i++;
        totalArr[0].push(calcHourlyCookies()[0])
        totalArr[1].push(calcHourlyCookies()[1])
        totalArr[2].push(calcHourlyCookies()[2])
        totalArr[3].push(calcHourlyCookies()[3])
        totalArr[4].push(calcHourlyCookies()[4])
    }

    const sum1 = totalArr[0].reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
    const sum2 = totalArr[1].reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
    const sum3 = totalArr[2].reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
    const sum4 = totalArr[3].reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
    const sum5 = totalArr[4].reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);

    for (let i = 0; i < hours.length + 1; i++) {
        let list1 = document.createElement('li');
        let j = hours[i];
        if (i < 6) {
            document.getElementById('seattle-list').appendChild(list1); 
            list1.appendChild(document.createTextNode(j + morning + totalArr[0][i] + ' cookies sold.'));
        } else if (i >= 6 && i != 14) {
            document.getElementById('seattle-list').appendChild(list1); 
            list1.appendChild(document.createTextNode(j + afternoon + totalArr[0][i] + ' cookies sold.'));
        } else if (i = 14) {
            document.getElementById('seattle-list').appendChild(list1); 
            list1.appendChild(document.createTextNode(sum1 + ' total cookies sold.')); 
        }
    }
    
    for (let i = 0; i < hours.length + 1; i++) {
        let list2 = document.createElement('li');
        let j = hours[i];
        if (i < 6) {
            document.getElementById('tokyo-list').appendChild(list2); 
            list2.appendChild(document.createTextNode(j + morning + totalArr[1][i] + ' cookies sold.'));
        } else if (i >= 6 && i != 14) {
            document.getElementById('tokyo-list').appendChild(list2); 
            list2.appendChild(document.createTextNode(j + afternoon + totalArr[1][i] + ' cookies sold.'));
        } else if (i = 14) {
            document.getElementById('tokyo-list').appendChild(list2); 
            list2.appendChild(document.createTextNode(sum2 + ' total cookies sold.'));
        }
    }

    for (let i = 0; i < hours.length + 1; i++) {
        let list3 = document.createElement('li');
        let j = hours[i];
        if (i < 6) {
            document.getElementById('dubai-list').appendChild(list3); 
            list3.appendChild(document.createTextNode(j + morning + totalArr[2][i] + ' cookies sold.'));
        } else if (i >= 6 && i != 14) {
            document.getElementById('dubai-list').appendChild(list3); 
            list3.appendChild(document.createTextNode(j + afternoon + totalArr[2][i] + ' cookies sold.'));
        } else if (i = 14) {
            document.getElementById('dubai-list').appendChild(list3); 
            list3.appendChild(document.createTextNode(sum3 + ' total cookies sold.'));
        }
    }
  
    for (let i = 0; i < hours.length + 1; i++) {
        let list4 = document.createElement('li');
        let j = hours[i];
        if (i < 6) {
            document.getElementById('paris-list').appendChild(list4); 
            list4.appendChild(document.createTextNode(j + morning + totalArr[3][i] + ' cookies sold.'));
        } else if (i >= 6 && i != 14) {
            document.getElementById('paris-list').appendChild(list4); 
            list4.appendChild(document.createTextNode(j + afternoon + totalArr[3][i] + ' cookies sold.'));
        } else if (i = 14) {
            document.getElementById('paris-list').appendChild(list4); 
            list4.appendChild(document.createTextNode(sum4 + ' total cookies sold.'));
        }
    }
   
    for (let i = 0; i < hours.length + 1; i++) {
        let list5 = document.createElement('li');
        let j = hours[i];
        if (i < 6) {
            document.getElementById('lima-list').appendChild(list5); 
            list5.appendChild(document.createTextNode(j + morning + totalArr[4][i] + ' cookies sold.'));
        } else if (i >= 6 && i != 14) {
            document.getElementById('lima-list').appendChild(list5); 
            list5.appendChild(document.createTextNode(j + afternoon + totalArr[4][i] + ' cookies sold.'));
        } else if (i = 14) {
            document.getElementById('lima-list').appendChild(list5); 
            list5.appendChild(document.createTextNode(sum5 + ' total cookies sold.')); 
        }
    }
}
hourlyList();