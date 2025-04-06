const form = document.getElementById("jobForm");
const list = document.getElementById("jobList");

form.onsubmit = e => {
  e.preventDefault();
  const company = form.company.value;
  const role = form.role.value;
  const status = form.status.value;

  const item = document.createElement("li");
  item.innerHTML = `<strong>${role}</strong> at <em>${company}</em><br>Status: ${status}`;
  list.appendChild(item);

  form.reset();
};
