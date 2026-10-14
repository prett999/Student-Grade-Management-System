// Student data is intentionally stored in arrays to demonstrate the assignment concept.
const initialNames = ["Ama Mensah", "Kojo Boateng", "Abena Owusu", "Yaw Asante"];
const initialScores = [88, 79, 96, 72];

let studentNames = [...initialNames];
let studentScores = [...initialScores];

const form = document.getElementById("studentForm");
const nameInput = document.getElementById("studentName");
const scoreInput = document.getElementById("studentScore");
const message = document.getElementById("formMessage");
const tableBody = document.getElementById("studentTableBody");
const emptyState = document.getElementById("emptyState");

function getPerformance(score) {
  if (score >= 80) return { label: "Excellent", className: "" };
  if (score >= 60) return { label: "Good", className: "average" };
  return { label: "Needs work", className: "low" };
}

function renderStudents() {
  tableBody.innerHTML = "";

  for (let i = 0; i < studentNames.length; i++) {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const scoreCell = document.createElement("td");
    const performanceCell = document.createElement("td");
    const actionCell = document.createElement("td");
    const performance = getPerformance(studentScores[i]);

    nameCell.textContent = studentNames[i];
    scoreCell.textContent = `${studentScores[i]}/100`;

    const pill = document.createElement("span");
    pill.className = `score-pill ${performance.className}`;
    pill.textContent = performance.label;
    performanceCell.appendChild(pill);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Remove";
    deleteButton.setAttribute("aria-label", `Remove ${studentNames[i]}`);
    deleteButton.addEventListener("click", () => removeStudent(i));
    actionCell.appendChild(deleteButton);

    row.append(nameCell, scoreCell, performanceCell, actionCell);
    tableBody.appendChild(row);
  }

  emptyState.hidden = studentNames.length !== 0;
  updateStats();
}

function updateStats() {
  const count = studentScores.length;
  document.getElementById("studentCount").textContent = count;

  if (count === 0) {
    document.getElementById("averageScore").textContent = "—";
    document.getElementById("highestScore").textContent = "—";
    document.getElementById("lowestScore").textContent = "—";
    document.getElementById("highestName").textContent = "No records";
    document.getElementById("lowestName").textContent = "No records";
    return;
  }

  let total = 0;
  let highestIndex = 0;
  let lowestIndex = 0;

  for (let i = 0; i < studentScores.length; i++) {
    total += studentScores[i];
    if (studentScores[i] > studentScores[highestIndex]) highestIndex = i;
    if (studentScores[i] < studentScores[lowestIndex]) lowestIndex = i;
  }

  document.getElementById("averageScore").textContent = `${(total / count).toFixed(1)}%`;
  document.getElementById("highestScore").textContent = studentScores[highestIndex];
  document.getElementById("lowestScore").textContent = studentScores[lowestIndex];
  document.getElementById("highestName").textContent = studentNames[highestIndex];
  document.getElementById("lowestName").textContent = studentNames[lowestIndex];
}

function removeStudent(index) {
  studentNames.splice(index, 1);
  studentScores.splice(index, 1);
  renderStudents();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  const score = Number(scoreInput.value);

  if (!name) {
    message.textContent = "Please enter a student name.";
    nameInput.focus();
    return;
  }
  if (scoreInput.value === "" || !Number.isFinite(score) || score < 0 || score > 100 || !Number.isInteger(score)) {
    message.textContent = "Enter a whole-number score from 0 to 100.";
    scoreInput.focus();
    return;
  }

  studentNames.push(name);
  studentScores.push(score);
  form.reset();
  message.textContent = `${name} was added successfully.`;
  renderStudents();
});

document.getElementById("resetButton").addEventListener("click", () => {
  studentNames = [...initialNames];
  studentScores = [...initialScores];
  form.reset();
  message.textContent = "Demo records restored.";
  renderStudents();
});

renderStudents();
