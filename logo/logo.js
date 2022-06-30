
var data = [
    "c",
    "cpp",
    "csharp",
    "css",
    "go",
    "haskell",
    "java",
    "javascript",
    "kotlin",
    "lua",
    "php",
    "python",
    "typescript"
  ];

  var lInfo = {
    "c" : "https://www.cprogramming.com/",
    "cpp" : "https://www.cprogramming.com/",
    "csharp" : "https://www.w3schools.com/cs/index.php/",
    "css" : "https://www.w3schools.com/css/",
    "go" : "https://go.dev/",
    "haskell" : "https://www.haskell.org/",
    "java": "https://www.java.com/",
    "javascript": "https://www.javascript.com/",
    "kotlin": "https://kotlinlang.org/",
    "lua": "https://www.lua.org/",
    "php": "https://www.php.net/",
    "python": "https://www.python.org/",
    "typescript": "https://www.typescriptlang.org/",
  };

let grid = document.getElementById("logo-grid");
for (let i of data) 
{ 
    var card = document.createElement("div");
    card.classList.add("card"); 
    card.innerHTML= "<img src='src/"+i+"/"+i+"_128x128.png' />";
    card.onclick = function(){info(i)};
    grid.appendChild(card); 
}


var modal = document.getElementById("info");

function info(i){
  let site = "<a href ='"+lInfo[i]+"' target = '_blank'>"+i+"</a>";
  modal.style.display = "block";
  let content = document.getElementById("minfo");
  content.innerHTML = " <table class = 'table' ><tr><td>Name:</td><td><ul><li>"
  +i+
  "</li></ul></td></tr><tr><td>Website:</td><td>"
  +site+
  "</td></tr></table>"
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
