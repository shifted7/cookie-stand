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
        var cookiesTotal = 0;
        var outputSection = document.getElementById(sectionID);
        var newSeattleUL = document.createElement('ul');
        newSeattleUL.textContent = this.location;
        console.log(this.location);
        for (var i=0; i < inHours.length; i++){
            custNum = Math.floor(Math.random() * (this.custMaxHr - this.custMinHr + 1)) + this.custMinHr;
            cookieNum = custNum * this.cookiesAvgCust;
            cookieNum = Math.round(cookieNum);
            this.cookies.push(cookieNum);
            cookiesTotal += cookieNum;
            cookieString = `${hours[i]}: ${cookieNum} cookies`;
            console.log(cookieString);
            var newCookiesLI = document.createElement('li');
            newCookiesLI.textContent = cookieString;
            newSeattleUL.appendChild(newCookiesLI);
        }
        // add total cookies to output
        var newTotalCookiesLI = document.createElement('li');
        cookieString = `Total: ${cookiesTotal} cookies`;
        newTotalCookiesLI.textContent = cookieString;
        newSeattleUL.appendChild(newTotalCookiesLI);
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
        var cookiesTotal = 0;
        var outputSection = document.getElementById(sectionID);
        var newTokyoUL = document.createElement('ul');
        newTokyoUL.textContent = this.location;
        console.log(this.location);
        for (var i=0; i < inHours.length; i++){
            custNum = Math.floor(Math.random() * (this.custMaxHr - this.custMinHr + 1)) + this.custMinHr;
            cookieNum = custNum * this.cookiesAvgCust;
            cookieNum = Math.round(cookieNum);
            this.cookies.push(cookieNum);
            cookiesTotal += cookieNum;
            cookieString = `${hours[i]}: ${cookieNum} cookies`;
            console.log(cookieString);
            var newCookiesLI = document.createElement('li');
            newCookiesLI.textContent = cookieString;
            newTokyoUL.appendChild(newCookiesLI);
        }
        // add total cookies to output
        var newTotalCookiesLI = document.createElement('li');
        cookieString = `Total: ${cookiesTotal} cookies`;
        newTotalCookiesLI.textContent = cookieString;
        newTokyoUL.appendChild(newTotalCookiesLI);
        outputSection.appendChild(newTokyoUL);
        return this.cookies;
    }
}

var storeDubai = {
    location: 'Dubai',
    custMaxHr: 38,
    custMinHr: 11,
    cookiesAvgCust: 3.7,
    cookies: [],
    simCookies: function(inHours, sectionID) {
        var custNum = 0;
        var cookieNum = 0;
        var cookieString = '';
        var cookiesTotal = 0;
        var outputSection = document.getElementById(sectionID);
        var newDubaiUL = document.createElement('ul');
        newDubaiUL.textContent = this.location;
        console.log(this.location);
        for (var i=0; i < inHours.length; i++){
            custNum = Math.floor(Math.random() * (this.custMaxHr - this.custMinHr + 1)) + this.custMinHr;
            cookieNum = custNum * this.cookiesAvgCust;
            cookieNum = Math.round(cookieNum);
            this.cookies.push(cookieNum);
            cookiesTotal += cookieNum;
            cookieString = `${hours[i]}: ${cookieNum} cookies`;
            console.log(cookieString);
            var newCookiesLI = document.createElement('li');
            newCookiesLI.textContent = cookieString;
            newDubaiUL.appendChild(newCookiesLI);
        }
        // add total cookies to output
        var newTotalCookiesLI = document.createElement('li');
        cookieString = `Total: ${cookiesTotal} cookies`;
        newTotalCookiesLI.textContent = cookieString;
        newDubaiUL.appendChild(newTotalCookiesLI);
        outputSection.appendChild(newDubaiUL);
        return this.cookies;
    }
}

var storeParis = {
    location: 'Paris',
    custMaxHr: 38,
    custMinHr: 20,
    cookiesAvgCust: 2.3,
    cookies: [],
    simCookies: function(inHours, sectionID) {
        var custNum = 0;
        var cookieNum = 0;
        var cookieString = '';
        var cookiesTotal = 0;
        var outputSection = document.getElementById(sectionID);
        var newParisUL = document.createElement('ul');
        newParisUL.textContent = this.location;
        console.log(this.location);
        for (var i=0; i < inHours.length; i++){
            custNum = Math.floor(Math.random() * (this.custMaxHr - this.custMinHr + 1)) + this.custMinHr;
            cookieNum = custNum * this.cookiesAvgCust;
            cookieNum = Math.round(cookieNum);
            this.cookies.push(cookieNum);
            cookiesTotal += cookieNum;
            cookieString = `${hours[i]}: ${cookieNum} cookies`;
            console.log(cookieString);
            var newCookiesLI = document.createElement('li');
            newCookiesLI.textContent = cookieString;
            newParisUL.appendChild(newCookiesLI);
        }
        // add total cookies to output
        var newTotalCookiesLI = document.createElement('li');
        cookieString = `Total: ${cookiesTotal} cookies`;
        newTotalCookiesLI.textContent = cookieString;
        newParisUL.appendChild(newTotalCookiesLI);
        outputSection.appendChild(newParisUL);
        return this.cookies;
    }
}

var storeLima = {
    location: 'Lima',
    custMaxHr: 16,
    custMinHr: 2,
    cookiesAvgCust: 4.6,
    cookies: [],
    simCookies: function(inHours, sectionID) {
        var custNum = 0;
        var cookieNum = 0;
        var cookieString = '';
        var cookiesTotal = 0;
        var outputSection = document.getElementById(sectionID);
        var newLimaUL = document.createElement('ul');
        newLimaUL.textContent = this.location;
        console.log(this.location);
        for (var i=0; i < inHours.length; i++){
            custNum = Math.floor(Math.random() * (this.custMaxHr - this.custMinHr + 1)) + this.custMinHr;
            cookieNum = custNum * this.cookiesAvgCust;
            cookieNum = Math.round(cookieNum);
            this.cookies.push(cookieNum);
            cookiesTotal += cookieNum;
            cookieString = `${hours[i]}: ${cookieNum} cookies`;
            console.log(cookieString);
            var newCookiesLI = document.createElement('li');
            newCookiesLI.textContent = cookieString;
            newLimaUL.appendChild(newCookiesLI);
        }
        // add total cookies to output
        var newTotalCookiesLI = document.createElement('li');
        cookieString = `Total: ${cookiesTotal} cookies`;
        newTotalCookiesLI.textContent = cookieString;
        newLimaUL.appendChild(newTotalCookiesLI);
        outputSection.appendChild(newLimaUL);
        return this.cookies;
    }
}

storeSeattle.simCookies(hours, 'storeSales');
storeTokyo.simCookies(hours, 'storeSales');
storeDubai.simCookies(hours, 'storeSales');
storeParis.simCookies(hours, 'storeSales');
storeLima.simCookies(hours, 'storeSales');
