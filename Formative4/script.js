let users = [];

function saveUser() {
  const id = document.getElementById('idNum').value;
  const first = document.getElementById('firstName').value;
  const middle = document.getElementById('middleName').value;
  const last = document.getElementById('lastName').value;
  const gender = document.getElementById('gender').value;
  const birthday = document.getElementById('birthday').value;

  if (!id || !first || !last || !gender || !birthday) {
    alert("Please fill up all required fields.");
    return;
  }

  const user = { idNumber: id, firstName: first, middleName: middle, lastName: last, gender: gender, birthday: birthday };
  users.push(user);
  updateTable();
  document.getElementById('signupForm').reset();
}

function updateTable() {
  const tbody = document.querySelector('#dataTable tbody');
  tbody.innerHTML = '';
  users.forEach(user => {
    const row = document.createElement('tr');
    for (let key in user) {
      const cell = document.createElement('td');
      cell.textContent = user[key];
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  });
}

function changeColor() {
  const colors = ['#f4f4f4', '#e3f2fd', '#fff8e1', '#e8f5e9', '#fce4ec'];
  const random = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[random];
}

document.getElementById('saveBtn').addEventListener('click', saveUser);
document.getElementById('colorBtn').addEventListener('click', changeColor);
