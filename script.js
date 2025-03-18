const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const body = document.body;

function changeTheme() {
    body.classList.toggle("dark");
  if (body.classList.contains("dark"))
  {
    sun.style.display = "none";
    moon.style.display = "inline";
  } else {
    sun.style.display = "inline";
    moon.style.display = "none";
}
}

sun.addEventListener("click", changeTheme);
moon.addEventListener("click", changeTheme);