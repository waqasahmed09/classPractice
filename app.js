

// let nodeToAdd = document.createElement("div");

// let para = document.createElement("p");

// let textNode = document.createTextNode("Hello World");
// nodeToAdd.appendChild(para);
// para.appendChild(textNode);

// console.log(nodeToAdd);

let ul = document.createElement("ul");

let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

let textNode1 = document.createTextNode("Home");
let textNode2 = document.createTextNode("about");
let textNode3 = document.createTextNode("contact");

li1.setAttribute("class", "lumberOneli");
li1.setAttribute("onClick", "lumberOneli()");


ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

li1.appendChild(textNode1);
li2.appendChild(textNode2);
li3.appendChild(textNode3);


console.log(ul);

