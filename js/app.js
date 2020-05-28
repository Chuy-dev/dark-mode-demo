const checkbox = document.querySelector('#checkbox')

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  checkbox.setAttribute('checked', true);
  console.log("is dark");
}else{
  console.log("is light");
}

//document.body.style.setProperty('--cardGray', 'blue');

checkbox.addEventListener('change', function(event) {
  if (this.checked) {
    document.body.classList.remove('is-light-mode');
    document.body.classList.add('is-dark-mode');
    console.log("is dark");
  } else {
    document.body.classList.remove('is-dark-mode');
    document.body.classList.add('is-light-mode');
    console.log("is light");
  }
});
