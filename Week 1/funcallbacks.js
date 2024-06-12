function sum(num1,num2,fntoCall){
    let result=num1+num2;
    fntoCall(result);
}
function displayResult(data){
    console.log("Result of the sum is : "+data);
}
function displayResultPassive(data){
    console.log("Sum's result is : " +data);
}

// console.log(displayResult(sum(5,10)));
// console.log(sum(10,20));

//you are onlyy allowed to call one function after this
//How eill you displayResult of a sum

//WE CAN DO THIS BY PASSING FUNCTION AS AN ARGUMENT
//ie KNOWN AS FUNCALL BACKS
const ans=sum(2,10,displayResult);