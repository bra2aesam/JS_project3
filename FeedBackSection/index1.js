// localStorage.clear()
// test data
// loged_in = {"name":"alaa",
// "email":"alaa@gmail.com",
// "phone_num":"0777777777"}


// add objects for feedbacks 
alaa_feedback = JSON.parse(localStorage.getItem("Alaa_feedback"))||
[{"traine":"Talab yaseen",
"feddbacktext":"he is great"},
{"traine":"Asem yaseen",
"feddbacktext":"he is amazing"},
{"traine":"Hanen",
"feddbacktext":"he did a good job"},{
"traine":"Karam hatem",
"feddbacktext":""},
{"traine":"baraa abumatiq",
"feddbacktext":""}]
mona_feedback = JSON.parse(localStorage.getItem("Mona_feedback"))||
[{"traine":"Talab yaseen",
"feddbacktext":"he dont arive late anymore"},
{"traine":"Asem yaseen",
"feddbacktext":"he need to do more effort"},
{"traine":"Hanen",
"feddbacktext":""},{
"traine":"Karam hatem",
"feddbacktext":""},
{"traine":"baraa abumatiq",
"feddbacktext":""}]
salama_feedback = JSON.parse(localStorage.getItem("Salama_feedback"))||
[{"traine":"Talab yaseen",
"feddbacktext":"he did a good job"},
{"traine":"Asem yaseen",
"feddbacktext":""},
{"traine":"Hanen",
"feddbacktext":""},{
"traine":"Karam hatem",
"feddbacktext":""},
{"traine":"baraa abumatiq",
"feddbacktext":""}]
hadeel_feedback = JSON.parse(localStorage.getItem("hadeel_feedback"))||
[{"traine":"Talab yaseen",
"feddbacktext":""},
{"traine":"Asem yaseen",
"feddbacktext":""
},{"traine":"Hanen",
"feddbacktext":""},{
"traine":"Karam hatem",
"feddbacktext":""},
{"traine":"baraa abumatiq",
"feddbacktext":""}]
// localStorage.setItem("loged_in",JSON.stringify(loged_in))

// send feedback data to localstorage
localStorage.setItem("Alaa_feedback",JSON.stringify(alaa_feedback))
localStorage.setItem("Mona_feedback",JSON.stringify(mona_feedback))
localStorage.setItem("Salama_feedback",JSON.stringify(salama_feedback))
localStorage.setItem("hadeel_feedback",JSON.stringify(hadeel_feedback))



///////////////////////////////////////////////////


// let tranies = JSON.parse(localStorage.getItem("tranies"))||[tranie1,tranie2,tranie3,tranie4,tranie5]

// localStorage.setItem("tranies",(JSON.stringify(tranies)))

// storege_tranies = JSON.parse(localStorage.getItem("tranies"))   


// document.getElementById("Some").innerHTML = FullData;



// add tranies name to optins in select
storege_tranies = JSON.parse(localStorage.getItem("tranies"))   
let selected = document.getElementById("selectStyle")
storege_tranies.map(function(tranie){

    selected+= `<option>${tranie.Name}</option>`
}
    )
document.getElementById("selectStyle").innerHTML = selected;

// function textfunc(){
// let textarr = []
// let textobj={}
// let textA = document.getElementById("textArea").value

// textobj = {"TextArea":textA }
// textarr.push(textobj)
// localStorage.setItem ("Textarea" , (JSON.stringify(textarr)))

// }


// show feedback for each student by tranier
function funcselectchange(valu) {
    mona = (JSON.parse(localStorage.getItem("Mona_feedback")))
    mona.forEach(element => {
        if (element.traine == valu) {
            document.getElementById("Mona_feedback").innerHTML =element.feddbacktext
        }
    });
    alaa = (JSON.parse(localStorage.getItem("Alaa_feedback")))
    alaa.forEach(element => {
        if (element.traine == valu) {
            document.getElementById("Alaa_feedback").innerHTML =element.feddbacktext
        }
    });
    hadeel = (JSON.parse(localStorage.getItem("hadeel_feedback")))
    hadeel.forEach(element => {
        if (element.traine == valu) {
            document.getElementById("hadeel_feedback").innerHTML =element.feddbacktext
        }
    });
    salama = (JSON.parse(localStorage.getItem("Salama_feedback")))
    salama.forEach(element => {
        if (element.traine == valu) {
            document.getElementById("Salama_feedback").innerHTML =element.feddbacktext
        }
    });
}

// to get the value from textarea and add it by coach
function textfunc() {
    traine_name = document.getElementById("selectStyle").value
    text = document.getElementById("textArea").value
    namee = JSON.parse(localStorage.getItem("currentuser")).firstName
    // console.log(namee)
    feedback_update = JSON.parse(localStorage.getItem(`${namee}_feedback`))
    // console.log(alaa_feedback_update)
    feedback_update_final=feedback_update.map(function(ele){
        if(traine_name ==ele.traine){
            ele.feddbacktext = text
            return ele
        }else{return ele}
    })
    localStorage.setItem(`${namee}_feedback`,JSON.stringify(feedback_update_final) )
    funcselectchange(traine_name)
    document.getElementById("textArea").innerHTML =""

}


// to add a counter for letters 
let textarea = document.querySelector("textarea");

textarea.addEventListener("input", event => {
    let target = event.currentTarget;
    let maxLength = target.getAttribute("maxlength");
    let currentLength = target.value.length;

    if (currentLength >= maxLength) {
        document.getElementById("redCounter").innerHTML = "You have reached the maximum number of characters."
    }else{ document.getElementById("redCounter").innerHTML =""

    }
    
    console.log(`${maxLength - currentLength}/ chars left`);
    document.getElementById("lettersCounter").innerHTML =`${maxLength - currentLength}/30`
});

// to move to other sections in my page by navbar
function move(ss){
    if (ss == "home") {
        window.location.href = "../homeAfter/homeAfter.html"
    } else if (ss == "profile") {
        window.location.href = "../Profile/profile.html"
    } else if (ss == "student") {
        window.location.href = "../attendance/attendance.html"
    } else if (ss == "feedback") {
        window.location.href = "./index1.html"
    } else if (ss == "out") {
        window.location.href = "../index.html"
    }
}

// to add picture from current user 
currentuser = JSON.parse(localStorage.getItem("currentuser"))
switch(currentuser.firstName){
    case "Mona":
    document.getElementById("image").src = "../img/mona.png"
    break;
    case "Alaa":
    document.getElementById("image").src = "../img/alaa.png"
    break;
    case "Salama":
    document.getElementById("image").src = "../img/salama.png"
    break;
    case "hadeel":
    document.getElementById("image").src = "../img/hadee.png"
    break;
    default:document.getElementById("image").src = "../img/defaultimages.png"        
   break;
    
    
}
document.getElementById("namee").innerHTML = currentuser.firstName















//      setInterval (
//      function myTimer() {
             

//                 const randomColor = "#"+Math.floor(Math.random()*7824256).toString(16);
                

//                 // document.body.style.backgroundColor = randomColor;
//                 document.getElementById("feedTextHeader").style.color = randomColor;

//            } , 1000 )



// myTimer()


