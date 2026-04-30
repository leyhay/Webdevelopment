let data;
async function init(){
    let link = "311.json"
    info = await fetch(link);
    data = await info.json();
    let output = document.getElementById("output");
    
    build = "";
    for(let i=0;i<data.length;i+=1){
        complaint = data[i]
        build += `<div class=card>
                     <h3>Crash Date : ${complaint.crash_date}</h3>
                     <p>Crash Time : ${complaint.crash_time}</p>
                     <p>Street Name : ${complaint.on_street_name}</p>
                     <p>Persons Killed : ${complaint.number_of_persons_killed}</p>
                     <p>Persons Injured : ${complaint.number_of_persons_injured}</p>
                     <hr>
                     <p>Reason for Crash : ${complaint.contributing_factor_vehichle_1}</p>
                     <p>Collision ID : ${complaint.collision_id}</p>
                     <p>Vehichle Type : ${complaint.vehicle_type_code1}</p>
                </div>`
    }
    output.innerHTML = build;
}

function Area(){
    let a = document.getElementById("area").value;
    let output = document.getElementById("output");

    build = "";
    for(let i=0;i<data.length;i+=1){
        complaint = data[i]
        if(complaint.on_street_name == a){
        build += `<div class=card>
                     <h2>Crash Date : ${complaint.crash_date}</h2>
                     <p>Crash Time : ${complaint.crash_time}</p>
                     <p>Street Name : ${complaint.on_street_name}</p>
                     <p>Persons Killed : ${complaint.number_of_persons_killed}</p>
                     <p>Persons Injured : ${complaint.number_of_persons_injured}</p>
                     <hr>
                     <p>Reason for Crash : ${complaint.contributing_factor_vehichle_1}</p>
                     <p>Collision ID : ${complaint.collision_id}</p>
                     <p>Vehichle Type : ${complaint.vehicle_type_code1}</p>
                </div>`
        }
    }
    output.innerHTML = build;
}

function Time(){
    let t = document.getElementById("time").value;
    let output = document.getElementById("output");

    build = "";
    for(let i=0;i<data.length;i+=1){
        complaint = data[i]
        if(complaint.crash_time == t){
        build += `<div class=card>
                     <h2>Crash Date : ${complaint.crash_date}</h2>
                     <p>Crash Time : ${complaint.crash_time}</p>
                     <p>Street Name : ${complaint.on_street_name}</p>
                     <p>Persons Killed : ${complaint.number_of_persons_killed}</p>
                     <p>Persons Injured : ${complaint.number_of_persons_injured}</p>
                     <hr>
                     <p>Reason for Crash : ${complaint.contributing_factor_vehichle_1}</p>
                     <p>Collision ID : ${complaint.collision_id}</p>
                     <p>Vehichle Type : ${complaint.vehicle_type_code1}</p>
                </div>`
        }
    }
    output.innerHTML = build;
}

function Hurt(){
    let h = document.getElementById("hurt").value;
    let output = document.getElementById("output");

    build = "";
    for(let i=0;i<data.length;i+=1){
        complaint = data[i]
        if(complaint.number_of_persons_killed == h || complaint.number_of_persons_injured == h){
        build += `<div class=card>
                     <h2>Crash Date : ${complaint.crash_date}</h2>
                     <p>Crash Time : ${complaint.crash_time}</p>
                     <p>Street Name : ${complaint.on_street_name}</p>
                     <p>Persons Killed : ${complaint.number_of_persons_killed}</p>
                     <p>Persons Injured : ${complaint.number_of_persons_injured}</p>
                     <hr>
                     <p>Reason for Crash : ${complaint.contributing_factor_vehichle_1}</p>
                     <p>Collision ID : ${complaint.collision_id}</p>
                     <p>Vehichle Type : ${complaint.vehicle_type_code1}</p>
                </div>`
        }
    }
    output.innerHTML = build;
}

function Reason(){
    let r = document.getElementById("reason").value;
    let output = document.getElementById("output");

    build = "";
    for(let i=0;i<data.length;i+=1){
        complaint = data[i]
        if(complaint.contributing_factor_vehichle_1 == r){
        build += `<div class=card>
                     <h2>Crash Date : ${complaint.crash_date}</h2>
                     <p>Crash Time : ${complaint.crash_time}</p>
                     <p>Street Name : ${complaint.on_street_name}</p>
                     <p>Persons Killed : ${complaint.number_of_persons_killed}</p>
                     <p>Persons Injured : ${complaint.number_of_persons_injured}</p>
                     <hr>
                     <p>Reason for Crash : ${complaint.contributing_factor_vehichle_1}</p>
                     <p>Collision ID : ${complaint.collision_id}</p>
                     <p>Vehichle Type : ${complaint.vehicle_type_code1}</p>
                </div>`
        }
    }
    output.innerHTML = build;
}

function ID(){
    let c = document.getElementById("collision").value;
    let output = document.getElementById("output");

    build = "";
    for(let i=0;i<data.length;i+=1){
        complaint = data[i]
        if(complaint.collision_id == c){
        build += `<div class=card>
                     <h2>Crash Date : ${complaint.crash_date}</h2>
                     <p>Crash Time : ${complaint.crash_time}</p>
                     <p>Street Name : ${complaint.on_street_name}</p>
                     <p>Persons Killed : ${complaint.number_of_persons_killed}</p>
                     <p>Persons Injured : ${complaint.number_of_persons_injured}</p>
                     <hr>
                     <p>Reason for Crash : ${complaint.contributing_factor_vehichle_1}</p>
                     <p>Collision ID : ${complaint.collision_id}</p>
                     <p>Vehichle Type : ${complaint.vehicle_type_code1}</p>
                </div>`
        }
    }
    output.innerHTML = build;
}

function Car(){
    let car = document.getElementById("car").value;
    let output = document.getElementById("output");

    build = "";
    for(let i=0;i<data.length;i+=1){
        complaint = data[i]
        if(complaint.vehicle_type_code1 == car){
        build += `<div class=card>
                     <h2>Crash Date : ${complaint.crash_date}</h2>
                     <p>Crash Time : ${complaint.crash_time}</p>
                     <p>Street Name : ${complaint.on_street_name}</p>
                     <p>Persons Killed : ${complaint.number_of_persons_killed}</p>
                     <p>Persons Injured : ${complaint.number_of_persons_injured}</p>
                     <hr>
                     <p>Reason for Crash : ${complaint.contributing_factor_vehichle_1}</p>
                     <p>Collision ID : ${complaint.collision_id}</p>
                     <p>Vehichle Type : ${complaint.vehicle_type_code1}</p>
                </div>`
        }
    }
    output.innerHTML = build;
}
