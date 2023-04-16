const tasks = document.getElementById("tasks");
const input = document.getElementById("todo");
const btn = document.getElementById("btn");

const teacher_details = [
  {
    name: "Manoj Tiwari",
    subject: ["physics", "english", "maths"],
  },
  {
    name: "Gaurav Agrawal",
    subject: ["hindi", "geography", "chemistry"],
  },
  {
    name: "Vijay Bhargav",
    subject: ["politics", "english", "physics"],
  },
  {
    name: "Jayesh Sinha",
    subject: ["maths", "biology", "economics"],
  },
  {
    name: "Neerav Shah",
    subject: ["geography", "hindi", "chemistry"],
  },
];

input.addEventListener("keydown", function (e) {
  if (e.code == "Enter" && input.value.trim()) {
    const inputValue = input.value.trim();
    if (inputValue != "") {
      for (let i = 0; i < teacher_details.length; i++) {
        if (teacher_details[i].subject.includes(inputValue)) {
          addTask(teacher_details[i].name);
        }
      }
      tasks.style.display = "inline-block";
      input.value = "";
    } else {
      alert("Empty Value.");
    }
  }
});

btn.addEventListener("click", () => {
  const inputValue = input.value.trim();
  if (inputValue != "") {
    for (let i = 0; i < teacher_details.length; i++) {
      if (teacher_details[i].subject.includes(inputValue)) {
        addTask(teacher_details[i].name);
      }
    }
    tasks.style.display = "inline-block";
    input.value = "";
  } else {
    alert("Empty Value.");
  }
});

const addTask = (input_value) => {
  const list = document.createElement("li");
  const icon = document.createElement("i");
  const para = document.createElement("p");
  tasks.style.removeProperty("display");
  icon.setAttribute("id", "delete");
  icon.setAttribute("onclick", "deleteBtn(this)");
  icon.classList.add("fa-solid");
  icon.classList.add("fa-arrow-right");
  para.innerText = input_value;
  tasks.appendChild(list);
  list.appendChild(para);
  list.appendChild(icon);
};

// const deleteBtn = (e) => {
//   e.parentElement.remove();
//   if (tasks.textContent.trim() == "") {
//     tasks.style.display = "none";
//   }
// };
