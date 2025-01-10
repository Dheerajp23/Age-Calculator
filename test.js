
const birthDate = document.getElementById('date');
const dateButton = document.getElementById('date-button');
function calculateExactAge(birthDate) {

    let today = new Date();

    let birthDay = new Date(birthDate);

    let years = today.getFullYear() - birthDay.getFullYear();


    let months = today.getMonth() - birthDay.getMonth();
    let days = today.getDate() - birthDay.getDate();


    if (months < 0) {
        years--;
        months += 12;
    }
    if (days < 0) {
        months--;
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        console.log(prevMonth.getDate());
        days += prevMonth.getDate();
    }
    document.getElementById('years').innerHTML = years,
    document.getElementById('months').innerHTML = months,
    document.getElementById('days').innerHTML = days
    return 
}
dateButton.addEventListener('click', function(){
   if(birthDate.value === ''){
       alert('Please enter your date of birth')
    }
    else{
        calculateExactAge(birthDate.value)
    }
    console.log(exactAge)
});



