
const inputForm = document.querySelector('#create-task-form');
const taskList = document.querySelector('#tasks');

// Adds tasks to list
inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userSubmittedText = e.target.newTaskDescription.value;

  // Each task is created as a form inside a list item
  const newLi = document.createElement('li');

  const newForm = document.createElement('form');

  const newFormLabel = document.createElement('label');
  newFormLabel.textContent = userSubmittedText + ' ';

  const newFormInput = document.createElement('input');
  newFormInput.setAttribute('type', 'checkbox');

  const newFormSubmit = document.createElement('submit');
  newFormSubmit.textContent = ' ❌ ';
  deleteOnClick(newLi, newFormSubmit);

  newForm.appendChild(newFormLabel);
  newForm.appendChild(newFormInput);
  newForm.appendChild(newFormSubmit);

  newLi.appendChild(newForm);
  taskList.appendChild(newLi);

  // Clear the form
  e.target.newTaskDescription.value = '';
});



// Delete target when trigger clicked
function deleteOnClick(target, trigger) {
  trigger.addEventListener('click', () => target.remove());
}




