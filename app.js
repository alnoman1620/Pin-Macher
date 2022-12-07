
function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinLength = pin + "";
    if(pinLength.length == 4){
        return pin;
    }
    else{
        return getPin()
    }
}
// function generatePin(){
//     const pin = getPin();
//     document.getElementById('display-pin').value = pin;
// }
document.getElementById('g-btn').addEventListener('click',function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
})

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('pin-input')
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
    
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber; 
    }

})

function verifyPin(){
    const generatePin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('pin-input').value;
    const done = document.getElementById('pin-matched')
    const notDone = document.getElementById('pin-no')
    if(generatePin == typedPin){
      
        done.style.display = 'block';
        notDone.style.display = 'none';
        
    }
    else{
       
        notDone.style.display = 'block';
        done.style.display = 'none';
    }
}