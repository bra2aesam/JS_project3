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
    "status" : "inactive",
    
     }
     let tranie5 = {
    "Name" : "baraa abumatiq",
    "Tasks_accomplished" : 50,
    "Tasks_missed" : 50,
    "absence_days" : 0,
    "all_days":100,
    "status" : "active",
     }
    let tranies = JSON.parse(localStorage.getItem("tranies"))||[tranie1,tranie2,tranie3,tranie4,tranie5]
    // git data to local storge
    localStorage.setItem("tranies",(JSON.stringify(tranies)))
    // build the table 
    function read_data(){
    //table headers  
    html =`<table class="table"><thead><tr><th>ID</th><th>Name</th><th>Task<br><span class="Completed_green">Completed</span> / <span class="missd_red">missd</span></th><th>Attendance<br><span class="missd_red">all days/absence days</span></th><th>status</th><th></th><th></th></tr></thead>`
    // build a place to add new_traine and make it invisiable
    html+=`<tr><td></td><td class="hied"><input placeholder="New id" class="input hied" type="number"id="new_id"</td><td><input class="input" placeholder="Name"  type="text" id="new_name"</td><td><button class="input add_button" id="add_button" type="button" onclick="Add_traine_final()">+ADD</button></td><td></td><td></td><td></td></tr>`
    //make a loop to get data from the array
    storege_tranies = JSON.parse(localStorage.getItem("tranies"))
    i = 1 
    storege_tranies.map(function(tranie){
    html+=`<tr id ="${i}"><td>${i}</td><td>${tranie.Name}</td><td>${tranie.Tasks_accomplished}/${tranie.Tasks_missed}</td><td>${tranie.all_days}/${tranie.absence_days}</td><td>${tranie.status}</td>`
    //make a remove button for each traine and make it invisable give it id from traine id
    html+=`<td><button class="remove_button" id="remove${i}" type="button" onclick="remove_traine_final(${i})">-del</button></td>`
    //make abssence button
    // html+=`<td><button class="hied add_button attendance_button" id="${i}attendance_button" type="button" onclick="take_attendence_final(${i})" onmouseover="change(${i})" onmouseleave="change2(${i})">attendant</button></td>`
    //make a edit button for each traine and make it invisable give it id from traine id
    html+=`<td><button class="edite edite_button" id="_${i}_" type="button" onclick="edite_traine_final(${i})">edit</button></td></tr>`
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
            new_tranie = {
            "Name":document.getElementById("new_name").value,
            "Tasks_accomplished" : 0,
            "Tasks_missed" : 0,
            "absence_days" : 0,
            "all_days":0,
            "status" : "active",
    
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
        // function remove_traine() {
        //     if (document.getElementById("remove_head").style.display == "initial"){
        //     document.getElementById("remove_head").style.display = "none";
        //     storege_tranies = JSON.parse(localStorage.getItem("tranies")) 
        //     storege_tranies.map(function(tranie){
        //     document.getElementById(tranie.ID).style.display = "none"
        //     console.log(tranie.ID)
        // })}
        //     else {
        //     document.getElementById("remove_head").style.display = "initial";
        //     storege_tranies = JSON.parse(localStorage.getItem("tranies")) 
        //     storege_tranies.map(function(tranie){
        //     document.getElementById(tranie.ID).style.display = "initial"
        //     console.log(tranie.ID)})}}
        //to remove a traine id_remove is the button id and its the same of traine id
        function remove_traine_final(i){
            // first get the traine from the local storege
            storege_tranies = JSON.parse(localStorage.getItem("tranies"))
            // identify the student you want to remove
            storege_tranies[i-1].status = "inactive"
            // store 
            localStorage.setItem("tranies",(JSON.stringify(storege_tranies)))
            read_data()}
    
        // edit traine step1
        function edite_traine_final(i){
            edit_row = document.getElementById(`${i}`)
            storege_tranies = JSON.parse(localStorage.getItem("tranies")) 
            edit_traine = storege_tranies[i-1]
            console.log(i)
            input_edit_row = `<tr><td>${i}</td><td><input class="change" value="${storege_tranies[i-1].Name}" type="text" id="change_name"</td><td><input class="change1" value="${edit_traine.Tasks_accomplished}" id="change_accomplished_task">/<input class="change1" value="${edit_traine.Tasks_missed}" id="change_missed_task"></td><td><input class="change"  value="${storege_tranies[i-1].absence_days}"type="text" id="change_attendence"</td><td><button class="edite_save save_edite_button" id="s_${i}_" type="button" onclick="edite_traine_final2(${i})">save</button></td></tr>`
            edit_row.innerHTML = input_edit_row
        }
            // edit traine step2
        function edite_traine_final2(i) {
            storege_tranies = JSON.parse(localStorage.getItem("tranies")) 
            storege_tranies[i-1] = {
            "Name":document.getElementById("change_name").value,
            "Tasks_accomplished":document.getElementById("change_accomplished_task").value,
            "Tasks_missed" :document.getElementById("change_missed_task").value,
            "absence_days":document.getElementById("change_attendence").value,
            "all_days":storege_tranies[i-1].all_days,
            "status" : storege_tranies[i-1].status,

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
    
    
        
    
    