
   const pressedBtn = () => {
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("auth").innerText = token;

        // let x = document.getElementById("auth");
        // x.style.color="red";


        // 문자열 과 더하면  문자열과 합쳐짐
        document.getElementById("auth").style.color = "#" + token;

    }

    
    let name = "김정호"

    const hello = (name) => { 
        alert(name() + "안녕하세요");
    }
