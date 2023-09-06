// Get the task input element
const taskInput = document.getElementById('task-input');

// Get the category select element
const categorySelect = document.getElementById('category-select');

// Get the add task button
const addTaskButton = document.getElementById('add-task');

// Add event listener to the add task button
addTaskButton.addEventListener('click', function() {
  // Get the task name from the input
  const taskName = taskInput.value;

  // Get the selected category
  const selectedCategory = categorySelect.value;

  // Create a new task element
  const taskElement = document.createElement('li');
  taskElement.textContent = taskName;

  // Append the task element to the task list
  const taskList = document.getElementById('task-list');
  taskList.appendChild(taskElement);
  // Save the data to a database
  saveToDatabase(taskName, selectedCategory);

  // Clear the task input
  taskInput.value = '';
});

