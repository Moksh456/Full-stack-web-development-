const paragraphElement = document.querySelector('#paragraph-input');
const highlighteddwordElement = document.querySelector('#word-input');

highlighteddwordElement.addeventListner("changed", (event =>{
   console.log(event.target.target.value);
}))