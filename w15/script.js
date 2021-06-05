const bars=document.querySelector('.bars');
const cancel_btn=document.querySelector('.cancel_btn');
const empty=document.querySelector('.empty');
const mobile_menu=document.querySelector('.mobile_menu');
const menu2=document.querySelector('.mobile_menu ul li:nth-child(2)');
const item1=document.querySelector('.item1');
const item1_b=document.querySelector('.item1 ul li:nth-child(1)');
const menu3=document.querySelector('.mobile_menu ul li:nth-child(3)');
const item2=document.querySelector('.item2');
const item2_b=document.querySelector('.item2 ul li:nth-child(1)');
const menu4=document.querySelector('.mobile_menu ul li:nth-child(4)');
const item3=document.querySelector('.item3');
const item3_b=document.querySelector('.item3 ul li:nth-child(1)');
const menu5=document.querySelector('.mobile_menu ul li:nth-child(5)');
const item4=document.querySelector('.item4');
const item4_b=document.querySelector('.item4 ul li:nth-child(1)');
const menu6=document.querySelector('.mobile_menu ul li:nth-child(6)');
const item5=document.querySelector('.item5');
const item5_b=document.querySelector('.item5 ul li:nth-child(1)');
const p1=document.querySelector('.p1');
const list1=document.querySelector('.list1');

bars.addEventListener('click',function (){
   if (item1.classList.contains('disappear')) {
      item1.classList.toggle('disappear');
   }
   if (item2.classList.contains('disappear')) {
      item2.classList.toggle('disappear');
   }
   if (item3.classList.contains('disappear')) {
      item3.classList.toggle('disappear');
   }
   if (item4.classList.contains('disappear')) {
      item4.classList.toggle('disappear');
   }
   if (item5.classList.contains('disappear')) {
      item5.classList.toggle('disappear');
   }
    mobile_menu.classList.toggle('show');
    cancel_btn.classList.toggle('show');
    empty.classList.toggle('show');
 })
 cancel_btn.addEventListener('click',function (){
    mobile_menu.classList.toggle('show');
    cancel_btn.classList.toggle('show');
    empty.classList.toggle('show');
    if (item1.classList.contains('show')) {
      item1.classList.toggle('disappear');
  }
  if (item2.classList.contains('show')) {
   item2.classList.toggle('disappear');
}
if (item3.classList.contains('show')) {
   item3.classList.toggle('disappear');
}
if (item4.classList.contains('show')) {
   item4.classList.toggle('disappear');
}
if (item5.classList.contains('show')) {
   item5.classList.toggle('disappear');
}
 })
 empty.addEventListener('click',function (){
    mobile_menu.classList.toggle('show');
    cancel_btn.classList.toggle('show');
    empty.classList.toggle('show');
 })
 menu2.addEventListener('click',function (){
   if (item1.classList.contains('disappear')) {
      item1.classList.toggle('disappear');
   }
    item1.classList.toggle('show');
 })
item1_b.addEventListener('click',function (){
    item1.classList.toggle('show');
 })
 menu3.addEventListener('click',function (){
   if (item2.classList.contains('disappear')) {
      item2.classList.toggle('disappear');
   }
    item2.classList.toggle('show');
 })
item2_b.addEventListener('click',function (){
    item2.classList.toggle('show');
 })
 menu4.addEventListener('click',function (){
   if (item3.classList.contains('disappear')) {
      item3.classList.toggle('disappear');
   }
    item3.classList.toggle('show');
 })
item3_b.addEventListener('click',function (){
    item3.classList.toggle('show');
 })
 menu5.addEventListener('click',function (){
   if (item4.classList.contains('disappear')) {
      item4.classList.toggle('disappear');
   }
    item4.classList.toggle('show');
 })
item4_b.addEventListener('click',function (){
    item4.classList.toggle('show');
 })
 menu6.addEventListener('click',function (){
   if (item5.classList.contains('disappear')) {
      item5.classList.toggle('disappear');
   }
    item5.classList.toggle('show');
 })
item5_b.addEventListener('click',function (){
    item5.classList.toggle('show');
 })
 /*
p1.addEventListener("click", function( event ) {
   list1.classList.toggle('show');
})
p1.addEventListener("mouseover", function( event ) {
   list1.classList.toggle('show');
})
*/