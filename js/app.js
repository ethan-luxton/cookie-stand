"use strict";
let i = 0;
const hours = [6,7,8,9,10,11,12,1,2,3,4,5,6,7];
let locations = [];
let totalArr = [[],[],[],[],[]];
function randomNum() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
}

function locationData() {
    const seattle = {
        min: 23,
        max: 65,
        avgCookie: 6.3,
        seattleNumCustomers: randomNum
    };
    const tokyo = {
        min: 3,
        max: 24,
        avgCookie: 1.2,
        tokyoNumCustomers: randomNum
    };
    const dubai = {
        min: 11,
        max: 38,
        avgCookie: 3.7,
        dubaiNumCustomers: randomNum
    };
    const paris = {
        min: 20,
        max: 38,
        avgCookie: 2.3,
        parisNumCustomers: randomNum
    };
    const lima = {
        min: 2,
        max: 16,
        avgCookie: 4.6,
        limaNumCustomers: randomNum
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

    for (let i = 0; i < hours.length; i++) {
        for (let i = 0; i < 5; i++) {
            totalArr[i].push(calcHourlyCookies()[i])
        }
    }
    let sum = [];
    for (let i = 0; i < 5; i++) {
        sum[i] = totalArr[i].reduce((val1, val2) => {
            return val1 + val2;
        }, 0);
    }
    
    for (let i = 0; i < hours.length + 1; i++) {
        let list0 = document.createElement('li');
        let list1 = document.createElement('li');
        let list2 = document.createElement('li');
        let list3 = document.createElement('li');
        let list4 = document.createElement('li');
        let j = hours[i];
        if (i < 6) {
            document.getElementById('seattle-list', 'tokyo-list').appendChild(list0); 
            list0.appendChild(document.createTextNode(j + morning + totalArr[0][i] + ' cookies sold.'));
            document.getElementById('tokyo-list').appendChild(list1); 
            list1.appendChild(document.createTextNode(j + morning + totalArr[1][i] + ' cookies sold.'));
            document.getElementById('dubai-list').appendChild(list2); 
            list2.appendChild(document.createTextNode(j + morning + totalArr[2][i] + ' cookies sold.'));
            document.getElementById('paris-list').appendChild(list3); 
            list3.appendChild(document.createTextNode(j + morning + totalArr[3][i] + ' cookies sold.'));
            document.getElementById('lima-list').appendChild(list4); 
            list4.appendChild(document.createTextNode(j + morning + totalArr[4][i] + ' cookies sold.'));
        } else if (i >= 6 && i != 14) {
            document.getElementById('seattle-list').appendChild(list0); 
            list0.appendChild(document.createTextNode(j + afternoon + totalArr[0][i] + ' cookies sold.'));
            document.getElementById('tokyo-list').appendChild(list1); 
            list1.appendChild(document.createTextNode(j + afternoon + totalArr[1][i] + ' cookies sold.'));
            document.getElementById('dubai-list').appendChild(list2); 
            list2.appendChild(document.createTextNode(j + afternoon + totalArr[2][i] + ' cookies sold.'));
            document.getElementById('paris-list').appendChild(list3); 
            list3.appendChild(document.createTextNode(j + afternoon + totalArr[3][i] + ' cookies sold.'));
            document.getElementById('lima-list').appendChild(list4); 
            list4.appendChild(document.createTextNode(j + afternoon + totalArr[4][i] + ' cookies sold.'));
        } else if (i = 14) {
            document.getElementById('seattle-list').appendChild(list0); 
            list0.appendChild(document.createTextNode(sum[0] + ' total cookies sold.'));
            document.getElementById('tokyo-list').appendChild(list1);
            list1.appendChild(document.createTextNode(sum[1] + ' total cookies sold.'));
            document.getElementById('dubai-list').appendChild(list2);  
            list2.appendChild(document.createTextNode(sum[2] + ' total cookies sold.'));
            document.getElementById('paris-list').appendChild(list3); 
            list3.appendChild(document.createTextNode(sum[3] + ' total cookies sold.'));
            document.getElementById('lima-list').appendChild(list4);  
            list4.appendChild(document.createTextNode(sum[4] + ' total cookies sold.')); 
        }
    }
}
hourlyList();