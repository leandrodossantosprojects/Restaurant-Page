export const renderAbout = () => {
  const mainContent = document.querySelector("#content");
  const terminalWindow = document.createElement("div");
  terminalWindow.id = "console-about";
  terminalWindow.innerHTML = String.raw`
<pre>
user@devbites:~$ ./about_us.sh --verbose

[INFO] Initializing system diagnostic...
[INFO] Reading system profile and network interfaces...
[SUCCESS] Information fetched (0 warnings).

================================================================================
                           ___ About The Dev Bites ___
                      -- System Architecture & Mission --
================================================================================

1. SYSTEM OVERVIEW
--------------------------------------------------------------------------------
> Founded in 2024, The Dev Bites was built on a simple premise: high-performance 
  culinary engineering. We combine clean code principles with premium gastronomy 
  to deliver a zero-latency dining experience. 

  Our kitchen operates on an asynchronous architecture—ensuring every dish is 
  cooked to perfection without blocking the main event queue. From local memory 
  caching (fresh daily ingredients) to pixel-perfect plating, every meal is 
  thoroughly tested before deployment to your table.

2. SYSTEM MAINTAINERS
--------------------------------------------------------------------------------
  [+] Lead Tech Chef   : Alex "Kernel" Mercer
  [+] DevOps Barista   : Sarah "Async" Lin
  [+] QA Food Tester   : David "NullPointer" Vance

3. NETWORK ENDPOINTS & CONTACT
--------------------------------------------------------------------------------
> For pull requests, table reservations, or priority support:

  [EMAIL]     : support@devbites.io
  [PHONE #1]  : +1 (555) 019-2834  (Hotline / Immediate Call)
  [PHONE #2]  : +1 (555) 014-9021  (Reservations / Async Queue)
  [PHYSICAL]  : 404 Bug Street, Silicon Valley, CA 94016

================================================================================
[STATUS 200 OK] All communication channels open and listening on port 8080.
user@devbites:~$
</pre>
`;
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
