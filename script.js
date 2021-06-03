let x = 0
      var punch = new Audio('PUNCH.mp3');
      var toasty = new Audio('TOASTY.mp3');
      var tiab = new Audio('tiab.mp3');
      var musik = new Audio('samovar-party.mp3');

      function count(){
        x = x+1;
        musik.play();
        document.getElementById("Score").innerText = "x" + x;
        let y = 4/x
        document.getElementById("bild").style.animationDuration = `${y}s`;
        if(x >= 100){
          document.getElementById("animatedBackground").style.backgroundImage = "url('images/giphy.gif')"; 
        document.getElementById("animatedBackground").style.backgroundSize = "10%";
        }
        if(x >= 250){
          document.getElementById("animatedBackground").style.backgroundImage = "url('images/2.gif')"; 
        document.getElementById("animatedBackground").style.backgroundSize = "10%";
        }
        if(x >= 500){
          document.getElementById("animatedBackground").style.backgroundImage = "url('images/3.gif')"; 
        document.getElementById("animatedBackground").style.backgroundSize = "10%";
        }
        if(x >= 1000){
          document.getElementById("animatedBackground").style.backgroundImage = "url('images/4.gif')"; 
        document.getElementById("animatedBackground").style.backgroundSize = "10%";
        }
        if(x >= 2000){
          document.getElementById("animatedBackground").style.backgroundImage = "url('images/5.gif')"; 
        document.getElementById("animatedBackground").style.backgroundSize = "10%";
        }
        if(x >= 3000){
          document.getElementById("animatedBackground").style.backgroundImage = "url('images/10.gif')"; 
        document.getElementById("animatedBackground").style.backgroundSize = "10%";
        }
        if(x >= 10000){
          document.getElementById("animatedBackground").style.backgroundImage = "url('images/1000.gif')"; 
        document.getElementById("animatedBackground").style.backgroundSize = "10%";
        }
      };
      function hit(){
        punch.play();;
          
        };
