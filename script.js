let x = 0
      var punch = new Audio('PUNCH.mp3');
      var toasty = new Audio('TOASTY.mp3');
      var tiab = new Audio('tiab.mp3');
      var musik = new Audio('samovar-party.mp3');

      function count(){
        x = x+1;
        musik.play();
        document.getElementById("Score").innerText = "x" + x;
        if(x >= 100){
          document.getElementById("animatedBackground").style.backgroundImage = "url('images/giphy.gif')"; 
        document.getElementById("animatedBackground").style.backgroundSize = "10%";
        }
      };
      function hit(){
        punch.play();;
          
        };
