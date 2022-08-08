'use strict';

let hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
let locationDataArr = [];
let seattle = new createLocation('Seattle', 23, 65, 6.3);
let tokyo = new createLocation('Tokyo', 3, 24, 1.2);
let dubai = new createLocation('Dubai', 11, 38, 3.7);
let paris = new createLocation('Paris', 20, 38, 2.3);
let lima = new createLocation('Lima', 2, 16, 4.6);

function randomNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
function cookieSum(arr) {
    let sumCookie = 0;
    for (let i = 0; i < arr.length; i++) {
        sumCookie += arr[i];
    }
    return sumCookie;
}
function createLocation(name, min, max, avgCookie) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
  this.soldCookiesArr = [];
  locationDataArr.push(this);
}

createLocation.prototype.calcHourlyCookies = calcHourlyCookies;
createLocation.prototype.renderTable = tableRender;

function calcHourlyCookies() {
  for (let i = 0; i < hours.length; i++) {
    let getRandomCust = randomNum(this.min, this.max);
    let hourlyCookies = Math.round(getRandomCust * this.avgCookie);
    this.soldCookiesArr.push(hourlyCookies);
  }
}
function calcTotalCookies() {
    let final = 0;
    let total = 0;
    let table = document.getElementById('table');
    let row = document.createElement('tr');
    let footer = document.createElement('th');
    footer.textContent = 'Hourly Total: ';
    row.appendChild(footer);
    for (let i = 0; i < hours.length; i++) {
      total = 0;
      for( let j = 0; j < locationDataArr.length; j++) {
          total += locationDataArr[j].soldCookiesArr[i];
          final += locationDataArr[j].soldCookiesArr[i];
      }
      let footer = document.createElement('td');
      footer.textContent = total;
      row.appendChild(footer);
    }
    footer = document.createElement('td');
    footer.textContent = final; //final number
    row.appendChild(footer);
    table.appendChild(row);
}
// Renders header for table in html
function headerRender() {
  let table = document.getElementById('table');
  let row = document.createElement('tr');
  let header = document.createElement('th');
  header.textContent = 'Location';
  row.appendChild(header);
  for(let i = 0; i < hours.length; i++) {
    let newHeader = document.createElement('th');
    newHeader.textContent = hours[i];
    row.appendChild(newHeader);
  }
  header = document.createElement('th');
  header.textContent = 'Daily location total: ';
  row.appendChild(header);
  table.appendChild(row);
}
// Renders table in html
function tableRender() {
  this.calcHourlyCookies();
  let totalCookies = cookieSum(this.soldCookiesArr);
  let table = document.getElementById('table');
  let row = document.createElement('tr');
  let data = document.createElement('td');
  row.appendChild(data);
  data.textContent = this.name;
  for (let i = 0; i < this.soldCookiesArr.length; i++) {
    data = document.createElement('td');
    data.textContent = this.soldCookiesArr[i];
    row.appendChild(data);
  }
  data = document.createElement('th');
  data.textContent = totalCookies;
  row.appendChild(data);
  table.appendChild(row);
}
// Listener for submit button
let newLocation = document.getElementById('newLocation');
newLocation.addEventListener('submit', createNewLocation);
// Function to create new location on form submit
function createNewLocation(newLocation){
  newLocation.preventDefault();
  let name = newLocation.target.newStore.value;
  let min = Number(newLocation.target.min.value);
  let max = Number(newLocation.target.max.value);
  let avgCookie = Number(newLocation.target.avgCookies.value);
  let createNewLocData = new createLocation(name, min, max, avgCookie);
  createNewLocData.renderTable();
  duplicateRow();
  calcTotalCookies();
  document.getElementById('newLocation').reset();
}
//Quick function to delete extra hourly total row that is created on submit of the form
let extraRow = 6;
function duplicateRow() {
  document.getElementById('table').deleteRow(extraRow);
  extraRow += 1;
}

headerRender();
seattle.renderTable();
tokyo.renderTable();
dubai.renderTable();
paris.renderTable();
lima.renderTable();
calcTotalCookies();
