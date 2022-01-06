// setTimeout(function() {
//     console.log("3초가 지남") 
//  },3000)

//  setTimeout(function() {
//     console.log("3초가 지남") 
//  },3000)
//  31
//  setTimeout(function() {
//     console.log("3초가 지남") 
//  },3000)
//  setTimeout(function() {
//     console.log("3초가 지남") 
//  },5000)
// //  setInterval(function() {
// //     console.log("1초가 지남") 
// //  },1000)
// //  setInterval((function() {
// //     console.log("1초가 지남") 
// //  },1000)
// //  setInterval(function() {
// //     console.log("1초가 지남") 
// //  },1000)

// //  setInterval(function() {
// //     console.log("1초가 지남") 
// //  },1000)

// //  setInterval(function() {
// //     console.log("1초가 지남") 
// //  },1000)


// let time = 10;

// setInterval(function ()  {
//     if(time >= 0) {
//         console.log(time);
//         time = time - 1;

//         console.log("시간종료")
//     }
// }, 1000)



let time = 180;
let min = "";
let sec = "";

setInterval(function() {
    if (time >= 0) {
       const min = String(Math.floor(time / 60)).padStart(2, "0");
       const sec = String(time % 60).padStart(2,"0");
       
 
       console.log(min +  ":"  + sec)
       time = time - 1

       alert("시간 종료!");
    }
 }, 1000)