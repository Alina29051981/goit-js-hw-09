import '../css/styles.css';

const form = document.querySelector(".feedback-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const elements = form.elements;
    const email = elements.email.value.trim();
    const message = elements.message.value.trim();

    if (email === "" || message === "") {
      alert("All form fields must be filled in");
      return;
    }

    const dataForm = {
      email,
      message,
    };

    console.log(dataForm);
    form.reset();
  });

  form.elements.email.focus();
}