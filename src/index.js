
const inputForm = document.querySelector('#create-task-form');
const taskList = document.querySelector('#tasks');

// Adds tasks to list
inputForm.addEventListener('submit', (e) => {
  // Prevent page from redirecting upon form submit
  e.preventDefault();

  // Get user-submitted text -- a task to add to our list
  const userSubmittedText = e.target.newTaskDescription.value;

  // Each task is created as a paragraph inside a span inside a list item
  const newLi = document.createElement('li');
  const newP = document.createElement('p');

  const newSpan = document.createElement('span');
  newSpan.textContent = userSubmittedText;
  
  // Button to complete tasks
  const completeButton = document.createElement('button');
  completeButton.textContent = ' ✅ ';

  const newStrikethrough = document.createElement('s');
  let hasStrikethrough = false;

  completeButton.addEventListener('click', () => {
    if (!hasStrikethrough) {
      newStrikethrough.textContent = newSpan.textContent;
      newSpan.textContent = '';
      newSpan.append(newStrikethrough);  
      hasStrikethrough = true;
    } else {
      newSpan.textContent = newStrikethrough.textContent;
      newStrikethrough.remove();
      hasStrikethrough = false;
    }
  })
  
  // Button to remove tasks
  const deleteButton = document.createElement('button');
  deleteButton.textContent = ' ❌ ';
  deleteButton.addEventListener('click', () => {
    const response = confirm("Remove task from list?");
    if (response) {
      newLi.remove()
    }
  });

  // Make items editable
  newSpan.addEventListener('click', () => {
    const editForm = document.createElement('form');
    const inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.value =  newSpan.textContent;
    newSpan.style.visibility = 'hidden';
    editForm.appendChild(inputBox);
    newP.prepend(editForm);
    // Update list content and remove form once submitted
    editForm.onsubmit = (e) => {
      e.preventDefault();
      newSpan.textContent = inputBox.value;
      newSpan.style.visibility = 'visible';
      editForm.remove();
    };
  })
  

  // Build new list item
  newP.appendChild(newSpan);
  newP.appendChild(completeButton);
  newP.appendChild(deleteButton);
  newLi.appendChild(newP);
  
  // High priority items are highlighted yellow and prepended
  const priority = e.target['priority-dropdown'].value;
  if (priority === 'high') {
    newSpan.style.backgroundColor = 'yellow';
    taskList.prepend(newLi);
  } else {
    taskList.appendChild(newLi);
  }

  // Clear form
  inputForm.reset();
});




