(function () {
  'use strict';
  const radioButtons = document.querySelectorAll('input[name="background"]');

  radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
      document.body.className = radioButton.value;
    });
  });



  function loadParts() {
    const bodyParts = document.getElementById('image-area');

    for (let i = 1; i < 15; i++) {
      const bp = document.createElement('img');
      const x = Math.random() * (bodyParts.offsetWidth - 100);
      const y = Math.random() * (bodyParts.offsetHeight - 100);
      bp.style.left = x + 'px';
      bp.style.top = y + 'px';
      bodyParts.appendChild(bp);
      bp.src = `/sharedImages/${i}.png`;
      bp.className += 'box';
    };
  };

  loadParts();

  let dragging;
  let offset;

  document.addEventListener('mousedown', e => {
    e.preventDefault();
    if (e.target.className === 'box') {
      console.log('mouse down', e);
      dragging = e.target;
      offset = { y: e.offsetY, x: e.offsetX };
    }
  });
  document.addEventListener('mousemove', e => {

    if (dragging) {
      console.log('mouse move', e);

      dragging.style.top = `${e.pageY - offset.y}px`; dragging.style.left = `${e.pageX - offset.x}px`;
    }
  });

  document.addEventListener('mouseup', e => {
    console.log('mouse up', e);
    dragging = null;
  });

}());