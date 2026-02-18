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

   }else{
    alert('Invalid Pin');
    return;
   }
})