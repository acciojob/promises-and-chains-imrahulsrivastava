const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");
const submitBtn = document.getElementById("btn");

submitBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const age = parseInt(ageInput.value);
  const name = nameInput.value.trim();

  await delay(4000);

  if (age >= 18) {
    alert(`Welcome, ${name}. You can vote.`);
  } else {
    alert(`Oh sorry ${name}. You aren't old enough.`);
  }
});

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
