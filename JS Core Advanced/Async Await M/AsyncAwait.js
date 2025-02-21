let urls = [
    'https://api.github.com/users/PetrachkovStepan',
    'https://api.github.com/users/PetrachkovVasiliy',
    'https://api.github.com/users/ShkorDanila',
  ];
  
let requests = urls.map(url => fetch(url).then(
    successResponse => {
        return successResponse.json();
    }
  ));
  
 async function f() {

    let promise = Promise.all(requests);
  
    let result = await promise;
  
    for(let i = 0; i < result.length; i++){
        console.log(result[i]);
    }
  }

  f()