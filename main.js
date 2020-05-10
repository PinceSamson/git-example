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


function showtime(){
    
let time = document.getElementById("time");
let time1 = document.getElementById("time1");

let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
let session = "AM";
if(h == "0"){
    h = 12;
}
if(h >12){
    h = h - 12;
    session = "PM"
}
if(h <10){
    h = "0" + h;
}
if(m < 10){
    m = "0" + m;
}
if(s <10){
    s = "0" + s;
}
let timeout = h + ":" + " " + m  + ":" + " " + s + " " + session;

console.log(timeout);







time.innerHTML = d;
time1.innerHTML = timeout;

setTimeout(showtime, 1000);
}showtime();
// setInterval(showtime, 1000);




let subject1 = ["html", "practice", "css", "javascript", "mathematics", "play game", "jquery", "watch movies", "no class"];
let lent = subject1.length;
let subject2;
let subject3;
let button = document.getElementsByClassName("show");
// console.log(button);

let number = "0";


function show(){
    // let show = this.button= "<p>"+ "ok" +"</p>";
 
    let ri = Math.floor(Math.random() * lent);

    let result = subject1[ri]
    document.getElementById("write").innerHTML = result;
    
}




