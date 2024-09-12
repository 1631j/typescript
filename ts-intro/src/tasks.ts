const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form__input");

const taskListElement = document.querySelector<HTMLUListElement>(".list");

type Task = {
  desciption: string;
  isCompleted: boolean;
};

const tasks: Task[] = loadTask();

tasks.forEach(renderTask);

function loadTask(): Task[] {
  const storedTask = localStorage.getItem("tasks");
  return storedTask ? JSON.parse(storedTask) : [];
}

taskForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskDescription = formInput?.value;
  if (taskDescription) {
    const task: Task = {
      desciption: taskDescription,
      isCompleted: false,
    };

    // add task to the list
    addTask(task);
    // render tasks
    renderTask(task);
    //update local storage
    updateStorage();

    formInput.value = "";
    return;
  }
  alert("Please enter a task description");
});

function addTask(task: Task) {
  tasks.push(task);
}

function renderTask(task: Task): void {
  const taskElement = document.createElement("li");
  taskElement.textContent = task.desciption;

  // checkbox
  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.checked = task.isCompleted;

  // toggle checkbox
  taskCheckbox.addEventListener("change", () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });

  taskElement.appendChild(taskCheckbox);
  taskListElement?.appendChild(taskElement);
}

function updateStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
