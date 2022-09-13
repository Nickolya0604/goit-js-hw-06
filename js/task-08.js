const form = document.querySelector(".login-form");
const btn = document.querySelector("button");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.password.value;
  console.log(mail, password);

  if (mail === "") {
    alert("Братишка(сестренка) все поля должны быть заполнены");
    return;
  }

  if (password === "") {
    alert("Братишка(сестренка) все поля должны быть заполнены");
    return;
  }

  form.reset();
}
