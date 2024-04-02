 let ToDoList = [{item: 'Butter', dueDate : '01/02/2024'}];
 displayResult();

function addToDo(){
  let todoText = document.querySelector('#todo-input');
  let todoDate = document.querySelector('#todo-date');
  let inputElement = todoText.value;
  let inputDate = todoDate.value;
  ToDoList.push({item:inputElement, dueDate : inputDate});
  todoText.value = " ";
  todoDate.value =" ";
  displayResult();
}

function displayResult(){
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  for(let i=0; i < ToDoList.length; i++)
  {
    let item = ToDoList[i].item;
    let dueDate = ToDoList[i].dueDate;
     newHtml +=  `
    
    <span>${item}</span>
    <span>${dueDate}</span>
    <button onclick ='ToDoList.splice(${i},1);  displayResult(); ' class = "btnDelete">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}