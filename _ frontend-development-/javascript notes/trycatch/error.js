/*const sum = (a,b) => {
    console.log("begin")
    try {
        console.log(person.tilte)
    } catch (error) {
        console.log("pure system...")
    }
    console.log("END OF THE CODE.....")
    return a+b;
}

sum(25,30);
console.log("sum is ", sum(25,30));*/

const sum = (a, b) => {
  
  try{
      let result = a+b;
      if(result>10){
            throw new Error("result  is more than 10...it wrong")
           
    }
    return result
}
catch(error){
        console.log(error)
    }
}
 const s = sum(25, 30);
  
