let data;
async function init(){
    let link = "311.json"
    info = await fetch(link);
    data = await info.json;
    complaint = data[i];
    
    build = "";
    for(let i=0;i<data.length;i+=1){
        build += `<div class=card>
                     <h2></h2>`
    }

    function Area(){
        let a = document.getElementById("area");
        let output = document.getElementById("output");
}
}