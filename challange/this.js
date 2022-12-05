
function givenArray(arr){
    evenArr = [];
   oddArr = [];
    for(let i = 0; i < arr.length; i ++){
      if(arr[i] % 2 === 0){
        evenArr.push(arr[i]);
        
      }else if(arr[i] % 2 !== 0){
        oddArr.push(arr[i]);
        }
      }
    if(evenArr.length === 1){
      return evenArry[0];
      
    }else if(oddArr.length === 1){
      return oddArr[0];
    }
      
    }
  
    
  
  
  console.log(givenArray([2, 4, 0, 100, 4, 11, 2602, 36]));