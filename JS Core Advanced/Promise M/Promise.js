let prom = Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 300)), 
    new Promise(resolve => setTimeout(() => resolve(3), 200)), 
    new Promise(resolve => setTimeout(() => resolve(2), 100)),
  ]).then(console.log);