const input0 = document.querySelector("#zero");
const input1 = document.querySelector("#one");
const input2 = document.querySelector("#two");
const input3 = document.querySelector("#three");
const input4 = document.querySelector("#four");
const input5 = document.querySelector("#five");



const inputs = [input0,input1, input2, input3, input4, input5];

const MovefocousNExtInput = (EventOriginationIntputNumber) => {
    if(EventOriginationIntputNumber === 5){
        return
    }
    inputs[EventOriginationIntputNumber +1].focus();
};
const movetoPreviousfunction = (EventOriginationIntputNumber) => {
    if(EventOriginationIntputNumber === 0){
        return;
    }
    inputs[EventOriginationIntputNumber - 1].focus();
}
const oninputchange = (events) =>{
    const inputnumber =  parseInt(events.target.getAttribute("data-number"))
    console.log(events.key)
    if(events.key === "Backspace"){
        movetoPreviousfunction(inputnumber)
       }else{
        MovefocousNExtInput(inputnumber)
       }
}
inputs.forEach((even)=>{
    even.addEventListener('keyup', oninputchange)
}); 