const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

inputBox.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  if (inputBox.value === "") {
    alert("Write Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "&#xD7";
    li.appendChild(span);
  }

  inputBox.value = "";
  savedata();
}

listContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      savedata();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      savedata();
    }
  },
  false
);
function savedata() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function ShowTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
ShowTask();
