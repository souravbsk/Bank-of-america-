const depositBtn = document.getElementById('depositBtn');



depositBtn.addEventListener('click', function () {
    // select input id

    const depositValue = document.getElementById('depositValue');
    const depositValueText = depositValue.value;
    const depositValueNumber = parseFloat(depositValueText);




    const depositTotal = document.getElementById('depositTotal');
    const depositTotalText = depositTotal.innerText;
    const depositTotalNumber = parseFloat(depositTotalText);
    // deposit amount set on deposit total and also sum their value


    const totalDeposit = depositTotal.innerText = depositValueNumber + depositTotalNumber;
    // withdraw deposit input empty
    
    depositValue.value = '';  

    const totalAmount = document.getElementById('totalAmount');
    const totalAmountText = totalAmount.innerText;
    const totalAmountNumber = parseFloat(totalAmountText);

    totalAmount.innerText = totalAmountNumber + totalDeposit;




})

// whithdraw handleer
const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function () {
    const withdrawValue = document.getElementById('withdrawValue');
    const withdrawValueText = withdrawValue.value;
    const withdrawValueNumber = parseFloat(withdrawValueText);


    const withdrawTotal = document.getElementById('withdrawTotal');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalValue = parseFloat(withdrawTotalText);

    const totalWithdraw = withdrawTotal.innerText = withdrawValueNumber + withdrawTotalValue;
    withdrawValue.value = ''

    const totalAmount = document.getElementById('totalAmount');
    const totalAmountText = totalAmount.innerText;
    const totalAmountNumber = parseFloat(totalAmountText);

    totalAmount.innerText = totalAmountNumber - totalWithdraw;
    alert('You are withdrawing' + " " + withdrawValueNumber + " " + '$')

})