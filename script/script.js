// const video = document.querySelector('.video');

// function getCoords(elem) {
//     let box = elem.getBoundingClientRect();
  
//     return box.top - box.height + window.scrollY;
// }

// window.addEventListener('scroll', function(){
//     if(window.scrollY >= getCoords(video)){
//         video.play();
//     } else{
//         video.pause();
//     }
// });

const coll = document.querySelectorAll('.collapsible');

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}