// get input field value 
function inputValue(input) {
    const inputField = document.getElementById(input);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // input empty
    inputField.value = '';
    return inputValue
}
// get balanceValue 
function balanceValue(amountValueNumber, fieldId) {
    const amountTotal = document.getElementById(fieldId);
    const amountTotalText = amountTotal.innerText;
    const amountTotalNumber = parseFloat(amountTotalText);
    const totalAmount = amountTotal.innerText = amountValueNumber + amountTotalNumber;
    return totalAmount;
}

function totalCurrency(){
    const totalAmount = document.getElementById('totalAmount');
    const totalAmountText = totalAmount.innerText;
    const totalAmountNumber = parseFloat(totalAmountText);
    return totalAmountNumber;
}
function totalBalance(totalBalance, isAdd) {
   const totalAmountNumber = totalCurrency();
    if (isAdd == true) {
        totalAmount.innerText = totalAmountNumber + totalBalance;
    }
    else {
        totalAmount.innerText = totalAmountNumber - totalBalance;

    }
    // return totalAmountNumber
}
// deposit handleer
const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', function () {
    // get deposit inpute value
    const depositValueNumber = inputValue('depositValue');
    if (depositValueNumber > 0) {
        // get deposit balance text
        balanceValue(depositValueNumber, 'depositTotal')
        // get total balance field text
        totalBalance(depositValueNumber, true)
    }
    else{
        alert('enter your deposit value')
    }
})

// whithdraw handleer
const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function () {
    // get withdraw input value
    const withdrawValueNumber = inputValue('withdrawValue');
    const totalCurrencyAmount = totalCurrency();
   if(withdrawValueNumber > 0 && withdrawValueNumber < totalCurrencyAmount){
     // get withdraw field text
     balanceValue(withdrawValueNumber, 'withdrawTotal')
     // get total balance field text
     totalBalance(withdrawValueNumber, false)
   }
   if(withdrawValueNumber > totalCurrencyAmount){
    alert('please check your total amount')
   }

    

})