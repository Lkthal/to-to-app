function onReady(){
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteAll = document.getElementById('remove');
  let id = 0;


function createNewToDo(){

  if(!newToDoText.value){return;}
  toDos.push({
    title: newToDoText.value,
    complete: false,
    id: id.value
  });

  newToDoText.value= '';

  renderTheUI();
}


function renderTheUI(){
  const toDoList = document.getElementById('toDoList');

  toDoList.textContent = '';



  toDos.forEach(function(toDo){
    const newLi = document.createElement('li');
    const button = document.createElement("button");
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    newLi.textContent = toDo.title;

    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);


    });

  }

   addToDoForm.addEventListener('submit', event => {
       event.preventDefault();
       createNewToDo();
  //     // get the text
       let title = newToDoText.value;
  //
  //     // create a new li
      let text = document.getElementById('toDoList').value;
      let newLi = document.createElement('li');

  //
  //     // create a new input
       let checkbox = document.createElement('input');
  //
  //     // set the input's type to checkbox
  //     checkbox.type = "checkbox";
  //
  //     // set the title
       newLi.textContent = title;
  //
  //     // attach the checkbox to the li
  //     newLi.appendChild(checkbox);
  //
  //     // attach the li to the ul
  //     toDoList.appendChild(newLi);
  //
  //     //empty the input
       newToDoText.value = '';
  //


   });


   deleteAll.addEventListener('click', event => {
    console.log(toDoList.childNodes);
    for(let i=0; i<toDos.length; i++){
      console.log("this ran");
      //trying to access toDoList.childNodes and check to see if the attribute Checked is equal to true or fals
      if(true){
          console.log("if condition is callled");
      };
   }


 });

//adding UI
renderTheUI();
}

window.onload = function () {
  alert("The window has loaded!");
onReady();
};
