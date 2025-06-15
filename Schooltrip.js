function trackTripBudget() {
    
    // Get Users Data
    let budget = +prompt("Jumla ya Bajeti ya Safari (KES)?");
    let students = +prompt("Idadi ya Wanafunzi?");
    
    // Calculate Trip Costs
    let studentCost = (250 + 150) * students; // Lunch + Activity per student
    let totalCost = 5000 + studentCost; // Bus + student costs
    let remaining = budget - totalCost;
    
    // Display Summary
    console.log("School Trip Budget Summary:");
    console.log(`Total Budget: KES ${budget}`);
    console.log(`Number of Students: ${students}`);
    console.log("---");
    console.log(`Bus Hire Cost: KES 5000`);
    console.log(`Cost per Student (Lunch + Activity): KES 400`);
    console.log(`Total Student Costs: KES ${studentCost}`);
    console.log("---");
    console.log(`Total Trip Cost: KES ${totalCost}`);
    console.log(`Remaining Budget: KES ${remaining}`);
    
    // Current State Of The Budget
    console.log(remaining < 0 ? `\nOopsy! Budget Exceeded by KES ${-remaining}.` : "\nSafari Njema!");
}