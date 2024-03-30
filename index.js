
/* <div class="input-group">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons">
  <button class="btn btn-outline-secondary" type="button">Button</button>
  <button class="btn btn-outline-secondary" type="button">Button</button>
</div> */

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputEle = document.querySelector('.form-control');
  const buttonAddEle = document.querySelector('.btn-outline-secondary');
  const form = document.querySelector('form')
  // start
  const divparentBox = document.createElement('div')
  form.append(divparentBox)
  divparentBox.classList.add('input-group')
  // creat box parent
  const inputNames = document.createElement('input')
  divparentBox.append(inputNames)
  inputNames.classList.add('form-control')
  // creat input names of players
  

});

