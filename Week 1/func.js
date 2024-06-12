function Calculations(a,b,type)
{
    return type(a,b);
}
function sum(a,b)
{
    return a+b;
}
function sub(b,a)
{
    return a-b;
}

console.log(Calculations(10,25,sub));
