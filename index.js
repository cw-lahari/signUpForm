


let userNameEl = document.getElementById('userName')
let emailEl = document.getElementById("Email")
let passwordEl = document.getElementById("password")
let confirmPasswordEl = document.getElementById('confirmPassword')
let openEyeEl = document.getElementById('openEye');
let buttonEl = document.getElementById('button');

userNameEl.addEventListener("blur",function(){
    if(userNameEl.value==='' || (userNameEl.value).length<3 || (userNameEl.value).length>25){
        let userErrorText = 'Username must be between 3 and 25 characters';
        let userErrorMsgEl = document.getElementById('userErrorMsg');
        userErrorMsgEl.textContent = userErrorText;
        userErrorMsgEl.style.color = "red";
        userNameEl.classList.add("error-input-color");
        userNameEl.classList.remove("success-input-color");
    }
    else{
        let userErrorText = '';
        let userErrorMsgEl = document.getElementById('userErrorMsg');
        userErrorMsgEl.textContent = userErrorText;
        userNameEl.classList.remove("error-input-color");
        userNameEl.classList.add("success-input-color");
    }
})

emailEl.addEventListener("blur",function(){
    if((emailEl.value) !== "" && ( (emailEl.value).includes('@gmail.com') || (emailEl.value).includes('@cartrade.com') || (emailEl.value).includes('@carwale.com') || (emailEl.value).includes('@outlook.com') || (emailEl.value).includes('@bikewale.com') || (emailEl.value).includes('@hotmail.com') ) && (emailEl.value).length>=10 ){
        let emailErrorText = '';
        let emailErrorMsgEl = document.getElementById('emailErrorMsg');
        emailErrorMsgEl.textContent = emailErrorText;
        emailEl.classList.add("success-input-color");
        emailEl.classList.remove("error-input-color")
    }
    else{
        let emailErrorText = 'Must be a valid Email';
        let emailErrorMsgEl = document.getElementById('emailErrorMsg');
        emailErrorMsgEl.textContent = emailErrorText;
        emailErrorMsgEl.style.color = 'red';
        emailEl.classList.remove("success-input-color");
        emailEl.classList.add('error-input-color');
    }
})

passwordEl.addEventListener("blur",function(){
    let upperCount=0;
    let lowerCount=0;
    let numberCount=0;
    let specialCount=0;
    for( i of passwordEl.value){
        if(i.charCodeAt(0) >=65 && i.charCodeAt(0)<=90){
            upperCount = upperCount + 1;

        }
        else if(i.charCodeAt(0) >=97 && i.charCodeAt(0)<=122){
            lowerCount = lowerCount+1;
        }
        else if(i.charCodeAt(0) >=48 && i.charCodeAt(0)<=57){
            numberCount=numberCount+1;
        }
        else{
            specialCount = specialCount+1;
        }
    }
    if(upperCount>=1 && lowerCount>=1 && numberCount>=1 && specialCount>=1 && (passwordEl.value).length >=8){
        let passwordErrorMsgEl = document.getElementById('passwordErrorMsg');
        let passwordErrorText = "";
        passwordErrorMsgEl.innerHTML = passwordErrorText;
        passwordEl.classList.remove("error-input-color");
        passwordEl.classList.add("success-input-color");
    }
    else{
        let passwordErrorMsgEl = document.getElementById('passwordErrorMsg');
        let passwordErrorText = "Password must has atleast 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)";
        passwordErrorMsgEl.innerHTML = passwordErrorText;
        passwordErrorMsgEl.style.color = "red";
        passwordEl.classList.add("error-input-color");
        passwordEl.classList.remove("success-input-color");
    }
}
)

confirmPasswordEl.addEventListener("blur",function(){
    if(confirmPasswordEl.value === passwordEl.value  && confirmPasswordEl.value!==0 && passwordEl.value!=0){
        let confirmPasswordErrorMsgEl = document.getElementById('confirmPasswordErrorMsg');
        let confirmPasswordErrorText = "";
        confirmPasswordErrorMsgEl.textContent = confirmPasswordErrorText;
        confirmPasswordEl.classList.remove('error-input-color');
        confirmPasswordEl.classList.add("success-input-color");

    }
    else{
        let confirmPasswordErrorMsgEl = document.getElementById('confirmPasswordErrorMsg');
        let confirmPasswordErrorText = "Please enter the password again";
        confirmPasswordErrorMsgEl.textContent = confirmPasswordErrorText;
        confirmPasswordErrorMsgEl.style.color = 'red';
        confirmPasswordEl.classList.add('error-input-color');
        confirmPasswordEl.classList.remove("success-input-color");
    }
})
let clickCount=0;
openEyeEl.addEventListener('click',function(){
    if (clickCount %2===0){
    let eyeEl =document.getElementById('eye');
    eyeEl.setAttribute('class',"fa fa-eye-slash icon");
    passwordEl.setAttribute('type','text');
}
else{
    let eyeEl =document.getElementById('eye');
    eyeEl.setAttribute('class',"fa fa-eye icon");
    passwordEl.setAttribute('type','password');
}

    clickCount+=1;
})

