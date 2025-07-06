import '../css/styles.css';

const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const loadFormData = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!saved) return;
    formData = saved;
    form.elements.email.value = saved.email || '';
    form.elements.message.value = saved.message || '';
  } catch (event) {
    console.error('Invalid saved form data:', event);
  }
};

const onFormInput = ({ target: { name, value } }) => {
  formData[name] = value.trim();
  localStorage.setItem(storageKey, JSON.stringify(formData));
};

const onFormSubmit = (event) => {
  event.preventDefault();
  const { email, message } = form.elements;

  if (!email.value.trim() || !message.value.trim()) {
    alert('All form fields must be filled in');
    return;
  }

  console.log(formData);
  form.reset();
  localStorage.removeItem(storageKey);
  formData = { email: '', message: '' };
};

if (form) {
  loadFormData();

  form.addEventListener('submit', onFormSubmit);
  form.addEventListener('input', onFormInput);

  form.elements.email.focus();
}
