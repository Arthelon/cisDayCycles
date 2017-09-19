import { getDayCycle } from "./index.js";

const dayCycle = getDayCycle();
const targetText = document.getElementById("target");

targetText.textContent = dayCycle || "?";
