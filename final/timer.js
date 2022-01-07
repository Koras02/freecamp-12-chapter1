
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
    let time = 300;
    let timer = null;
    let min = "3";
    let sec = "50";


    timer =  setInterval(function () {
         if (time >= 0) {

            
             document.getElementById("countdown").innerHTML = min + ":" + sec ;
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


function changeFocus1() {
   
    const phone1 = document.getElementById("phone1").value;

    if(phone1.length === 3) {
       document.getElementById("phone2").focus();
    }
  
    
}

function changeFocus2() {
    
    const phone2 = document.getElementById("phone2").value;

    if(phone2.length === 4) {
        document.getElementById("phone3").focus();
     }
}



function changeFocus3() {
    const phone3 = document.getElementsById("phone3").value;

    if (phone3.length === 4) {
        document.getElementsById("phone1").focus();
    }
}
