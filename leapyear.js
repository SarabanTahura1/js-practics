function leapYear (year){
 const reminder = year % 4;

if (reminder == 0){
    console.log('leapyear' ,year);
}
else{
    console.log('not_leap_year' ,year);
}
}
leapYear(2022);