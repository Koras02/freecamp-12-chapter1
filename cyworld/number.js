function numberRandom() {
   let ball = document.getElementsByClassName("ball");

   for (let i = 0; i < ball.length; i++) {
       ball[i].innerHTML = '';
   }

   let rottoNum = [];

   for(let i = 0; i < 5; i++) {
       rottoNum[i] = Math.floor(Math.random() * 99) + 5;
   }

   for (let i=0; i < 5; i++) {
       let ball = document.getElementById("num" + (i+1));

       setTimeout(function() {
           ball.innerHTML = `${rottoNum}`
       },1000);
   }    

}


