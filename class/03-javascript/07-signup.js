function checkValidation() {
    const email = document.getElementById("email").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;


    if (email !== "" && password1 !== "" &  password2 !== "") {
        document.getElementById("submit").disabled = false;
        //  매개변수로 스타일 속성
        document.getElementById("submit").setAttribute("style","background-color:yellow");
  
        
    } else {
        document.getElementById("submit").disabled = true;
        //  매개변수로 스타일 속성
        document.getElementById("submit").setAttribute("style","background-color: none");
    }
}