// i was watching the example from https://www.educative.io/answers/how-to-create-a-simple-to-do-list-with-html-css-and-js but tried to build everything myself!

document.addEventListener("DOMContentLoaded", function () {
  // elements
  const pushButton = document.querySelector("#push");
  const addTaskInput = document.querySelector("#addtask input");
  const tasksList = document.querySelector("#tasks");

  // event listener to the push button
  pushButton.addEventListener("click", function () {
    // Get the value of the new task input
    const taskName = addTaskInput.value.trim();

    // alert message ofr empty task
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
      tasksList.removeChild(this.parentNode);
    });

    // delete button
    const deleteButton = tasksList.lastElementChild.querySelector(".delete");
    deleteButton.addEventListener("click", function () {
      tasksList.removeChild(this.parentNode);
    });

    // Clear the new task input
    addTaskInput.value = "";
  });
});
