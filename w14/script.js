const p=document.querySelector('.menu_btn');
const allMicrosoft=document.querySelector('.allMicrosoft');
const detail1=document.querySelector('.detail1');
const detail2=document.querySelector('.detail2');
const software=document.querySelector('.more1');
const c1=document.querySelector('.c1');
const second=document.querySelector('.more2');
const c2=document.querySelector('.c2');
const Entertainment=document.querySelector('.more3');
const c3=document.querySelector('.c3');
const Business=document.querySelector('.more4');
const c4=document.querySelector('.c4');
const fifth=document.querySelector('.more5');
const c5=document.querySelector('.c5');
const Other=document.querySelector('.more6');
const c6=document.querySelector('.c6');
//console.log('detail2',detail2);
p.addEventListener('click',function (){
    detail2.classList.toggle('show');
    if (detail2.classList.contains('show')) {
        p.innerHTML = `<i class="fas fa-times"></i>`;
      } else {
        p.innerHTML = `<i class="fas fa-bars"></i>`;
      }
})
allMicrosoft.addEventListener('click',function (){
  detail1.classList.toggle('show');
  allMicrosoft.classList.toggle('clicked');
})
software.addEventListener('click',function (){
  c1.classList.toggle('show');
})

second.addEventListener('click',function (){
  c2.classList.toggle('show');
})

Entertainment.addEventListener('click',function (){
  c3.classList.toggle('show');

})

Business.addEventListener('click',function (){
  c4.classList.toggle('show');
})

fifth.addEventListener('click',function (){
  c5.classList.toggle('show');

})

Other.addEventListener('click',function (){
  c6.classList.toggle('show');
})