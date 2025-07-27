let btn = document.querySelector("button");
let calendar = document.querySelector("input");
let result = document.getElementById("result");

calendar.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  if (!calendar.value) {
    result.innerHTML =
      '<p class="error">Please select your birth date first</p>';
    return;
  }

  let birthDate = new Date(calendar.value);
  let today = new Date();

  if (birthDate > today) {
    result.innerHTML =
      '<p class="error">Birth date cannot be in the future</p>';
    return;
  }

  let y1 = birthDate.getFullYear();
  let m1 = birthDate.getMonth() + 1;
  let d1 = birthDate.getDate();

  let y2 = today.getFullYear();
  let m2 = today.getMonth() + 1;
  let d2 = today.getDate();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }

  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  result.innerHTML = `
        <p>
            You are <span class="year">${y3}</span> years, 
            <span class="month">${m3}</span> months and 
            <span class="day">${d3}</span> days old
        </p>
    `;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

btn.addEventListener("click", calculateAge);

calendar.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    calculateAge();
  }
});
