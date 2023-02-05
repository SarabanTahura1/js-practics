//write a problem findOddSum()that will take the array[5, 7, 8, 10, 45, 30] ass the input perameter and will return the sum of the odd number
function getsSum (numbers)
{
    let sum=0;
 for(let  i=0; i< numbers.length; i++){
    const index = i;
    const element = numbers[index];
    sum = sum+element;
    console.log(index, element, sum);
 }
return sum;
}
const myNumbers = [5, 7, 8, 10, 45, 30] ;
getsSum(myNumbers);