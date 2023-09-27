var getId = (id) => {
    return document.getElementById(id);
}

var getClasses = (classes) => {
    return document.getElementsByClassName(classes);
}

var firstName = getId('firstName'),
lastName = getId('lastName'),
email = getId('email'),
password = getId('password'),
form = getId('myForm'),
button = getId('btn'),
sts = getId('sts'),
errMsg = getClasses('error');

form.addEventListener('submit', (event) => {
   event.preventDefault();
   var fNameValid = customValidator(firstName,0, 'First name is mandatory..');
   var lNameValid = customValidator(lastName,1, 'Last name is mandatory..');
   var emailValid = customValidator(email,2, 'First name is mandatory..');
   var passwordValid = customValidator(password,3, 'password is mandatory..');

//    console.log(fNameValid+ " "+ lNameValid+ " " + emailValid + " "+ passwordValid);
    if(fNameValid == true && lNameValid==true && emailValid==true && passwordValid == true){
       var finalObject = {};
       finalObject['firstName'] = firstName.value;
       finalObject['lastName'] = lastName.value;
       finalObject['email'] = email.value;
       finalObject['password'] = password.value;
       localStorage.setItem('userinfo', JSON.stringify(finalObject));
       sts.textContent = "Submitting the form. please wait!!";
       setTimeout(() => {
        sts.textContent = "Hurry!! Form submitted successfully";
       }, 3000);
    }
})

function customValidator(documentRef, classId, errorMessage){
    
    if(documentRef.value.trim() == ''){
        documentRef.style.border = '2px solid red';
        errMsg[classId].textContent== errorMessage;
        return false;
    }
    else{
        documentRef.style.border = '2px solid green';
        errMsg[classId].textContent== '';
        return true;

    }
}