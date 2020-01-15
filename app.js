'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
var storeData = [];
var listSection = 'storeSales';
var tableSection = 'storeSales';

var Store = function(location, custMaxHr, custMinHr, cookiesAvgCust) {
    this.location = location;
    this.custMaxHr = custMaxHr;
    this.custMinHr = custMinHr;
    this.cookiesAvgCust = cookiesAvgCust;
    this.cookieData = [];
}

Store.prototype.simCookies = function(inHours) {
    var custNum = 0;
    var cookieNum = 0;
    var cookiesTotal = 0;
    for (var i=0; i < inHours.length; i++) {
        custNum = Math.floor(Math.random() * (this.custMaxHr - this.custMinHr + 1)+ this.custMinHr); //random integer between custMaxHr and custMinHr, inclusive
        cookieNum = custNum * this.cookiesAvgCust;
        cookieNum = Math.round(cookieNum);
        this.cookieData.push(cookieNum);
        cookiesTotal += cookieNum;
    }
    this.cookieData.push(cookiesTotal);
    storeData.push(this);
    return this.cookieData;
}

Store.prototype.renderList = function(inHours, inCookies, sectionID) {
    var cookieString = '';
    var outputSection = document.getElementById(sectionID);
    var storeUL = document.createElement('ul');
    storeUL.textContent = this.location;
    for (var i=0; i < inHours.length;i++) {
        cookieString = `${inHours[i]}: ${inCookies[i]} cookies`;
        var hrLI = document.createElement('li');
        hrLI.textContent = cookieString;
        storeUL.appendChild(hrLI);
    }
    cookieString = `Total: ${inCookies[i]} cookies`;
    var totalLI = document.createElement('li');
    totalLI.textContent = cookieString;
    storeUL.appendChild(totalLI);
    outputSection.appendChild(storeUL);
}

Store.prototype.render = function(table) {
    //store location row header
    var storeTR = document.createElement('tr');
    var storeLocTH = document.createElement('th');
    storeLocTH.textContent = this.location;
    storeTR.appendChild(storeLocTH);
    for (var j=0; j < hours.length; j++) {
        //store row main
        var storeTD = document.createElement('td');
        storeTD.textContent = this.cookieData[j];
        storeTR.appendChild(storeTD);
    }
    //store row footer totals
    var storeTotal = this.cookieData[j];
    var storeTotalTD = document.createElement('td')
    storeTotalTD.textContent = storeTotal;
    storeTR.appendChild(storeTotalTD);
    table.appendChild(storeTR);
}

function renderAll(sectionID) {
    var section = document.getElementById(sectionID);
    var table = document.createElement('table');
    renderHeader(table);
    for (var i=0; i < storeData.length; i++) {
        storeData[i].render(table);
    }
    renderFooter(table);
    section.appendChild(table);
}

function renderHeader(table) {
    var headerTR = document.createElement('tr');
    //blank location column header
    var blankTH = document.createElement('th');
    headerTR.appendChild(blankTH);
    for (var i=0; i<hours.length; i++) {
        //hour main headers
        var hourTH = document.createElement('th');
        hourTH.textContent = hours[i];
        headerTR.appendChild(hourTH);
    }
    //hour total header
    var totalLocTH = document.createElement('th');
    totalLocTH.textContent = 'Daily Location Total'
    headerTR.appendChild(totalLocTH);
    table.appendChild(headerTR);
}

function renderFooter(table) {
    var grandTotal = 0;
    var timeTotalRow = document.createElement('tr');
    var timeTotalTH = document.createElement('th');
    timeTotalTH.textContent = 'Totals';
    timeTotalRow.appendChild(timeTotalTH);
    for (var i=0; i < hours.length; i++) {
        var timeTotal = 0;
        var timeTotalTD = document.createElement('td');
        for (var j=0; j < storeData.length;j++) {
            timeTotal += storeData[j].cookieData[i];
        }
        timeTotalTD.textContent = timeTotal;
        timeTotalRow.appendChild(timeTotalTD);
        grandTotal += timeTotal;
    }
    var grandTotalTD = document.createElement('td');
    grandTotalTD.textContent = grandTotal;
    timeTotalRow.appendChild(grandTotalTD);
    table.appendChild(timeTotalRow);
}

// storeSeattle.simCookies(hours, 'storeSales');
var storeSeattle = new Store('Seattle', 65, 23, 6.3);
var storeTokyo = new Store('Tokyo', 24, 3, 1.2);
var storeDubai = new Store('Dubai', 38, 11, 3.7);
var storeParis = new Store('Paris', 38, 20, 2.3);
var storeLima = new Store('Lima', 2, 16, 4.6);
storeSeattle.simCookies(hours);
storeTokyo.simCookies(hours);
storeDubai.simCookies(hours);
storeParis.simCookies(hours);
storeLima.simCookies(hours);
renderAll(tableSection);


