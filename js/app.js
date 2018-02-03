function onReady(){
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteButton = document.getElementById('remove');
  let id = 0;


function createNewToDo(){

  if(!newToDoText.value){return;}
  toDos.push({
    title: newToDoText.value,
    complete: false,
    id: id.value++
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

      deleteButton.addEventListener ("click", event => {
          deleteToDo(toDos.id);
          renderTheUI();
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
         checkbox.type = "checkbox";
    //
    //     // set the title
         newLi.textContent = title;
    //
    //     // attach the checkbox to the li
         newLi.appendChild(checkbox);
    //
    //     // attach the li to the ul
    //     toDoList.appendChild(newLi);
    //
    //     //empty the input
         newToDoText.value = '';
    //


     });


function deleteToDo(id){
  toDos = toDos.filter( item => item.id !== id);

}


//adding UI
renderTheUI();
}

window.onload = function () {
  alert("The window has loaded!");
onReady();
};
