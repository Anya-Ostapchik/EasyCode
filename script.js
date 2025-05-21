//Код создаёт аккордеон, переключая видимость блоков с вопросами при клике на заголовки с классом collapsible.
const coll = document.querySelectorAll(".collapsible");
for (let l = 0; l < coll.length; l++)
 coll[l].addEventListener("click", function () {
  this.classList.toggle("active");
  let l = this.nextElementSibling;
  l.style.maxHeight
   ? (l.style.maxHeight = null)
   : (l.style.maxHeight = l.scrollHeight + "px");
 });

// Управляет формой ввода телефона и модальным окном: ограничивает длину ввода,
// скрывает/показывает текст подсказки, очищает поле при смене региона, валидирует
// номер и открывает модальное окно на 1 секунду при успешной отправке.
const modalOverlay = document.querySelector("#modal-overlay");
const phone = document.querySelector(".phone");
const submitButtons = document.querySelectorAll(".submit-application");
const modalSubmit = document.querySelector("#modal-submit");
const phoneText = document.querySelector(".phone__txt");
const flags = document.querySelectorAll(".iti__selected-flag");
let maxDigits = 0;

// Обработчик фокуса на поле телефона
phone.addEventListener("focus", () => {
  maxDigits = [...phone.placeholder].filter(c => /[0-9]/.test(c)).length + 1;
  phoneText.classList.add("phone__txt_del");
  phone.style.border = "1px solid rgb(122, 122, 122)";
});

// Обработчик ввода в поле телефона
phone.addEventListener("input", () => {
  if (phone.value.length > maxDigits) phone.value = phone.value.slice(0, maxDigits);
});

// Обработчик клика по флагам региона
flags.forEach(flag => flag.addEventListener("click", () => {
  phone.value = "";
}));

// Обработчик клика по кнопкам отправки формы
submitButtons.forEach(button => button.addEventListener("click", e => {
  e.preventDefault();
  if (phone.value.length < maxDigits || !phone.value) {
    phone.style.border = "1px solid red";
    phoneText.classList.remove("phone__txt_del");
  } else {
    modalSubmit.classList.remove("modal_closed");
    modalOverlay.classList.remove("modal_closed");
    phone.value = "";
    maxDigits = 0;
    setTimeout(() => {
      modalSubmit.classList.add("modal_closed");
      modalOverlay.classList.add("modal_closed");
    }, 1000);
  }
}));

// Управляет модальными окнами для формы теста: открывает/закрывает окна,
// валидирует ввод номера телефона, ограничивает его длину, очищает поле при смене региона,
// сбрасывает форму и перенаправляет на страницу благодарности при успешной отправке.
const takeTestButtons = document.querySelectorAll(".take-test");
const modalOverlay = document.querySelector("#modal-overlay_1");
const modal1Button = document.querySelector("#modal-take__btn_1");
const modal2Button = document.querySelector("#take__btn");
const modal1 = document.querySelector("#modal__take-test");
const modal2 = document.querySelector("#modal__take-test_2");
const phoneInput = document.querySelector("#phone__take");
const closeButton = document.querySelector("#modal-close_1");
const flags = document.querySelectorAll(".iti__selected-flag");
const phoneText = document.querySelector("#phone__txt-take");
const ageInput = document.querySelector(".take-test__age");
const checkboxes = document.querySelectorAll(".modal-take__check");

// Закрывает модальные окна, сбрасывает форму и стили
const closeModal = () => {
  modal1.classList.add("modal_closed");
  modal2.classList.add("modal_closed");
  modalOverlay.classList.add("modal_closed");
  closeButton.classList.add("modal_closed");
  phoneText.classList.add("phone__txt_del");
  checkboxes.forEach(check => (check.checked = false));
  ageInput.value = "";
  phoneInput.value = "";
  phoneInput.style.border = "1px solid rgb(122, 122, 122)";
};

// Закрытие модальных окон по клику на оверлей или кнопку закрытия
[modalOverlay, closeButton].forEach(el => el.addEventListener("click", closeModal));

// Открытие первого модального окна по клику на кнопки "Пройти тест"
takeTestButtons.forEach(btn => btn.addEventListener("click", e => {
  e.preventDefault();
  modal1.classList.remove("modal_closed");
  modalOverlay.classList.remove("modal_closed");
  closeButton.classList.remove("modal_closed");
}));

