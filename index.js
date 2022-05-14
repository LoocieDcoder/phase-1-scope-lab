var customerName = 'bob';
const leastFavoriteCustomer = 'malik';

function upperCaseCustomerName(){

  return customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = 'not bob';
  
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'meera';
}

console.log(changeLeastFavoriteCustomer());