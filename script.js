const bill = parseFloat(document.querySelector('#bill').value.trim());
const people = parseInt(document.querySelector("#people").value.trim());
const tip5 = document.querySelector("#tip-5");
const tip10 = document.querySelector("#tip-10");
const tip15 = document.querySelector("#tip-15");
const tip25 = document.querySelector("#tip-25");
const tip50 = document.querySelector("#tip-50");
const tipAmt = document.getElementById("tip-amount");
const total = document.getElementById("total");

function tipCalculator() {
    let x = 0;
   tip5.addEventListener('click', function() {
       x = Number(bill) * 0.05;
       tipAmt.textContent = x;
   });
   tip10.addEventListener('click', function() {
       x = Number(bill) * 0.1;
       console.log(x);
   });
   tip15.addEventListener('click', function() {
       x = Number(bill) * 0.15;
       console.log(x);
   });
   tip25.addEventListener('click', function() {
       x = Number(bill) * 0.25;
       console.log(x);
   });
   tip50.addEventListener('click', function() {
       x = Number(bill) * 0.5;
       console.log(x);
   });
}

tipCalculator();
