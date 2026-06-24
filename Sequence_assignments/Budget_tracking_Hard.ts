export { };
console.log("Enter your monthly income: ");
let income: number = Number(process.argv[2]);
console.log("Enter your expenses (space separated): ");
let expensesInput: string = process.argv[3];
let expenses: string[] = expensesInput.split(" ");
let totalExpenses: number = 0;
for (let i = 0; i < expenses.length; i++) {
    totalExpenses += Number(expenses[i]);
}
console.log("Remaining budget: $"+(income-totalExpenses).toFixed(2));