const bob = document.querySelector('.face')
const buttons=document.querySelectorAll('button')

const screendisplay=document.querySelector('.screen')

let calculation =[]
let accumulativecalculation

function calculate(button){

const value =button.textContent
if(value==="CLEAR"){
    calculation=[]
    screendisplay.textContent='0'
}else if(value==="="){
screendisplay.textContent=eval(accumulativecalculation)

} else{
    calculation.push(value)
    accumulativecalculation=calculation.join('')
    screendisplay.textContent= accumulativecalculation
}


}
buttons.forEach(button=>button.addEventListener('click',()=>calculate(button)))
