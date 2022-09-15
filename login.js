const mailValue = document.getElementById('mailValue');
const passValue = document.getElementById('passValue');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click',function(){

    if(mailValue.value == 'sb07008@gmail.com' && passValue.value == 51){
       window.location.href = "bank.html";
    }
    else{
        alert('enter your right pass and mail')
    }
})