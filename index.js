var customerName = 'bob';
const leastFavoriteCustomer = 'lucy';

function upperCaseCustomerName(){
  return customerName = 'BOB';
}

function setBestCustomer(){
  bestCustomer = 'not bob';
  
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'lucky';
}

console.log(changeLeastFavoriteCustomer());