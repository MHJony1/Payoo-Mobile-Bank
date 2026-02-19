//---- common machine system ---//
document.getElementById('cashout-btn').addEventListener("click", function(){
 //1. get the agent number & validate
 const cashoutNumber = getValueFromInput('cashout-number');
      if(cashoutNumber.length !== 11){
      alert("Invalid Agent Number");
      return;
     }

 //2. get the amount
 const cashoutAmount = getValueFromInput('cashout-amount');

//3. get the current balance
 const currentBalance = getBalance();
//4. calculate new balance
  const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);
    if(newBalance < 0){
      alert("Invalid Amount");
      return;
    }

//   //5. get the pin & verify
  const pin = getValueFromInput('cashout-pin');
  if(pin === '0909'){
    alert("Cashout Successful")
    setBalance(newBalance);

    
    //1- history-container ke dhore niye ashbo
    const history = document.getElementById("history-container");
    //2- new div create korbo
    const newHistory = document.createElement('div');
    // 3- new div innerHTML add korbo
   newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-200 mb-3 border-l-4 border-red-500">
            <h3 class="font-bold text-lg text-red-600">Cashout Success</h3>
            <p>Amount: <span class="font-semibold">${cashoutAmount}</span> BDT</p>
            <p class="text-sm">Time: ${new Date().toLocaleString()}</p>
        </div>
    `;
      // 4- history container e newHistory append korbo
      history.append(newHistory);
  }else{
    alert('Invalid Amount');
    return;
  }

})






//  document.getElementById('cashout-btn').addEventListener('click', function(){
//   //1. get the agent number & validate
//      const cashoutNumberInput = document.getElementById('cashout-number');
//      const cashoutNumber = cashoutNumberInput.value;
//      console.log(cashoutNumber);
//      if(cashoutNumber.length !== 11){
//       alert("Invalid Agent Number");
//       return;
//      }

//   //2. get the amount, validate, convert to number
//      const cashoutAmountInput = document.getElementById('cashout-amount');
//      const cashoutAmount = cashoutAmountInput.value;
//      console.log(cashoutAmount);
     
//   //3. get the current balance, validate, convert to number
//      const balanceElement = document.getElementById('balance');
//      const balance = balanceElement.innerText;
//      console.log(balance);
     
//   //4. calculate new balance
//     const newBalance = Number(balance) - Number(cashoutAmount);
//     if(newBalance < 0){
//       alert("Invalid Amount");
//       return;
//     }

//   //5. get the pin & verify
//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const pin = cashoutPinInput.value;
//     if(pin === '0909'){
//   //5-1. true:: show an alert > set Balance
//     alert("cashout successfull")
//     console.log('New Balance:', newBalance)
//     balanceElement.innerText = newBalance;
//     }else{
//    //5-2. false:: show an error alert > return
//    alert("Invalid Pin") 
//     }
  
 
//  })