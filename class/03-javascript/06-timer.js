
   const pressedBtn = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("auth").innerText = token;

    // let x = document.getElementById("auth");
    // x.style.color="red";

    
    // 문자열 과 더하면  문자열과 합쳐짐
    document.getElementById("auth").style.color = "#" + token;



    let time = 10;
    let min = "";
    let sec = "";
    let timer = null;

 let x = setInterval(function () { 
        min = parseInt(time / 60);
        sec = time % 60;

        document.getElementById("timer").innerHTML = min + ":" + sec;
        time--;

        if (time <= 0) {
            setInterval(x);
            document.getElementById("timer").innerHTML = "시간 초과!";
            document.getElementById("zero").style.opacity = "0.5";
            document.getElementById("zero").style.border = "2px solid none";
            document.getElementById("zero").style.userSelect = "none";
            document.getElementById("zero").style.cursor = "not-allowed";
            document.getElementById("zero").style.pointerEvents = "none";
            clearInterval(x);
        } else {
            document.getElementById("zero").disabled = false;
        }

        clearInterval(time);

    }, 1000);







}


const timer = () => {
 let time = 10;
let min = "";
let sec = "";

let x = setInterval(function () {
    min = parseInt(time / 60);
    sec = time % 60;

    document.getElementById("timer").innerHTML = min + ":" + sec;
    time = time - 1;

    if (time < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "시간초과"
    }
}, 1000);





}




//  풀이

// 상태를 이부에 먼저 저장해놓음
let isStarted = false;



const time = () => {


   if (isStarted === false) {

    isStarted = true;
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("auth").innerText = token;

    // let x = document.getElementById("auth");
    // x.style.color="red";

    
    // 문자열 과 더하면  문자열과 합쳐짐
    document.getElementById("auth").style.color = "#" + token;



    // 1초마다 익명함수가 실행되면서 time에서 1씩빼서 9가되면서
    // time을 1초 감소로 실행을해주기 때문 
    let time = 10;
    let timer = null;

    // if (time >= 0) {
    //     document.getElementById("zero").disabled = true;
        
    // }
    timer =  setInterval(function () {
         if (time >= 0) {
             document.getElementById("countdown").innerText = time;
             time = time - 1;
             document.getElementById("zero").disabled = true;
             
             document.getElementById("zero").style.cursor = "";

             

         } else {
             document.getElementById("zero").disabled = false;
             document.getElementById("off").disabled = true;

             document.getElementById("zero").style.cursor = "not-allowed";

             isStarted = false;

             clearInterval(timer);

             return timer;
         }

    }, 1000);

  } else {
      alert("토큰 재발급이 불가능합니다. 다시 이용하세요");
  }


}
