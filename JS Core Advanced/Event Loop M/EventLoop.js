let promise = new Promise(function(resolve, reject) {
    let timeOut = Math.floor(Math.random()*10)
    if(timeOut <= 5){
        setTimeout(() => console.log(timeOut), timeOut*1000);
        resolve("Число: " + timeOut + " меньше либо равно 5")
    }else{
        reject(new Error("Число: " + timeOut + " больше 5"));
    }
  }).then()
  .catch(err => console.log(err))