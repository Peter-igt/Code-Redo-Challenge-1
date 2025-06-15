// filepath: /home/peter/Code-Redo-Challenge-1/FruitStandCalaculator/CalculateFruitCost.js
const prompt = require('prompt-sync')();

function calculateFruitCost() {
    // Users Data
    let numberOfFruits = +prompt("Matunda ngapi unataka kununua? (KES 20 each): ");
    
    // Calculate Costs
    let baseCost = numberOfFruits * 20;
    let discount = numberOfFruits >= 5 ? baseCost * 0.1 : 0;
    let finalCost = baseCost - discount;
    
    // Display Results
    console.log("Matunda Yako:");
    console.log(`Number of Fruits: ${numberOfFruits}`);
    console.log(`Base Cost: KES ${baseCost}`);
    console.log(discount > 0 ? `Discount Applied (10%): KES ${discount}` : "No Discount Applied.");
    console.log(`Total Price: KES ${finalCost}`);
    console.log("\nAsante na Karibu Tena!");
}

calculateFruitCost();