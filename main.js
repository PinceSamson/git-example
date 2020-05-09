// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4){
//         if(xhr.status == 200){
//             console.log(xhr.responseText);
            
//         }
//         if(xhr.status == 404){
//             console.log("file not found");
            
//         }
//     }
// }
// xhr.open("get", "test.txt", true);
// xhr.send();



let time = document.getElementById("time");
let d = new Date();
time.innerHTML = d;




let subject1 = ["html", "practice", "css", "javascript", "mathematics", "play game", "jquery", "watch movies", "no class"];
let lent = subject1.length;
let subject2;
let subject3;
let button = document.getElementsByTagName("button");
let number = "0";


function show(){
    this.button
    let ri = Math.floor(Math.random() * lent);
    let result = subject1[ri]
    document.getElementById("write").innerHTML = result;
    
}




