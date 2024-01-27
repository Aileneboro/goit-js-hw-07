const formLogin = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const values = {
    email: email.trim(),
    password: password.trim(),
  };
  console.log(values);

  form.reset();
};
formLogin.addEventListener("submit", handleSubmit);
