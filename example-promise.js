// function getTempCallBack(location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallBack('Philadelphia',function(err, temp){
//   if(err){
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(location);
//       reject('City not found');
//     });
//   })
// }
//
// getTempPromise('Philadelphia').then(function(temp){
//   console.log('promise success', temp)
// },function(err){
//   console.log('promise failed', err)
// })


function addPromise(a,b){

  return new Promise(function(resolve, reject){
    console.log('starting')
    setTimeout(function(){
      if (typeof a === 'number' && typeof b === 'number'){
          resolve(a+b);
      }else {
          reject('One or more arguments not number');
      }
    }, 1000)
  })
}

addPromise(2, 3).then(function(sum){
  console.log("Success" + sum);
}, function(err){
  console.log("Error -", err)
});

addPromise(2, "apples").then(function(sum){
  console.log('shouldnt show', sum);
},function(err){
  console.log('this shuold show', err);
})
