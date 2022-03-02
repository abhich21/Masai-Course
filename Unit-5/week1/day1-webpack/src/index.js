import "./index.css";
import logo from "./logo.jpg";

const img= new Image;
img.src= logo;
img.setAttribute("id","logo");

const div=document.createElement("div");
div.setAttribute("id","cont");

const inp= document.createElement("input");
inp.placeholder="Type the task here...";
inp.style.border="1px solid grey";

const task_div=document.createElement("div");
task_div.setAttribute("id","task_div");
const btn=document.createElement("button");
btn.innerText="Submit";
btn.setAttribute("id","btn");
btn.addEventListener("click", ()=>{
    task_div.innerHTML=inp.value;
    inp.value="";
});

div.append(inp,btn,task_div);

document.getElementById("route").append(img,div);