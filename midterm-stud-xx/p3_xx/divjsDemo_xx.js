function changeImage(index) {
  const player = document.querySelector('#player');
  console.log('player', player);
  switch (index) {
    case 1:
      player.innerHTML = `<img src="./images/TKU1.png" style="width:100%; height: auto" />`;
      break;
    case 2:
      player.innerHTML =
        '<img src="./images/TKU2.png" style="width:100%; height: auto" />';
      break;
    case 3:
      player.innerHTML = `<img src="./images/TKU3.png" style="width:100%; height: auto" />`;
      break;
    case 4:
      player.innerHTML = `<img src="./images/TKU4.png" style="width:100%; height: auto"/>`;
      break;
    case 5:
      player.innerHTML = `<img src="./images/TKU5.png" style="width:100%; height: auto"/>`;
      break;
  }
}

function changeColor(index) {
  const p1 = document.querySelector('#heading');
  const p2 = document.querySelector('#main');
  const p3 = document.querySelector('#footer');
  switch (index) {
    case 1:
      p1.style.backgroundColor = 'yellow';
      break;
    case 2:
      p2.style.backgroundColor = 'azure';
      break;
    case 3:
      p3.style.backgroundColor = 'black';
      break;
  }
}

function showTKU60(){
  const p = document.querySelector('#menu2');
  p.innerHTML=``;
}

function clearMenu2All(){
  const p = document.querySelector('#menu2');
  p.innerHTML=` <ul>
  <li onclick="changeImage(1)">
    <a href="#">淡江大戲 1</a>
  </li>
  <li onclick="changeImage(2)">
    <a href="#">淡江大戲 2</a>
  </li>
  <li onclick="changeImage(3)">
    <a href="#">淡江大戲 3</a>
  </li>
  <li onclick="changeImage(4)">
    <a href="#">淡江大戲 4</a>
  </li>
  <li onclick="changeImage(5)">
    <a href="#">淡江大戲 5</a>
  </li>
</ul>`
}

function hideMenu1(){
  const p1 = document.querySelector('#menu1');
  const p2 = document.querySelector('#section');
  resetDiv();
  p1.classList='invisible';
  p1.style.width="auto";
  p2.style.width="80%";
}


function hideMenu2(){
  const p1 = document.querySelector('#menu2');
  const p2 = document.querySelector('#section');
  resetDiv();
  p1.classList=`invisible`;
  p1.style.width="auto";
  p1.innerHTML=``;
  p2.style.width='80%';
}

function resetDiv(){
  const p1 = document.querySelector('#menu1');
  const p2 = document.querySelector('#section');
  const p3 = document.querySelector('#menu2');
  p1.classList=``;
  p2.classList=``;
  p3.classList=``;
  p1.style.width="20%";
  p2.style.width="60%";
  p3.style.width="20%";
  p3.innerHTML=`<ul>
  <li onclick="changeImage(1)">
    <a href="#">淡江大戲 1</a>
  </li>
  <li onclick="changeImage(2)">
    <a href="#">淡江大戲 2</a>
  </li>
  <li onclick="changeImage(3)">
    <a href="#">淡江大戲 3</a>
  </li>
  <li onclick="changeImage(4)">
    <a href="#">淡江大戲 4</a>
  </li>
  <li onclick="changeImage(5)">
    <a href="#">淡江大戲 5</a>
  </li>
</ul>`;
}