var password = document.getElementById("password");
var flag = 1;   //1->no error   0->error

function passCheck(e) {
    const lowerCase = new RegExp('(?=.*[a-z])');
    const upperCase = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const specialChar = new RegExp('(?=.*[!@#\$%\^&\*])');
    const eightChar = new RegExp('(?=.{8,})');

    var passClass = document.getElementsByClassName("password-check");

    if(eightChar.test(e)) {
        passClass[0].style.color = "green";
    }else {
        passClass[0].style.color = "#555";
    }

    if(lowerCase.test(e)) {
        passClass[1].style.color = "green";
    }else {
        passClass[1].style.color = "#555";
    }

    if(upperCase.test(e)) {
        passClass[2].style.color = "green";
    }else {
        passClass[2].style.color = "#555";
    }

    if(number.test(e)) {
        passClass[3].style.color = "green";
    }else {
        passClass[3].style.color = "#555";
    }

    if(specialChar.test(e)) {
        passClass[4].style.color = "green";
    }else {
        passClass[4].style.color = "#555";
    }
}


var pattern = /\s/i;    //\s checks existence of white sapce    /g for globally
var sp = document.getElementById("space");

function whiteSpace(e) {
    var isSpace = pattern.test(e);      //gives true or false
    if(isSpace) {
        sp.innerText = "Space is not allowed in Username and Password";
    }else {
        sp.innerText = "";
    }
}
//Above function is not working don't know why?????     15:59   Wscube Tech     33:11:31

window.addEventListener("keyup", event => {
    var isCap = event.getModifierState("CapsLock");     //gives true or false
    console.log(isCap);

    if(isCap){
        document.getElementById("caps").innerText = "Note : CapsLock is On";
    }else {
        document.getElementById("caps").innerText = "";
    }
})

function check(e) {
    if(e.value.length > 0) {
        if(e.value != password.value) {
            document.getElementById("err").innerText = "Confirm Password doesn't match";
            flag = 0;
        }else {
            document.getElementById("err").innerText = "";
            flag = 1;
        }
    }else {
        document.getElementById("err").innerText = "";
        flag = 0;
    }
} 

function validate() {
    if(flag == 1){
        return true;
    }else {
        return false;
    }
}