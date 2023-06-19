// toggle navbar
const html = document.querySelector("html");
const toggleInput = document.getElementById('toggle');
const toggleCircle = document.getElementById('toggle-circle');
const textInsideCircle = document.getElementById('text-inside-circle');
const darkSm = document.getElementById('dark-sm');

toggleInput.checked = true;

if (toggleInput === true) {
  toggleInput.addEventListener('change', function () {
    toggleCircle.classList.toggle('left-6');
  })
}

  

const toggleDarkMode = () => {
  html.classList.toggle('dark');
};

toggleInput.addEventListener('click', toggleDarkMode);


const toggleDarkModeSm = () => {
    html.classList.toggle('dark');
};

darkSm.addEventListener('click', toggleDarkModeSm);