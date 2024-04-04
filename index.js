const inputEle = document.querySelector(".input");
const buttonAddEle = document.querySelector(".add");
const cantanerEle = document.querySelector('.contaner')
// console.log(cantanerEle);
// console.log(buttonAddEle);
// console.log(inputEle);
const formEle = document.querySelector("form");

formEle.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputEle = document.querySelector(".input");
    console.log(inputEle.value);
    if (inputEle.value) {
        const boxPerson = document.createElement('div')
        formEle.append(boxPerson)
        boxPerson.classList.add('boxPerson')
        const pEle = document.createElement('p')
        pEle.textContent=inputEle.value
        boxPerson.append(pEle)
        const boxEdit = document.createElement('div')
        boxPerson.append(boxEdit) 
        const pEditEle = document.createElement('p')
        boxEdit.append(pEditEle)
        pEditEle.textContent= 'Edit'
    }
    
});



