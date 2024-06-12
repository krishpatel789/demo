const arr=[20,200,9523,85,9090];
let largest=arr[0];
for(let i=0;i<arr.length;i++)
{
    if(largest<arr[i])
    {
        largest=arr[i];
    }
}
//we can change an array declared vth const
// arr[3]=300;
// console.log(arr);
console.log(largest);