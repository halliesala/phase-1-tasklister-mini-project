// What is this frame function?
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const inputForm = document.querySelector('#create-task-form');
  const taskList = document.querySelector('#list');
  
  // I'm going to try to replace the ul with a form so I can have check boxes
  const listForm = document.createElement('form');
  listForm.input

  // Adds tasks to unordered list
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userSubmittedText = e.target.newTaskDescription.value;
    const newTask = document.createElement('p');

    // I'd like to move the 'delete' functionality to a button 
    // And append the button to the list item

    const newDeleteButton = document.createElement('button');
    newDeleteButton.innerText = "I'm a button!";
    newTask.appendChild(newDeleteButton);

    newTask.onclick = () => newTask.remove();
    newTask.textContent = userSubmittedText;
    taskList.appendChild(newTask);
    e.target.newTaskDescription.value = '';
  });
});




