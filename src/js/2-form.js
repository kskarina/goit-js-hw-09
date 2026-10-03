const feedbackForm = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const inputData = JSON.parse(localStorage.getItem(localStorageKey));
if (inputData) {
  formData.email = inputData.email;
  formData.message = inputData.message;

  feedbackForm.elements.email.value = inputData.email;
  feedbackForm.elements.message.value = inputData.message;
}

feedbackForm.addEventListener('input', event => {
  if (event.target.nodeName === 'INPUT') {
    formData.email = event.target.value.trim();
  } else if (event.target.nodeName === 'TEXTAREA') {
    formData.message = event.target.value.trim();
  }
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  if (
    feedbackForm.elements.email.value.trim() === '' ||
    feedbackForm.elements.message.value.trim() === ''
  ) {
    console.log('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    formData.email = '';
    formData.message = '';
    feedbackForm.reset();
  }
});
