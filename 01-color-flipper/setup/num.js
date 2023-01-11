
const btn = document.getElementById('btn')
const number =  document.querySelector('.num')



btn.addEventListener('click', ()=>{

    const random = getNumber()
    number.textContent = random


})


const getNumber = ()=>{

    return Math.floor(Math.random()* 10)
}