// localStorage.clear()
let tranie1 = {
"Name" : "Talab yaseen",
"Tasks_accomplished" : 50,
"Tasks_missed" : 40,
"absence_days" : 100,
"all_days":100,
"status" : "active",

}
let tranie2 = {
"Name" : "Karam hatem",
"Tasks_accomplished" : 50,
"Tasks_missed" : 50,
"absence_days" : 5,
"all_days":100,
"status" : "active",

}
let tranie3 = {
"Name" : "Hanen",
"Tasks_accomplished" : 50,
"Tasks_missed" : 50,
"absence_days" : 4,
"all_days":100,
"status" : "active",

 }
 let tranie4 = {
"Name" : "Asem yaseen",
"Tasks_accomplished" : 50,
"Tasks_missed" : 50,
"absence_days" : 1,
"all_days":100,
"status" : "active",

 }
 let tranie5 = {
"Name" : "baraa abumatiq",
"Tasks_accomplished" : 50,
"Tasks_missed" : 50,
"absence_days" : 0,
"all_days":100,
"status" : "inactive",

 }
let tranies = JSON.parse(localStorage.getItem("tranies"))||[tranie1,tranie2,tranie3,tranie4,tranie5]
// git data to local storge
localStorage.setItem("tranies",(JSON.stringify(tranies)))
// build the table 
function read_data(){
//table headers  class="hied"
html =`<table class="table"><thead><tr><th>ID</th><th>Name</th><th>Task<br><span class="Completed_green">Completed</span> / <span class="missd_red">missd</span></th><th>Attendance<br><span class="missd_red">all days/absence days</span></th><th><button class="hied add_button attendance_button" id="save_attendance" type="button" onclick="save_attendance()">save attendance</button></th><th></th><th></th></tr></thead>`
//build a place to add new_traine and make it invisiable
// html+=`<tr><td></td><td class="hied"><input placeholder="New id" class="input hied" type="number"id="new_id"</td><td><input class="input" placeholder="Name"  type="text" id="new_name"</td><td><button class="input add_button" id="add_button" type="button" onclick="Add_traine_final()">+ADD</button></td><td></td><td></td><td></td><td></td></tr>`
//make a loop to get data from the array
storege_tranies = JSON.parse(localStorage.getItem("tranies"))
i = 1 
storege_tranies.map(function(tranie){ if(tranie.status == "active"){
html+=`<tr id ="${i}"><td>${i}</td><td>${tranie.Name}</td><td>${tranie.Tasks_accomplished}/${tranie.Tasks_missed}</td><td>${tranie.all_days}/${tranie.absence_days}</td>`}
//make a remove button for each traine and make it invisable give it id from traine id
// html+=`<td><button class="remove remove_button" id="${tranie.ID}" type="button" onclick="remove_traine_final(${tranie.ID})">-del</button></td>`
//make abssence button
if(tranie.status == "active"){
html+=`<td><button class="hied add_button attendance_button" id="${i}attendance_button" type="button" onclick="take_attendence_final(${i})" onmouseover="change(${i})" onmouseleave="change2(${i})">attendant</button></td><tr>`}
//make a edit button for each traine and make it invisable give it id from traine id
// html+=`<td><button class="edite edite_button" id="_${tranie.ID}_" type="button" onclick="edite_traine_final(${i})">edit</button></td>`
i = i+1
}) 
// close the table 
html+=`</table>`
// print the data from the table
document.getElementById("table_container").innerHTML = html;
}
read_data()
// add new triane
function Add_traine(){
    if (document.getElementById("new_id").style.display == "initial"){
    document.getElementById("new_id").style.display = "none";
    document.getElementById("new_name").style.display = "none";
    document.getElementById("add_button").style.display = "none";
}else {
    document.getElementById("new_id").style.display = "initial";
    document.getElementById("new_name").style.display = "initial";
    document.getElementById("add_button").style.display = "initial";
}
    }
    // add new triane step two
    function Add_traine_final(){
        storege_tranies = JSON.parse(localStorage.getItem("tranies"))  
        new_tranie = {"ID":document.getElementById("new_id").value,
        "Name":document.getElementById("new_name").value,
        "Tasks(accomplished/missed)" : 0,
        "absence_days" :0,
        "all_days":0

    }
    storege_tranies.push(new_tranie)
    localStorage.setItem("tranies",(JSON.stringify(storege_tranies)))
    new_feed = {"traine":document.getElementById("new_name").value,
    "feddbacktext":""}
    // make a room to add feedback
    arr1 = JSON.parse(localStorage.getItem("Salama_feedback"))||[]
    arr2 = JSON.parse(localStorage.getItem("Mona_feedback"))||[]
    arr3 = JSON.parse(localStorage.getItem("hadeel_feedback"))||[]
    arr4 = JSON.parse(localStorage.getItem("Alaa_feedback")) ||[]
    arr1.push(new_feed)
    arr2.push(new_feed)
    arr3.push(new_feed)
    arr4.push(new_feed)
    localStorage.setItem("Salama_feedback",JSON.stringify(arr1))
    localStorage.setItem("Mona_feedback",JSON.stringify(arr2))
    localStorage.setItem("hadeel_feedback",JSON.stringify(arr3))
    localStorage.setItem("Alaa_feedback",JSON.stringify(arr4))



    read_data()

    }
    //to make remove button for each traine diappear or appear
    function remove_traine() {
        if (document.getElementById("remove_head").style.display == "initial"){
        document.getElementById("remove_head").style.display = "none";
        storege_tranies = JSON.parse(localStorage.getItem("tranies")) 
        storege_tranies.map(function(tranie){
        document.getElementById(tranie.ID).style.display = "none"
        console.log(tranie.ID)
    })}
        else {
        document.getElementById("remove_head").style.display = "initial";
        storege_tranies = JSON.parse(localStorage.getItem("tranies")) 
        storege_tranies.map(function(tranie){
        document.getElementById(tranie.ID).style.display = "initial"
        console.log(tranie.ID)})}}
    //to remove a traine id_remove is the button id and its the same of traine id
    function remove_traine_final(id_remove){
        // first get the traine from the local storege
        storege_tranies = JSON.parse(localStorage.getItem("tranies"))
        // make a new array to push all traine in it except the traine you want to remove 
        update_storege_tranies =[]
        // get every traine in the array indivisualy 
        storege_tranies.forEach(element => {
        // if the button has the same id as the traine do nothing
            if(element.ID == id_remove) {}
        // add every other traine to the new array 
            else{update_storege_tranies.push(element) }})
        // store 
        localStorage.setItem("tranies",(JSON.stringify(update_storege_tranies)))
        read_data()}

            // to make attendance button for each student apper
    function abs_traine() {
        attendance_buttons = document.getElementsByClassName("attendance_button");
        attendance_buttons = [...attendance_buttons]
        attendance_buttons.forEach(function(element){
        element.classList.toggle('hied');
        console.log(element)
        })
        console.log(attendance_buttons)
    }
    // take attendance step two
    function take_attendence_final(i){

        storege_tranies = JSON.parse(localStorage.getItem("tranies"))
        storege_tranies[i-1].absence_days= Number(storege_tranies[i-1].absence_days) + 1
        localStorage.setItem("tranies",JSON.stringify(storege_tranies) )
        document.getElementById(`${i}attendance_button`).style.display = "none"
        localStorage.setItem("tranies",JSON.stringify(update_storege_tranies) )
    }
    // to add new day for all days final step taking attendance
    function save_attendance(){
        update_storege_tranies = storege_tranies.map(element => {
                pluse =(Number(element.all_days)+1);
                element.all_days = pluse
                return element})
        localStorage.setItem("tranies",JSON.stringify(update_storege_tranies) )
         read_data()
    }
    // change color for absence button and text
    function change(i){
        document.getElementById(`${i}attendance_button`).innerHTML = "absensce";
        document.getElementById(`${i}attendance_button`).style.backgroundColor = "red";
    }
    // change color for absence button and text
    function change2(i){
        console.log(i)
        document.getElementById(`${i}attendance_button`).innerHTML = "attendant";
        document.getElementById(`${i}attendance_button`).style.backgroundColor = "white";
    }
    // edit traine step1
    function edite_traine_final(i){
        edit_row = document.getElementById(`${i}`)
        storege_tranies = JSON.parse(localStorage.getItem("tranies")) 
        console.log(i)
        input_edit_row = `<tr><td>${i}</td><td class="hied"><input class="change" value="${storege_tranies[i-1].ID}"  type="number"id="change_id"></td><td><input class="change" value="${storege_tranies[i-1].Name}"  type="text" id="change_name"</td><td><input class="change" value="${storege_tranies[i-1]["Tasks(accomplished/missed)"]}"  type="text" id="change_task"</td><td><input class="change"  value="${storege_tranies[i-1].absence_days}"type="text" id="change_attendence"</td><td><button class="edite_save save_edite_button" id="s_${i}_" type="button" onclick="edite_traine_final2(${i})">save</button></td></tr>`
        edit_row.innerHTML = input_edit_row
    }
        // edit traine step2
    function edite_traine_final2(i) {
        storege_tranies[i-1] = {"ID":document.getElementById("change_id").value,
        "Name":document.getElementById("change_name").value,
        "Tasks(accomplished/missed)":document.getElementById("change_task").value,
        "absence_days":document.getElementById("change_attendence").value,
        "all_days":storege_tranies[i-1].all_days,
        }
        localStorage.setItem("tranies",(JSON.stringify(storege_tranies)))
        read_data()
    }
    // move bettwen pages
    function move(ss){
        if (ss == "home") {
            window.location.href = "../homeAfter/homeAfter.html"
        } else if (ss == "profile") {
            window.location.href = "../Profile/profile.html"
        } else if (ss == "student") {
            window.location.href = "../attendance/attendance.html"
        } else if (ss == "feedback") {
            window.location.href = "../FeedBackSection/index1.html"
        } else if (ss == "out") {
            window.location.href = "../index.html"
        }
    }
    //choise the which picture to appear
    currentuser = JSON.parse(localStorage.getItem("currentuser"))
    switch(currentuser.firstName){
    case "Mona":
    document.getElementById("image1").src = "../img/mona.png"
    break;
    case "Alaa":
    document.getElementById("image1").src = "../img/alaa.png"
    break;
    case "Salama":
    document.getElementById("image1").src = "../img/salama.png"
    break;
    case "hadeel":
    document.getElementById("image1").src = "../img/hadee.png"
    break;
    default:document.getElementById("image1").src = "../img/defaultimages.png"        
    break;
    
}
    //choise the which name to appear
document.getElementById("namee").innerHTML = currentuser.firstName


    

