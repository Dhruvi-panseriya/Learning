function clearErrors(){
    errors=document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML = "";
    }
}


function seterror(id,error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm(){
    var returnval = true;

    clearErrors();

    var name = document.forms['myForm']["fname"].value;
    if(name.length<5){
        seterror("name","*Length of name is too short");
        returnval = false;
    }
    if(name.length==0){
        seterror("name","*Length of name can't be zero");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if(email.length>15){
        seterror("email","*Email length is too long");
        returnval = false;
    }

    var fphone = document.forms['myForm']["fphone"].value;
    if(fphone.length != 10){
        seterror("fphone","*Phone number should be of 10 digits");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if(password.length < 8){
        seterror("pass","*Password should be atleast 8 characters long");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if(cpassword.length != password){
        seterror("fcpass","*Password not matched");
        returnval = false;
    }




    return returnval;
}
