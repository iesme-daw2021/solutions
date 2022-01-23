/**
 * Function requested in Exercise 1
 * @param {*} ms
 * @returns
 */
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Completed');
      //reject('Error');
    }, ms);
  });
}

// delay(1000).then((data)=>{
//     console.log(data);
// });
