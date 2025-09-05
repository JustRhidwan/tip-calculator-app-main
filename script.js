    const tip5 = document.querySelector("#tip-5");
    const tip10 = document.querySelector("#tip-10");
    const tip15 = document.querySelector("#tip-15");
    const tip25 = document.querySelector("#tip-25");
    const tip50 = document.querySelector("#tip-50");
    const tipAmt = document.getElementById("tip-amount");
    const total = document.getElementById("total");
    const customTipInput = document.querySelector("#custom-tip");
    const resetButton = document.getElementById("reset-button");

   function calculateTip (percent) {
       const bill = parseFloat(document.querySelector('#bill').value.trim()) || 0;
       const people = parseInt(document.querySelector("#people").value.trim());
     if (people < 1) {
        document.querySelector("#people-error").textContent = "Can't be zero";
        return;
   }else {
        document.querySelector("#people-error").textContent = "";
   }
        let tip = bill * percent ;

       const tipPerPerson = people > 0 ? (tip / people) : 0;
       const totalPerPerson = people > 0 ? (bill + tip )/ people : 0;

       tipAmt.textContent = `$${tipPerPerson.toFixed(2)}`;
       total.textContent = `$${totalPerPerson.toFixed(2)}`;
   }
  

   tip5.addEventListener("click", function() {
    calculateTip(0.05);
   });
   tip10.addEventListener("click", function() {
    calculateTip(0.1);
   });
   tip15.addEventListener("click", function() {
       calculateTip(0.15);
   });
   tip25.addEventListener("click", function() {
       calculateTip(0.25);
   });

   tip50.addEventListener("click", function() {
    calculateTip(0.5);
   });

   // Custom tip input event
   customTipInput.addEventListener("input", function() {
       const customPercent = parseFloat(customTipInput.value) || 0;
       calculateTip(customPercent / 100);
   });

   const peopleInput = document.querySelector("#people");

   if  (!peopleInput.value || parseInt(peopleInput.value) <= 0) {
       peopleInput.classList.add('input-error');
   }else {
    peopleInput.classList.remove('input-error');
   }

   resetButton.addEventListener ("click", function() {
       document.querySelector("#bill").value = "";
       document.querySelector("#people").value = "";
       document.querySelector("#custom-tip").value = "";
       tipAmt.textContent = "$0.00";
       total.textContent = "$0.00";
   });