// Переход от первого модального окна ко второму
modal1Button.addEventListener("click", () => {
  modal1.classList.add("modal_closed");
  modal2.classList.remove("modal_closed");
});

// Обработка фокуса на поле телефона
phoneInput.addEventListener("focus", () => {
  maxDigits = [...phoneInput.placeholder].filter(c => /[0-9]/.test(c)).length + 1;
  phoneText.classList.add("phone__txt_del");
  phoneInput.style.border = "1px solid rgb(122, 122, 122)";
});

// Ограничение длины ввода телефона
phoneInput.addEventListener("input", () => {
  if (phoneInput.value.length > maxDigits) phoneInput.value = phoneInput.value.slice(0, maxDigits);
});

// Очистка поля телефона при выборе флага региона
flags.forEach(flag => flag.addEventListener("click", () => (phoneInput.value = "")));

// Валидация и отправка формы
modal2Button.addEventListener("click", e => {
  e.preventDefault();
  if (phoneInput.value.length < maxDigits || !phoneInput.value) {
    phoneInput.style.border = "1px solid red";
    phoneText.classList.remove("phone__txt_del");
  } else {
    closeModal();
    window.location.href = "html/result.html";
  }
});

// Управляет модальным окном для записи на пробный урок: открывает/закрывает модаль,
// валидирует ввод номера телефона, ограничивает длину ввода, очищает поле при выборе региона,
// показывает сообщение об успехе на 2 секунды при успешной отправке формы.
const trialLessonButtons = document.querySelectorAll(".trial-lesson");
const closeButton = document.querySelector("#modal-close");
const modalTrialLesson = document.querySelector("#modal-trial-lesson");
const form = document.querySelector("#trial__form");
const doneMessage = document.querySelector("#trial__done");
const phoneInput = document.querySelector("#phone__trial");
const submitButton = document.querySelector("#trial__btn");
const flags = document.querySelectorAll(".iti__selected-flag");
const phoneText = document.querySelector("#phone__txt-trial");
const modalOverlay = document.querySelector("#modal-overlay");
let maxDigits = 0;

// Закрывает модаль, сбрасывает форму и восстанавливает стили
const closeModal = () => {
  modalTrialLesson.classList.add("modal_closed");
  modalOverlay.classList.add("modal_closed");
  doneMessage.classList.add("done_close");
  form.classList.remove("done_close");
  closeButton.classList.add("modal_closed");
  phoneText.classList.add("phone__txt_del");
  phoneInput.value = "";
  phoneInput.style.border = "1px solid rgb(122, 122, 122)";
};

// Закрытие модали по клику на оверлей или кнопку закрытия
[modalOverlay, closeButton].forEach(el => el.addEventListener("click", closeModal));

// Открытие модали по клику на кнопки пробного урока
trialLessonButtons.forEach(btn => btn.addEventListener("click", e => {
  e.preventDefault();
  modalOverlay.classList.remove("modal_closed");
  modalTrialLesson.classList.remove("modal_closed");
  closeButton.classList.remove("modal_closed");
}));

// Обработка фокуса на поле телефона
phoneInput.addEventListener("focus", () => {
  maxDigits = [...phoneInput.placeholder].filter(c => /[0-9]/.test(c)).length + 1;
  phoneText.classList.add("phone__txt_del");
  phoneInput.style.border = "1px solid rgb(122, 122, 122)";
});

// Ограничение длины ввода телефона
phoneInput.addEventListener("input", () => {
  if (phoneInput.value.length > maxDigits) phoneInput.value = phoneInput.value.slice(0, maxDigits);
});

// Очистка поля телефона при выборе флага региона
flags.forEach(flag => flag.addEventListener("click", () => (phoneInput.value = "")));

// Валидация и отправка формы
submitButton.addEventListener("click", e => {
  e.preventDefault();
  if (phoneInput.value.length < maxDigits || !phoneInput.value) {
    phoneInput.style.border = "1px solid red";
    phoneText.classList.remove("phone__txt_del");
  } else {
    doneMessage.classList.remove("done_close");
    form.classList.add("done_close");
    setTimeout(closeModal, 2000);
  }
}));

