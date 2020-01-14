'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

var storeSeattle = {
    location: 'Seattle',
    custMaxHr: 65,
    custMinHr: 23,
    cookiesAvgCust: 6.3,
    cookies: [],
    simCookies: function(inHours, sectionID) {
        var custNum = 0;
        var cookieNum = 0;
        var cookieString = '';
        var outputSection = document.getElementById(sectionID);
        var newSeattleUL = document.createElement('ul');
        newSeattleUL.textContent = this.location;
        console.log(this.location);
        for (var i=0; i < inHours.length; i++){
            custNum = Math.floor(Math.random() * (this.custMaxHr - this.custMinHr + 1)) + this.custMinHr;
            cookieNum = custNum * this.cookiesAvgCust;
            cookieNum = Math.round(cookieNum);
            cookieString = `${hours[i]}: ${cookieNum} cookies`;
            console.log(cookieString);
            this.cookies.push(cookieString);
            var newCookiesLI = document.createElement('li');
            newCookiesLI.textContent = cookieString;
            newSeattleUL.appendChild(newCookiesLI);
        }
        outputSection.appendChild(newSeattleUL);
        return this.cookies;
    }
}

var storeTokyo = {
    location: 'Tokyo',
    custMaxHr: 24,
    custMinHr: 3,
    cookiesAvgCust: 1.2,
    cookies: [],
    simCookies: function(inHours, sectionID) {
        var custNum = 0;
        var cookieNum = 0;
        var cookieString = '';
        var outputSection = document.getElementById(sectionID);
        var newTokyoUL = document.createElement('ul');
        newTokyoUL.textContent = this.location;
        console.log(this.location);
        for (var i=0; i < inHours.length; i++){
            custNum = Math.floor(Math.random() * (this.custMaxHr - this.custMinHr + 1)) + this.custMinHr;
            cookieNum = custNum * this.cookiesAvgCust;
            cookieNum = Math.round(cookieNum);
            cookieString = `${hours[i]}: ${cookieNum} cookies`;
            console.log(cookieString);
            this.cookies.push(cookieString);
            var newCookiesLI = document.createElement('li');
            newCookiesLI.textContent = cookieString;
            newTokyoUL.appendChild(newCookiesLI);
        }
        outputSection.appendChild(newTokyoUL);
        return this.cookies;
    }
}

storeSeattle.simCookies(hours, 'storeSales');
storeTokyo.simCookies(hours, 'storeSales');
