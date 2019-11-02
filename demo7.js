const arr = [1,23,1,1,1,3,23,5,6,7,9,9,8,5];
function uniq(arr){
    　　var newArr = [arr[0]];
   　　 for(var i=1;i<arr.length;i++){
 　　　　if(newArr.indexOf(arr[i]) == -1){
           　　 newArr.push(arr[i]);
     　　  }
         }
         return newArr;
    }
    console.log(uniq(arr));