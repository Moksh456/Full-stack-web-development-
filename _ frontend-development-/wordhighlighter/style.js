const paragraphElement = document.querySelector('#paragraph-input');
const highlighteddwordElement = document.querySelector('#word-input');

highlighteddwordElement.addeventListner("changed", (event =>{
    const inputvalue = event.target.value;
    console.log(typeof paragraphElement.innerHTML);
    
}))