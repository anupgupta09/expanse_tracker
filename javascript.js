const balance = document.getElementById(
    "balance"
);
const  money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
      
const dummyTransaction = [
    {id: 1 , text: "flower" ,amount: -20},
    {id: 2 , text: "salary" ,amount: 300},
    {id: 3 , text: "book" ,amount: -10},
    {id: 4 , text: "camera" ,amount: 150},
];

let transaction = dummyTransaction;

function addTransactionDOM(transaction){
    const  sign = transaction[0].amount < 0 ? "-" : "+";
    const  items = document.createElement("li");

    items.classList.add(
        transaction[0].amount < 0 ? "minus" : "plus"
     ) ;

    items.innerHTML = 
     $;{transaction[0].text} <span>${sign}${Math.abs(
        transaction[0].amount
    )}</span>;
    <button class = "delete-btn" onclick = " ">x</button>;

    list.appendChild(items);
     }