/**
    @author AL-Qouran, Omar(omaralqouran48@gmail.com)
    @version 0.0.1
    @summary Project 1 Construction || created 09.24.16
    @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let lotNumber, bedroomCount, bathroomCount, garageSize, homePrice;

const BASE_PRICE = 50000;
const BEDROOM_PRICE = 17000;
const BATHROOM_PRICE = 12500;
const GARAGE_PRICE = 6000;
//garage_price is the price of each additional car space;

function main() {
    setLotNumber();
    setBedroomCount();
    setBathroomCount();
    setGarageSize();
    calculateHomePrice();
    printResults();
}

main();

function setLotNumber() {
    lotNumber = PROMPT.question('\nPlease enter number of lots: ');
}
function setBedroomCount() {
    bedroomCount = Number(PROMPT.question('\nPlease enter the total number of bedrooms: '));
}
function setBathroomCount() {
    bathroomCount = Number(PROMPT.question('\nPlease enter the number the total number of bathrooms: '));
}
function setGarageSize(){
    garageSize = Number(PROMPT.question('\nPlease enter the size of garage to the number of cars: '));
}
function calculateHomePrice() {
    homePrice = BASE_PRICE + bedroomCount * BEDROOM_PRICE + BATHROOM_PRICE * bathroomCount + GARAGE_PRICE *garageSize;
}
function printResults() {
    console.log("\nYour house will cost \$"+ homePrice);
}