let consoleWindow = document.createElement("div");
consoleWindow.id = "terminal-console";
consoleWindow.innerHTML = String.raw`
      <p id="home-console-title">user$ > echo presentation</p>
      <pre id="welcome">

                      Welcome to...
</pre>
      <pre id="home-banner-ascii">
 ________  __                        _______                      
|        \|  \                      |       \                     
 \$$$$$$$$| $$____    ______        | $$$$$$$\  ______  __     __ 
   | $$   | $$    \  /      \       | $$  | $$ /      \|  \   /  \
   | $$   | $$$$$$$\|  $$$$$$\      | $$  | $$|  $$$$$$\\$$\ /  $$
   | $$   | $$  | $$| $$    $$      | $$  | $$| $$    $$ \$$\  $$ 
   | $$   | $$  | $$| $$$$$$$$      | $$__/ $$| $$$$$$$$  \$$ $$  
   | $$   | $$  | $$ \$$     \      | $$    $$ \$$     \   \$$$   
    \$$    \$$   \$$  \$$$$$$$       \$$$$$$$   \$$$$$$$    \$    
                                                                  
                                                                  
         _______   __    __                          __           
        |       \ |  \  |  \                        |  \          
        | $$$$$$$\ \$$ _| $$_     ______    _______ | $$          
        | $$__/ $$|  \|   $$ \   /      \  /       \| $$          
        | $$    $$| $$ \$$$$$$  |  $$$$$$\|  $$$$$$$| $$          
        | $$$$$$$\| $$  | $$ __ | $$    $$ \$$    \  \$$          
        | $$__/ $$| $$  | $$|  \| $$$$$$$$ _\$$$$$$\ __           
        | $$    $$| $$   \$$  $$ \$$     \|       $$|  \          
         \$$$$$$$  \$$    \$$$$   \$$$$$$$ \$$$$$$$  \$$          
                                                                  

</pre>
      <p id="home-console-description">
user$ > Initializing kitchen... We serve structured dishes made with
top-quality ingredients, prepared asynchronously so your experience
never gets blocked.
      </p>
<p>user$ > echo hours</p>
<pre id="hours">-- Getting days & hours...

   Monday 8 am - 20 pm
   Tuesday 7:30 am - 23 pm
   Wednesday 7:30 am - 23 pm
   Thursday 7:30 am - 23 pm
   Friday 7:30 am - 23 pm
   Saturday 7:30 am - 23 pm
   Sunday 7:30 am - 23 pm
</pre>
<p>user$ > echo location</p>
<pre id="location"> -- Locating restaurant...

  Evergreen Avenue 1234, Springfield, Ohio</pre>
`;

export const homeConsole = consoleWindow;
