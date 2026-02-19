document.getElementById('add-money-btn').addEventListener('click', function(){
  //1. back account get
  const bankAccount = getValueFromInput('add-money-bank');
  if(bankAccount === 'Select bank'){
    alert('please select a bank');
    return;
  }
  //2. get bank account number
  const accno = getValueFromInput('add-money-number');
  if(accno.length !== 11){
    alert('Invalid account no');
    return;
  }
  //3. get amount
  const amount = getValueFromInput('add-money-amount');
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(amount);
   // get verify pin
   const pin = getValueFromInput('add-money-pin');
   if(pin === '0909'){
    alert(`Add Money Success from ${bankAccount} at ${new Date()}`);
    setBalance(newBalance);

    //1- history-container ke dhore niye ashbo
    const history = document.getElementById("history-container");
    //2- new div create korbo
    const newHistory = document.createElement('div');
    // 3- new div innerHTML add korbo
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-200 mb-3 border-l-4 border-red-500">
    <h3 class="font-bold text-lg  text-red-600">Add Money Success</h3>
    <p>Amount: <span class="font-semibold">${amount}</span> BDT</p>
    <p class="text-sm">From ${bankAccount}, acc no ${accno} at ${new Date().toLocaleString()}</p>
    </div>
      `;
      // 4- history container e newHistory append korbo
      history.append(newHistory);

   }else{
    alert('Invalid Pin');
    return;
   }
})