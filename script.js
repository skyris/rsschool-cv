let isSmall;
let lastSize;
const BREAK_POINT = 920; // 920px
const container = document.querySelector('.container');
const lefts = document.querySelectorAll('.left');
const rights = document.querySelectorAll('.right');

function renderForSmall() {
  container.innerHTML = '';
  lefts.forEach(el => container.append(el));
  rights.forEach(el => container.append(el));
  lastSize = isSmall;
}

function renderForBig() {
  const leftWrapper = document.createElement('aside');
  leftWrapper.classList.add('aside');
  lefts.forEach(el => {
    leftWrapper.appendChild(el);
  });
  container.appendChild(leftWrapper);
  const rightWrapper = document.createElement('main');
  rightWrapper.classList.add('main');
  rights.forEach(el => {
    rightWrapper.appendChild(el);
  });
  container.appendChild(rightWrapper);
  lastSize = isSmall;
}

function render(width) {
  if (width < BREAK_POINT) {
    isSmall = true;
    if (isSmall !== lastSize) {
      renderForSmall();
    }
  } else {
    isSmall = false;
    if (isSmall !== lastSize) {
      renderForBig();
    }
  }
}

render(window.innerWidth);

window.addEventListener('resize', () => {
  render(window.innerWidth);
});
