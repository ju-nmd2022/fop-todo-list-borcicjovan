// i was watching the example from https://www.educative.io/answers/how-to-create-a-simple-to-do-list-with-html-css-and-js but tried to build everything myself!

document.addEventListener("DOMContentLoaded", function () {
  // elements
  const pushButton = document.querySelector("#push");
  const addTaskInput = document.querySelector("#addtask input");
  const tasksList = document.querySelector("#tasks");

  // function to save tasks to local storage, the thing i forgot in the first place...
  function saveTasks() {
    const tasks = tasksList.innerHTML;
    localStorage.setItem("tasks", tasks);
  }

  // function to load tasks from local storage
  function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      tasksList.innerHTML = savedTasks;
      // add event listeners to the buttons of loaded tasks
      const doneButtons = document.querySelectorAll(".done");
      doneButtons.forEach((button) => {
        button.addEventListener("click", function () {
          button.parentNode.remove();
          saveTasks();
        });
      });
      const deleteButtons = document.querySelectorAll(".delete");
      deleteButtons.forEach((button) => {
        button.addEventListener("click", function () {
          button.parentNode.remove();
          saveTasks();
        });
      });
    }
  }

  // load saved tasks from local storage when you refresh the page
  loadTasks();

  // event listener to the push button
  pushButton.addEventListener("click", function () {
    // Get the value of the new task input
    const taskName = addTaskInput.value.trim();

    // alert message for empty task
    if (taskName === "") {
      alert("No task name! Please enter one. 🥰");
      return;
    }

    // Create a new task element and add it to the tasks list
    const taskElement = `
    <div class="task">
      <span class="taskname">${taskName}</span>
      <button class="done">Done</button>
      <button class="delete">Delete</button>
    </div>
    `;
    tasksList.insertAdjacentHTML("beforeend", taskElement);

    // done button
    const doneButton = tasksList.lastElementChild.querySelector(".done");
    doneButton.addEventListener("click", function () {
      doneButton.parentNode.remove();
      saveTasks();
    });

    // delete button
    const deleteButton = tasksList.lastElementChild.querySelector(".delete");
    deleteButton.addEventListener("click", function () {
      deleteButton.parentNode.remove();
      saveTasks();
    });

    // Clear the new task input
    addTaskInput.value = "";
    saveTasks();
  });
});
