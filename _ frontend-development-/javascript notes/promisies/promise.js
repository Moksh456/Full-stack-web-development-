const res = new Promise((resolve, reject) => {;
// nimic async flow via settimeout API

    setTimeout(() => {
       resolve("Promise resolved");
    }, 4000);})
console.log(res);