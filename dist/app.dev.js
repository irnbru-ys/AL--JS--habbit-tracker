"use strict";

function submitForm() {
  var input = document.querySelector('.input').value;

  if (!input) {
    return;
  }

  document.querySelector('.panel').innerText = input;
  document.querySelector('.input').value = '';
  var a = {
    text: input
  };
  var b = JSON.stringify(a);
  var q = b.replace('{"', '');
  q = q.replace('"}', '');
  q = q.replace('":"', ' ');
  q = q.split(' ');
  localStorage.setItem(q[0], q[1]);
}

function inputChanged(e) {
  if (e.code === 'Enter') {
    submitForm();
  }
}

console.log(localStorage.getItem('a'));