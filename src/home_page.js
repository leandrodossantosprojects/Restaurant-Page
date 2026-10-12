export const renderHomePage = () => {
  const mainContent = document.querySelector("#content");
  const terminalWindow = document.createElement("div");
  terminalWindow.id = "terminal-console";
  terminalWindow.innerHTML = String.raw`
      <p id="home-console-title">user@devbites:~$ > ./home.sh</p>
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
user@devbites:~$ > Initializing kitchen... We serve structured dishes made with
top-quality ingredients, prepared asynchronously so your experience
never gets blocked.
      </p>
<pre id="hours">user@devbites:~$ > ./schedule.sh

[UPTIME STATUS]
  > Mon-Thu: 12:00-15:30 | 19:00-23:00 (Standard Deploy)
  > Fri-Sat: 12:00-16:00 | 19:00-00:30 (High Traffic)
  > Sun    : 13:00-21:00 (Maintenance & Reboot)

[200 OK] Server online. Ready to accept connections.
</pre>
<pre id="location">
user@devbites:~$ > tail -n 2 /var/log/address.log

[LOG] ADDRESS: 404 Bug Street, Silicon Valley, CA 94016
[LOG] STATUS : Physical server online & ready for walk-ins.
</pre>`;
  terminalWindow.style.color = "#00ff00";
  terminalWindow.style.display = "grid";
  terminalWindow.style.height = "100%";
  terminalWindow.style.backgroundColor = "#000000";
  terminalWindow.style.border = "5px ridge #c0c0c0";
  terminalWindow.style.padding = "10px";
  terminalWindow.style.fontSize = "1rem";
  terminalWindow.style.lineHeight = "1.1";

  mainContent.appendChild(terminalWindow);
};
