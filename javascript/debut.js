var btn = document.querySelector('input');
var txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.value === 'Démarrer la machine') {
    btn.value = 'Arrêter la machine';
    txt.textContent = 'La machine est démarrée !';
  } else {
    btn.value = 'Démarrer la machine';
    txt.textContent = 'La machine est arrêtée.';
  }
}


