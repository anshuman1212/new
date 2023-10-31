const inputb = document.getElementById("ino");
const listContainer = document.getElementById("list-co");
function AddWork(){
    if(inputb.value===''){
        alert("You have to write")    
}
else{
    let li = document.createElement("li");
    li.innerHTML = inputb.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
inputb.value = "";
saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function display(){
    listContainer.innerHTML = localStorage.getItem("data");
}
display();