document.addEventListener("DOMContentLoaded", () => {
  const employeeForm = document.getElementById("employeeForm");
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const positionInput = document.getElementById("position");
  const gmailInput = document.getElementById("gmail");
  const expericeInput = document.getElementById("experience");
  const employeesList = document.getElementById("employees");

  function getEmployees() {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    return employees;
  }

  function saveEmployees(employees) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }

  function addEmployee(name, age, position, gmail, experience) {
    const employees = getEmployees();
    employees.push({ name, age, position, gmail, experience });
    saveEmployees(employees);
    renderEmployees();
  }

  function renderEmployees() {
    const employees = getEmployees();
    employeesList.innerHTML = "";
    employees.forEach((employee, index) => {
      const li = document.createElement("li");
      li.textContent = `${employee.name} - ${employee.age} - ${employee.position} - ${employee.gmail} - ${employee.experience}`;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.style.backgroundColor = "red";
      deleteButton.onclick = () => {
        deleteEmployee(index);
      };
      li.appendChild(deleteButton);
      employeesList.appendChild(li);
    });
  }

  function deleteEmployee(index) {
    const employees = getEmployees();
    employees.splice(index, 1);
    saveEmployees(employees);
    renderEmployees();
  }

  employeeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const age = ageInput.value;
    const position = positionInput.value;
    const gmail = gmailInput.value;
    const experience = expericeInput.value;

    if (name && age && position && gmail && experience) {
      addEmployee(name, age, position, gmail, experience);
      nameInput.value = "";
      ageInput.value = "";
      positionInput.value = "";
      gmailInput.value = "";
      expericeInput.value = "";
    }
  });

  renderEmployees();
});
