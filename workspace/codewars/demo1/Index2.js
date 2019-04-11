function arrmin(arr){
   var min=arr[0];
   for(var i=0;i<arr.length;i++){
       if(arr[i]<min){
           min=arr[i];
       }
   }
   return min;
}
var thearray=[34,15,88,2];
console.log(arrmin(thearray));
