import "./style.css";
import { renderHomePage } from "./home_page.js";
import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";

let mainContent = document.querySelector("#content");
renderHomePage();

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

homeBtn.addEventListener("click", () => {
  mainContent.innerHTML = "";
  renderHomePage();
});
menuBtn.addEventListener("click", () => {
  mainContent.innerHTML = "";
  renderMenu();
});
aboutBtn.addEventListener("click", () => {
  mainContent.innerHTML = "";
  renderAbout();
});
