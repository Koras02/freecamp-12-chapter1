
   const pressedBtn = () => {
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("auth").innerText = token;

        // let x = document.getElementById("auth");
        // x.style.color="red";

        
        // 문자열 과 더하면  문자열과 합쳐짐
        document.getElementById("auth").style.color = "#" + token;

  

        let time = 100;
        let min = "";
        let sec = "";

        let x = setInterval(function () { 
            min = parseInt(time / 60);
            sec = time % 60;

            document.getElementById("timer").innerHTML = min + ":" + sec;
            time--;

            if (time < 0) {
                setInterval(x);
                document.getElementById("timer").innerHTML = "시간 초과!";
                clearInterval(x);
            }
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
        time--;

        if (time < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "시간초과"
        }
    }, 1000);
}



