let emailId = document.getElementById("email-id");
let errorMsg = document.getElementById("error-msg");
let iconImg = document.getElementById("image");
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

function checker(){
    iconImg.style.display="inline-block";
 
    if(emailId.value.match(mailRegex)){
        errorMsg.style.display = 'none';
        emailId.style.border = '2px solid #2ecc71';
    }
 
    else if(emailId.value == ""){
        iconImg.style.display = 'none';
        errorMsg.style.display = 'none';
        emailId.style.border = '2px solid #d1d3d4';
    }
 
    else{
        iconImg.innerHTML = '<img class="icon" src="./images/icon-error.svg"></img>';
        errorMsg.style.display = 'block';
        emailId.style.border = '2px solid #444';
    }

}