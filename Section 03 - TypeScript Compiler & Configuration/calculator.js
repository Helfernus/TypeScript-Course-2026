"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateInvestment(data) {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmount < 0)
        return 'Initial Investment Amount must be at least 0!';
    if (duration <= 0)
        return 'Invalid Duration! Enter a duration greater than 0!';
    if (expectedReturn <= 0)
        return 'Expected Return must be atlease 0!';
    let total = initialAmount;
    let totalContribution = 0;
    let totalInterest = 0;
    const annualResults = [];
    for (let year = 1; year <= duration; year++) {
        // const totalContribution = annualContribution * year;
        // const totalInterest = Math.round((expectedReturn * ((initialAmount + (annualContribution * (year - 1))) + (annualResults[year - 2]?.totalInterest || 0))) + (annualResults[year - 2]?.totalInterest || 0));
        // const total = initialAmount + totalContribution + totalInterest;
        total = total * (1 + expectedReturn);
        totalInterest = total - totalContribution - initialAmount;
        totalContribution = totalContribution + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year,
            total,
            totalContribution,
            totalInterest,
        });
    }
    return annualResults;
}
function printResults(results) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    results.forEach(result => {
        console.log('========================');
        console.log('Year', result.year);
        console.log('Total:', result.total.toFixed(0));
        console.log('Total Contribution:', result.totalContribution.toFixed(0));
        console.log('Total Interest Earned:', result.totalInterest.toFixed(0));
        console.log('========================');
    });
}
const investmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10,
};
const result = calculateInvestment(investmentData);
printResults(result);
//# sourceMappingURL=calculator.js.map