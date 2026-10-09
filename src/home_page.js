let consoleWindow = document.createElement("div");
consoleWindow.id = "terminal-console";
consoleWindow.innerHTML = String.raw`
    <div id="home-console-title-bar">
      <h1 id="terminal-title">terminal</h1>
    </div>
    <div id="home-console-body">
      <p id="home-console-title">> console.log("Welcome to The Dev Bites!");</p>
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
        > Initializing kitchen... We serve structured dishes made with
        top-quality ingredients, prepared asynchronously so your experience
        never gets blocked.
      </p>
    </div>
`;

export const homeConsole = consoleWindow;
