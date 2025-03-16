//отправить заявку
const modalOverlay1 = document.querySelector('#modal-overlay');
const phone = document.querySelector('.phone');
const submitApplicationBtn = document.querySelectorAll('.submit-application');
const modalSubmit = document.querySelector('#modal-submit');
const phoneTxt = document.querySelector('.phone__txt');
const flags = document.querySelectorAll('.iti__selected-flag');

let num1 = 0;

phone.addEventListener('focus', function(){
  num1 = 0;

  for(let i = 0; i < phone.placeholder.length; i++){
    if(phone.placeholder[i] >= 0 && phone.placeholder[i] <= 9 && phone.placeholder[i] !== ' '){
      num1++;
    }
  }
  num1++;
  
  phoneTxt.classList.add('phone__txt_del');
  phone.style.border = '1px solid rgb(122, 122, 122)';

});

phone.addEventListener('input', function(){
  if (this.value.length > num1){
    this.value = this.value.slice(0, num1);
  }
});

for(let flag of flags){
  flag.addEventListener('click', function(){
    phone.value = '';
    console.log(phone.value);
  });
}


for (let btn of submitApplicationBtn) {
  btn.addEventListener('click', function(e){
    e.preventDefault();
    if(phone.value.length < num1 || phone.value.length === 0){
      phone.style.border = '1px solid red';
      phoneTxt.classList.remove('phone__txt_del');
    }else{
      modalSubmit.classList.remove('modal_closed');
      modalOverlay1.classList.remove('modal_closed');

      phone.value = '';
      num1 = 0;

      setTimeout(() => {
        modalSubmit.classList.add('modal_closed');
        modalOverlay1.classList.add('modal_closed');
      }, 1000);
    }
  });
}
