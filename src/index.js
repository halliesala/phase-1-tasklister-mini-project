// What is this frame function?
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const inputForm = document.querySelector('#create-task-form');
  const taskList = document.querySelector('#list');
  

  // Adds tasks to unordered list
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userSubmittedText = e.target.newTaskDescription.value;
    const newTask = document.createElement('li');
    newTask.onclick = () => newTask.remove();
    newTask.textContent = userSubmittedText;
    taskList.appendChild(newTask);
    e.target.newTaskDescription.value = '';
  });
});




