var instructions = document.getElementById('instructions');

var downPayment = document.getElementById('downPayment');
var monthlyPayment = document.getElementById('monthlyPayment');
var time = document.getElementById('time');




// Down payment radio button is selected
function downPaymentClick() {
    instructions.textContent = 'Please enter what you would like your monthly payment amount to be and how many months you want to take to pay off your car. Then we will calcualte what your downpayment will need to be.';
}

downPayment.addEventListener('click', downPaymentClick);


// Monthly payment radio button is selected
function monthlyPaymentClick() {
    instructions.textContent = 'Please enter how much you want to put on a down payment and how many months you want to take to pay off the car. Then we will calculate what your monthly payment will need to be.';
}

monthlyPayment.addEventListener('click', monthlyPaymentClick);


// Time radio button is selected
function timeClick() {
    instructions.textContent = 'Please enter how much you want to put on a down payment and what you would like your monthly payment amount to be. Then we will calculate how many months it will take to pay off your car.';
}

time.addEventListener('click', timeClick);