const arr=[100,200,300,600,302];
let low=0;
let lengthArr=arr.length;
let high=lengthArr-1;
for(let i=0;i<lengthArr/2;i++)
{
    while (high>low) {
      //swapElements
      let temp=arr[low];
      arr[low] =arr[high];
      arr[high]=temp;
      low++;
      high--;
    }
    
}
// arr[low] =arr[high];

// console.log(arr[0]);
// console.log(arr[high]);
console.log(arr);