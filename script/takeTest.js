const takeTestBtn = document.querySelectorAll('.take-test'); //пройти тест
const modalOverlay2 = document.querySelector('#modal-overlay_1');
const modal1Btn = document.querySelector('#modal-take__btn_1');
const modal2Btn = document.querySelector('#take__btn');
const modal1 = document.querySelector('#modal__take-test');
const modal2 = document.querySelector('#modal__take-test_2');
const phoneTake = document.querySelector('#phone__take');
const close1 = document.querySelector('#modal-close_1');
const flagsTake = document.querySelectorAll('.iti__selected-flag');
const takeTxt = document.querySelector('#phone__txt-take');
const age = document.querySelector('.take-test__age');
const checks = document.querySelectorAll('.modal-take__check');

let num2 = 0;

function closeModal1(){
    modal1.classList.add('modal_closed');
    modal2.classList.add('modal_closed');
    modalOverlay2.classList.add('modal_closed');
    close1.classList.add('modal_closed');
    takeTxt.classList.add('phone__txt_del');

    for(let check of checks){
        check.checked = false;
    }

    age.value = '';
    phoneTake.value = '';
    phoneTake.style.border = '1px solid rgb(122, 122, 122)';
}

modalOverlay2.addEventListener('click', function(){
  closeModal1();
});

close1.addEventListener('click', function(){
  closeModal1();
});

for(let btn of takeTestBtn){
    btn.addEventListener('click', function(e){
        e.preventDefault();
        modal1.classList.remove('modal_closed');
        modalOverlay2.classList.remove('modal_closed');
        close1.classList.remove('modal_closed');
    });
}

modal1Btn.addEventListener('click', function () {
    modal1.classList.add('modal_closed');
    modal2.classList.remove('modal_closed');
});


phoneTake.addEventListener('focus', function(){
  num2 = 0;

  for(let i = 0; i < phoneTake.placeholder.length; i++){
    if(phoneTake.placeholder[i] >= 0 && phoneTake.placeholder[i] <= 9 && phoneTake.placeholder[i] !== ' '){
      num2++;
    }
  }
  num2++;
  
  takeTxt.classList.add('phone__txt_del');
  phoneTake.style.border = '1px solid rgb(122, 122, 122)';
});

phoneTake.addEventListener('input', function(){
  if (this.value.length > num2){
    this.value = this.value.slice(0, num2);
  }
});

for(flag of flagsTake){
  flag.addEventListener('click', function(){
    phoneTake.value = '';
  });
}

modal2Btn.addEventListener('click', function(e){
  e.preventDefault();
  if(phoneTake.value.length < num2 || phoneTake.value.length === 0){
    phoneTake.style.border = '1px solid red';
    takeTxt.classList.remove('phone__txt_del');
  }else{
    closeModal1();
    window.location.href = 'html/result.html';
  }
});