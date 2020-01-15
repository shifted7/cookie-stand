'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
var storeData = [];
var listSection = 'storeSales';

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

Store.prototype.displayList = function(inHours, inCookies, sectionID) {
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

Store.prototype.displayTable = function(data, sectionID) {
    
}

// storeSeattle.simCookies(hours, 'storeSales');
var storeSeattle = new Store('Seattle', 65, 23, 6.3);
var storeTokyo = new Store('Tokyo', 24, 3, 1.2);
var storeDubai = new Store('Dubai', 38, 11, 3.7);
var storeParis = new Store('Paris', 38, 20, 2.3);
var storeLima = new Store('Lima', 2, 16, 4.6);
storeSeattle.simCookies(hours);
storeSeattle.displayList(hours, storeSeattle.cookieData, listSection);
storeTokyo.simCookies(hours);
storeTokyo.displayList(hours, storeTokyo.cookieData, listSection);

// storeSeattle.displayList(hours,cookies,listSection);
// cookies = storeTokyo.simCookies(hours);
// storeTokyo.displayList(hours, cookies, listSection);


