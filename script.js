window.onload= function(){

  const storedGroups= JSON.parse(localStorage.getItem("groups"))||[];
  storedGroups.forEach((group)=>{
      createGroup(group.name, group.tasks);


  })
}

function addGroup(){
  const sectionName= prompt("Enter the section name:");
  if(sectionName){
      const newGroup={
          name: sectionName,
          tasks:[]
       };

       createGroup(newGroup.name, newGroup.tasks);

       const storedGroups= JSON.parse(localStorage.getItem("groups"))||[];
       storedGroups.push(newGroup);
       localStorage.setItem("groups", JSON.stringify(storedGroups));



  }

}

function createGroup(name, tasks){

  const col= document.createElement("div");
  col.className="column";
  col.innerHTML= `<h3>${name}</h3>
  <button class="task-btn" onclick="addTask(this)">ADD TASK</button>
  `;
 tasks.forEach((task)=>{
  const taskDiv= document.createElement("div");
  taskDiv.className="task";
  taskDiv.innerText=task;
  col.appendChild(taskDiv);
 })

document.getElementById("columns").appendChild(col);
}


function addTask(button){

  const taskText= prompt("Enter Task:");
  if(taskText){
      const column= button.parentElement;
      const sectionName= column.querySelector("h3").innerText;

      const taskDiv= document.createElement("div");
      taskDiv.className= "task";
      taskDiv.innerText= taskText;

      column.appendChild(taskDiv);

      const storedGroups= JSON.parse(localStorage.getItem("groups"))||[];
     const groupIndex= storedGroups.findIndex((group)=>
          group.name===sectionName
      );
      if(groupIndex!==-1){
          storedGroups[groupIndex].tasks.push(taskText);
          localStorage.setItem("groups", JSON.stringify(storedGroups));
      }
  }
}