
/*
Given inputs of mealCost (2 decimals), tipPercent (integer), taxPercent (integer)
Print the total meal cost, where totalCost is the rounded integer

smaple input

12.00
20
8

sample output 
15
*/


function solve(meal_cost, tip_percent, tax_percent) {
    const tip = meal_cost * (tip_percent/100).toFixed(2);
    const tax = meal_cost * (tax_percent/100).toFixed(2);
    const totalCost = meal_cost + tip + tax;
    console.log(Math.round(totalCost));
}
