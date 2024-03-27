const inputEle = document.querySelector(".input");
const buttonAddEle = document.querySelector(".add");
const cantanerEle = document.querySelector('.contaner')
let count = 0
const formEle = document.querySelector("form");

formEle.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputEle = document.querySelector(".input");
    console.log(inputEle.value);
    if (inputEle.value){
        const boxPerson = document.createElement('div')
        formEle.append(boxPerson)
        boxPerson.classList.add('boxPerson')
        const pEle = document.createElement('p')
        pEle.textContent=inputEle.value
        boxPerson.append(pEle)
        count ++
        if (count>5) {
            alert('you cant cheose batter than 15')
        }
        pEle.classList.add('pName')
        const editEle = document.createElement('div')
        boxPerson.append(editEle)
        editEle.classList.add('editEle')
        const pEDIT = document.createElement('p')
        pEDIT.textContent ='Edit'
        editEle.append(pEDIT)
        // edit section
        editEle.addEventListener('click',()=>{
            inputEle.value= pEle.textContent
        }) 
        // 
    }
   
    inputEle.value = ""
    
});

function edit(element) {
    element.addEventListener('click',()=>{
        inputEle.value = inputEle.value
    })
}


