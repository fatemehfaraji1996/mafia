/* <div class="input-group">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons">
  <button class="btn btn-outline-secondary" type="button">Button</button>
  <button class="btn btn-outline-secondary" type="button">Button</button>
</div> */

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = document.querySelector("form");

  const inputPlayers = document.querySelector("#player");
  console.log(inputPlayers);
  const butonSubmit = document.querySelector("#button-addon2");
  console.log(butonSubmit);
  // start
  const divparentBox = document.createElement("div");
  form.append(divparentBox);
  divparentBox.classList.add("input-group");
  // creat box parent
  const inputNames = document.createElement("input");
  divparentBox.append(inputNames);
  // inputNames.classList.add("form-control");
  // creat input names of players

  // handel value input
  const buttonEdit = document.createElement("button");
  divparentBox.append(buttonEdit);
  buttonEdit.classList.add("btnbtnEdit");
  buttonEdit.type = "button";
  buttonEdit.textContent = "Edit";
  // creat button edit
  const buttonAdd = document.createElement("button");
  divparentBox.append(buttonAdd);
  buttonAdd.type = "button";
  buttonAdd.classList.add("btnbtnDelet");
  buttonAdd.textContent = "Delet";
  // creat buton edit
});
inputPlayers.addEventListener("keyup", (e) => {
  inputNames.value = inputPlayers.value;
});
