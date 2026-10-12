export const renderMenu = () => {
  const mainContent = document.querySelector("#content");
  const terminalWindow = document.createElement("div");
  const scrollWrapper = document.createElement("div");
  scrollWrapper.innerHTML = String.raw`
<pre>
user@devbites:~$ ./fetch_menu.sh --all

[INFO] Initializing kitchen pipeline...
[INFO] Loading dependencies: ingredients, recipes, flavors...
[SUCCESS] Menu compiled successfully (0 errors, 0 warnings).

================================================================================
                           ___ The Dev Bites ___
                        -- Full-Stack Gastronomy --
================================================================================

1. STARTERS / APPETIZERS — The Front-End
--------------------------------------------------------------------------------
> Light, visually appealing dishes that create the first impression.

  [+] Hero Banner Bruschetta
      Artisanal toasted bread with tomato concassé, fresh basil, and a balsamic
      reduction drizzled with pixel-perfect precision.

  [+] Flexbox Dip Platters
      A selection of hummus and dips served on an interactive board—perfectly
      responsive to the size of your appetite.

  [+] DOM Salad
      Fresh green salad with hierarchically nested ingredients (avocado, 
      walnuts, goat cheese) topped with a Cascading dressing (CSS).

2. MAIN COURSES — The Back-End & Infrastructure
--------------------------------------------------------------------------------
> The core of the kitchen: hearty, complex, and driven by logic.

  [+] Full-Stack Burger
      Double premium beef patty with melted cheddar, crispy bacon, and 
      caramelized onions, stacked on a solid brioche architecture.

  [+] Node.js Express Ribs
      Slow-cooked barbecue pork ribs (async/await) so tender they won't 
      block the main thread (non-blocking).

  [+] PostgreSQL Pizza
      Wood-fired sourdough pizza with a relational mozzarella and tomato base, 
      seamlessly linked to your favorite toppings via foreign keys.

  [+] Python Django Pasta
      House-made fettuccine with traditional bolognese sauce. Comes with 
      everything you need right on the plate (batteries included).

3. DESSERTS — Syntactic Sugar & Sweet Treats
--------------------------------------------------------------------------------
> The sweet finish to the development cycle.

  [+] Coffee Break Espresso Tiramisu
      Layers of espresso-soaked ladyfingers, perfect for a system reboot 
      and avoiding late-night debugging.

  [+] Bug-Free Brownie
      Dark chocolate brownie served with vanilla ice cream. 
      Guaranteed 100% runtime-error free.

  [+] Git Commit Donut
      Classic glazed donut. Every single bite creates a permanent record 
      in your craving history.

4. DRINKS — The Pipelines & Liquors
--------------------------------------------------------------------------------
  [+] Git Push Cocktail
      A refreshing signature drink with gin, tonic, and berries to ship your 
      changes straight to production.

  [+] Infinite Loop Refill
      Artisanal mint and ginger lemonade with unlimited refills 
      (watch out for stack overflows).

  [+] 404 Mocktail
      A mysterious flavored water... the exact taste you are looking for 
      could not be found.

================================================================================
[STATUS 200 OK] Order pipeline ready.
user@devbites:~$
</pre>
`;
  terminalWindow.style.border = "5px ridge #c0c0c0";
  terminalWindow.style.height = "100%";
  terminalWindow.style.display = "flex";
  terminalWindow.style.flexDirection = "column";
  scrollWrapper.style.color = "#00ff00";
  scrollWrapper.style.display = "grid";
  scrollWrapper.style.height = "100%";
  scrollWrapper.style.backgroundColor = "#000000";
  scrollWrapper.style.padding = "10px";
  scrollWrapper.style.fontSize = "1rem";
  scrollWrapper.style.lineHeight = "1.1";
  scrollWrapper.style.overflow = "scroll";
  terminalWindow.appendChild(scrollWrapper);
  mainContent.appendChild(terminalWindow);
};
