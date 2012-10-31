        
        
        /*
            Remove the landing div and resize our terminal
        */
        function removeDiv()
        {
            setTimeout("document.getElementById('parentDiv').removeChild(document.getElementById('choosePath'))", 1500);
            setTimeout("document.getElementById('terminalEmu').style.height = 800",1700);
        }
        /*
            Add to the terminal div
        */
        function addInput( x )
        {
            document.getElementById('terminalEmu').innerHTML = document.getElementById('terminalEmu').innerHTML + x;
        }
        /*
            Loading animation
        */
        function loadPage()
        {
            addInput("</br>");
            addInput("Loading  ..");
            for (var i=0; i<5; i++) setTimeout("addInput('.')",i*500);
            setTimeout("fade('terminalEmu')",i*500);
            setTimeout("fade('choosePath')",i*500);
        }
        
        /* 
            Stole this guy below - Credits to the first Google result: http://www.switchonthecode.com/tutorials/javascript-tutorial-simple-fade-animation 
        */
        var TimeToFade = 1000.0;

        function fade(eid)
        {
          var element = document.getElementById(eid);
          if(element == null)
            return;
           
          if(element.FadeState == null)
          {
            if(element.style.opacity == null 
                || element.style.opacity == '' 
                || element.style.opacity == '1')
            {
              element.FadeState = 2;
            }
            else
            {
              element.FadeState = -2;
            }
          }
            
          if(element.FadeState == 1 || element.FadeState == -1)
          {
            element.FadeState = element.FadeState == 1 ? -1 : 1;
            element.FadeTimeLeft = TimeToFade - element.FadeTimeLeft;
          }
          else
          {
            element.FadeState = element.FadeState == 2 ? -1 : 1;
            element.FadeTimeLeft = TimeToFade;
            setTimeout("animateFade(" + new Date().getTime() + ",'" + eid + "')", 33);
          }  
        }
        function animateFade(lastTick, eid)
        {  
          var curTick = new Date().getTime();
          var elapsedTicks = curTick - lastTick;
          
          var element = document.getElementById(eid);
         
          if(element.FadeTimeLeft <= elapsedTicks)
          {
            element.style.opacity = element.FadeState == 1 ? '1' : '0';
            element.style.filter = 'alpha(opacity = ' 
                + (element.FadeState == 1 ? '100' : '0') + ')';
            element.FadeState = element.FadeState == 1 ? 2 : -2;
            return;
          }
         
          element.FadeTimeLeft -= elapsedTicks;
          var newOpVal = element.FadeTimeLeft/TimeToFade;
          if(element.FadeState == 1)
            newOpVal = 1 - newOpVal;

          element.style.opacity = newOpVal;
          element.style.filter = 'alpha(opacity = ' + (newOpVal*100) + ')';
          
          setTimeout("animateFade(" + curTick + ",'" + eid + "')", 33);
        }