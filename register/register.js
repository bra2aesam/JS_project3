// localStorage.clear()
var flag1 = false
var flag2 = false
var flag3 = false
var flag4 = false
var flag5 = false
var flag6 = false
var flag7 = true

const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector(".signup-link a");
const loginText = document.querySelector(".title_text .login");
const signupText = document.querySelector(".title_text .signup");

signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});

loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});

signupLink.onclick = (() => {
    signupBtn.click()
    return false;
}
)

//Register Form
var F = document.getElementById("firstname");
var L = document.getElementById("lastname");
var E = document.getElementById("email");
var CE = document.getElementById("ConfirmEmail");
var M = document.getElementById("Mobile");
var P = document.getElementById("password");
var CP = document.getElementById("ConfirmPassword");


let regname = /^[A-Za-z]+$/;
function regex(
    
) {
   

    if (F.value.match(regname)) {
        flag1 = true
        document.getElementById('errorF').innerHTML = ''
        return true
    }
    else {
        return document.getElementById('errorF').innerHTML = 'must not contain Numbers'
    }
}

function regexl() {
    

    if (L.value.match(regname)) {
        flag2 = true
        document.getElementById('errorL').innerHTML = ''
        return true
    }
    else {
        return document.getElementById('errorL').innerHTML = 'must not contain Numbers'
    }
}




function regE() {
    let y = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (E.value.match(y)) {
        flag3 = true
        document.getElementById('errorE').innerHTML = ''
        return true
    }
    else {
        return document.getElementById('errorE').innerHTML = 'Email not valid'
    };

}





function regc() {
    if (E.value == CE.value) {
        document.getElementById('errorCE').innerHTML = ''
        return true
    }
    else {
        return document.getElementById('errorCE').innerHTML = 'Email not Confirmed'
    }

}

function regM() {
    let reg = /^\d{10}$/
    if (!isNaN(M.value) && (M.value.match(reg))) {
        flag4 = true
        document.getElementById('errorM').innerHTML = ''
        return true;

    }

    else {
        return document.getElementById('errorM').innerHTML = 'mobile Number invalid'
    }
}

function regp() {

    let regexp = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/
    if (P.value.match(regexp)) {
        flag5 = true
        document.getElementById('errorP').innerHTML = ''
        return true
    }
    else {
        return document.getElementById('errorP').innerHTML = 'password not valid'
    };
}


function regcp() {
    if (P.value == CP.value) {
        flag6 = true
        document.getElementById('errorCP').innerHTML = ''
        return true
    }
    else {
        return document.getElementById('errorCP').innerHTML = 'Password not Confirmed'
    }
}




 x = JSON.parse(localStorage.getItem('users')) ||[];

function data(event) {
    console.log(x,'hi')
    x.forEach(function(ele){
        console.log(ele.Email,'bbbbbbbb')
        console.log(E.value,'aaaaaa')
        if (ele.Email == E.value){
            console.log('aaaaaa')
            flag7 = false
        }
    })
    
    console.log(F.value,"First name");
    console.log(L.value,"First name");
    console.log(E.value,"First name");
    console.log(CE.value,"First name");
    console.log(flag7)

    if(!(flag7)){

         document.getElementById('errorCP').innerHTML = 'user exist'
     }


    if (flag1 && flag2 && flag3 && flag4 && flag5 && flag6 && flag7) {

        let user = { "firstName": F.value, "lastName": L.value, "Email": E.value, "confirmEmail": CE.value, "mobile": M.value, "Password": P.value, "confirmPassword": CP.value ,'bio':""};
        x.push(user);
     

        let data = JSON.stringify(x);

        localStorage.setItem('users', data);

      
        window.location.href='register.html'
 }


}









function login() {

    // var newdata = x.map(data)
    var inputemail = document.getElementById("inputemail").value;
    var inputpassword = document.getElementById("inputpassword").value;
    // let arr = JSON.parse(localStorage.getItem('users'))
    console.log(JSON.parse(localStorage.getItem('users')))
    if(JSON.parse(localStorage.getItem('users')) == null){console.log("hi");}
    if(JSON.parse(localStorage.getItem('users'))){
    arr = (JSON.parse(localStorage.getItem('users')))
    arr.map(e => {
        console.log(e.Email,"hi")
        if (e.Email == inputemail && e.Password == inputpassword) {
            console.log(`Welcome `)

            localStorage.setItem('currentuser',JSON.stringify(e))
            window.location.href="../homeAfter/homeAfter.html"


        }
        else {
            return document.getElementById('massagerror').innerHTML = 'Email Or Password incorrect'
        }
    })

}}