buttonEl.addEventListener('click',function(e){
    e.preventDefault();
    var userValidation;
    var emailValidation;
    var passwordValidation;
    var confirmPasswordValidation;
    if(userNameEl.value==='' || (userNameEl.value).length<3 || (userNameEl.value).length>25){
        let userErrorText = 'Username must be between 3 and 25 characters';
        let userErrorMsgEl = document.getElementById('userErrorMsg');
        userErrorMsgEl.textContent = userErrorText;
        userErrorMsgEl.style.color = "red";
        userNameEl.classList.add("error-input-color");
        userNameEl.classList.remove("success-input-color");
        var userValidation = false;
    }
    else{
        let userErrorText = '';
        let userErrorMsgEl = document.getElementById('userErrorMsg');
        userErrorMsgEl.textContent = userErrorText;
        userNameEl.classList.remove("error-input-color");
        userNameEl.classList.add("success-input-color");
        var userValidation = true;
    }

    if((emailEl.value) !== "" && ( (emailEl.value).includes('@gmail.com') || (emailEl.value).includes('@cartrade.com') || (emailEl.value).includes('@carwale.com') || (emailEl.value).includes('@outlook.com') || (emailEl.value).includes('@bikewale.com') || (emailEl.value).includes('@hotmail.com') ) && (emailEl.value).length>=10 ){
        let emailErrorText = '';
        let emailErrorMsgEl = document.getElementById('emailErrorMsg');
        emailErrorMsgEl.textContent = emailErrorText;
        emailEl.classList.add("success-input-color");
        emailEl.classList.remove("error-input-color");
        var emailValidation = true;
    }
    else{
        let emailErrorText = 'Must be a valid Email';
        let emailErrorMsgEl = document.getElementById('emailErrorMsg');
        emailErrorMsgEl.textContent = emailErrorText;
        emailErrorMsgEl.style.color = 'red';
        emailEl.classList.remove("success-input-color");
        emailEl.classList.add('error-input-color');
        var emailValidation = false;
    }

    let upperCount=0;
    let lowerCount=0;
    let numberCount=0;
    let specialCount=0;
    for( i of passwordEl.value){
        if(i.charCodeAt(0) >=65 && i.charCodeAt(0)<=90){
            upperCount = upperCount + 1;

        }
        else if(i.charCodeAt(0) >=97 && i.charCodeAt(0)<=122){
            lowerCount = lowerCount+1;
        }
        else if(i.charCodeAt(0) >=48 && i.charCodeAt(0)<=57){
            numberCount=numberCount+1;
        }
        else{
            specialCount = specialCount+1;
        }
    }
    if(upperCount>=1 && lowerCount>=1 && numberCount>=1 && specialCount>=1 && (passwordEl.value).length >=8){
        let passwordErrorMsgEl = document.getElementById('passwordErrorMsg');
        let passwordErrorText = "";
        passwordErrorMsgEl.innerHTML = passwordErrorText;
        passwordEl.classList.remove("error-input-color");
        passwordEl.classList.add("success-input-color");
        var passwordValidation = true;
    }
    else{
        let passwordErrorMsgEl = document.getElementById('passwordErrorMsg');
        let passwordErrorText = "Password must has atleast 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)";
        passwordErrorMsgEl.innerHTML = passwordErrorText;
        passwordErrorMsgEl.style.color = "red";
        passwordEl.classList.add("error-input-color");
        passwordEl.classList.remove("success-input-color");
        var passwordValidation = false;
    }

    if(confirmPasswordEl.value === passwordEl.value && confirmPasswordEl.value!==0 && passwordEl.value!=0){
        let confirmPasswordErrorMsgEl = document.getElementById('confirmPasswordErrorMsg');
        let confirmPasswordErrorText = "";
        confirmPasswordErrorMsgEl.textContent = confirmPasswordErrorText;
        confirmPasswordEl.classList.remove('error-input-color');
        confirmPasswordEl.classList.add("success-input-color");
        var confirmPasswordValidation = true;

    }
    else{
        let confirmPasswordErrorMsgEl = document.getElementById('confirmPasswordErrorMsg');
        let confirmPasswordErrorText = "Please enter the password again";
        confirmPasswordErrorMsgEl.textContent = confirmPasswordErrorText;
        confirmPasswordErrorMsgEl.style.color = 'red';
        confirmPasswordEl.classList.add('error-input-color');
        confirmPasswordEl.classList.remove("success-input-color");
        var confirmPasswordValidation = false;
    }
    if(userValidation && emailValidation && passwordValidation && confirmPasswordValidation){
        alert('Successfully Signed up!!');
    }
})

