function isEven(number){
    const reminder = number%2;
   // console.log(reminder);
   if (reminder == 0){
    //console.log(true);
    return true;
   }
   else{
    //console.log(false);
    return false
   }
}
  const myNumber=isEven(303);
const motherNumber = isEven(500);
console.log(myNumber,  motherNumber);