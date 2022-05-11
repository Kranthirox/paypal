


var listElem = document.getElementById("list");
var listBody = document.getElementById("note-list");
var todoText = document.getElementById("todo").value;

function addTodo() {
  
  var todoText = document.getElementById("todo").value;
  console.log(todoText)
  var spanElem = document.createElement("span");
  spanElem.innerHTML += todoText;

 

  var removebtn = document.createElement("button");
  removebtn.innerHTML=`<img src="./png/x-circle-fill.svg" alt="">`;
  removebtn.onclick = remfun;

  var note = document.createElement("li");
 
  note.appendChild(spanElem);
  note.appendChild(removebtn);

  if (todoText === '') {
    alert("You must write something!");
  } else {
    listElem.appendChild(note);
  }
  
  listBody.appendChild(listElem);
  document.getElementById('todo').value ="";
}



function remfun(){
   listElem.removeChild(this.parentNode)
}

