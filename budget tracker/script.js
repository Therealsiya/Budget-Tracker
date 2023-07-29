let arr = [];
let sumOfValues = 0;

let incomeAmount = 0;
function addIncome() {
  let incomeName = document.getElementById("income-name").value;
  let incomeAmount = +parseInt(document.getElementById("income-amount").value);

  //how to get a alert if one of the fields are empty
  if (incomeName == "" && incomeAmount == "") {
    console.log("enter filed");
  }

  const Incomeline = incomeName + "R" + incomeAmount;

  //adding a new list to the dom
  const list = document.getElementById("income-list");
  const newExpense = document.createElement("li");
  newExpense.innerHTML += Incomeline;
  list.appendChild(newExpense);

  //calculateBudget();

  //adding icon
  const icon = document.createElement("div");
  newExpense.appendChild(icon);

  //adding all values inserted in the input into an array

  arr.push(incomeAmount);
  for (let i = 0; i < arr.length; i++) {
    sumOfValues += arr[i];
  }

  let totalIncome = document.getElementById("total-income");
  totalIncome.innerHTML = "R" + sumOfValues;

  //add delete event to icon
  icon.addEventListener("click", function () {
    newExpenseList.style.display = "none";
  });

  calculateBudget();
}

let arrExpenses = [];
let sumOfExpenses = 0;
let expenseAmount = 0;

function expense() {
  let expenseName = document.getElementById("expense-name").value;
  expenseAmount += parseInt(document.getElementById("expense-amount").value);

  //adding new list
  let expenseLine = expenseName + " R" + expenseAmount;
  const expenseList = document.getElementById("expense-list");
  const newExpenseList = document.createElement("li");
  newExpenseList.innerHTML += expenseLine;
  expenseList.appendChild(newExpenseList);

  //adding all values in an array

  arrExpenses.push(expenseAmount);
  for (let e = 0; e < arrExpenses.length; e++) {
    sumOfExpenses += arrExpenses[e];
  }
  let totalExpenses = document.getElementById("total-expenses");
  totalExpenses.innerHTML = "R" + sumOfExpenses;

  //adding icon
  const icon = document.createElement("div");
  newExpenseList.appendChild(icon);

  //add delete event to icon
  icon.addEventListener("click", function () {
    newExpenseList.style.display = "none";
    // sumOfExpenses = sumOfExpenses - expenseAmount;
    //  totalExpenses.innerHTML = sumOfExpenses;
    //   console.log(sumOfExpenses);
  });

  calculateBudget();
}

let totalBalance = 0;
function calculateBudget() {
  totalBalance = sumOfValues - sumOfExpenses;
  let balance = document.getElementById("total-balance");
  balance.innerHTML = totalBalance;
  console.log(totalBalance);

  //date
  let dates = new Date();
  console.log(dates);
}
