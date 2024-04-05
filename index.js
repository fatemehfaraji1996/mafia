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
        // start edit button
        const boxEdit = document.createElement('div')
        boxPerson.append(boxEdit) 
        const pEditEle = document.createElement('p')
        boxEdit.append(pEditEle)
        pEditEle.textContent= 'Edit'
        boxEdit.classList.add('divedit')
        console.log(boxEdit);
        boxEdit.addEventListener('click',(e)=>{
            inputEle.value =pEle.textContent

        })
        // start  delet button
        const boxDelet = document.createElement('div')
        boxPerson.append(boxDelet) 
        const  pboxDelet = document.createElement('p')
        boxDelet.append(pboxDelet)
        pboxDelet.textContent= 'Delet'
        boxDelet.classList.add('divdelet')
        boxDelet.addEventListener('click',(e)=>{
            boxPerson.remove()
        })
    }
    inputEle.value=''
  
});



