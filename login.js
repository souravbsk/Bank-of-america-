const mailValue = document.getElementById('mailValue');
const passValue = document.getElementById('passValue');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click',function(){

    if(mailValue.value == 'money@gmail.com' && passValue.value == 125){
       window.location.href = "bank.html";
    }
    else{
        alert('enter your right pass and mail')
    }
})