//пробный урок
const trialLessonBtn = document.querySelectorAll('.trial-lesson');
const close = document.querySelector('#modal-close');
const modalTrialLesson = document.querySelector('#modal-trial-lesson');
const form = document.querySelector('#trial__form');
const done = document.querySelector('#trial__done');
const phoneTrial = document.querySelector('#phone__trial');
const modalBtn = document.querySelector('#trial__btn');
const flagTrial = document.querySelectorAll('.iti__selected-flag');
const trialTxt = document.querySelector('#phone__txt-trial');
const modalOverlay = document.querySelector('#modal-overlay');

let num = 0;

function closeModal(){
  modalTrialLesson.classList.add('modal_closed');
  modalOverlay.classList.add('modal_closed');
  done.classList.add('done_close');
  form.classList.remove('done_close');
  close.classList.add('modal_closed');
  trialTxt.classList.add('phone__txt_del');
  phoneTrial.value = '';
  phoneTrial.style.border = '1px solid rgb(122, 122, 122)';
}

modalOverlay.addEventListener('click', function(){
  closeModal();
});

for (let btn of trialLessonBtn) {
  btn.addEventListener('click', function(e){
    e.preventDefault();

    modalOverlay.classList.remove('modal_closed');
    modalTrialLesson.classList.remove('modal_closed');
    close.classList.remove('modal_closed');
  });
}

close.addEventListener('click', function(){
  closeModal();
});

phoneTrial.addEventListener('focus', function(){
  num = 0;

  for(let i = 0; i < phoneTrial.placeholder.length; i++){
    if(phoneTrial.placeholder[i] >= 0 && phoneTrial.placeholder[i] <= 9 && phoneTrial.placeholder[i] !== ' '){
      num++;
    }
  }
  num++;
  
  trialTxt.classList.add('phone__txt_del');
  phoneTrial.style.border = '1px solid rgb(122, 122, 122)';
});

phoneTrial.addEventListener('input', function(){
  if (this.value.length > num){
    this.value = this.value.slice(0, num);
  }
});

for(flag of flagTrial){
  flag.addEventListener('click', function(){
    phoneTrial.value = '';
  });
}

modalBtn.addEventListener('click', function(e){
  e.preventDefault();
  if(phoneTrial.value.length < num || phoneTrial.value.length === 0){
    phoneTrial.style.border = '1px solid red';
    trialTxt.classList.remove('phone__txt_del');
  }else{
    done.classList.remove('done_close');
    form.classList.add('done_close');

    setTimeout(() => {
      closeModal();
    }, 2000);
  }
});