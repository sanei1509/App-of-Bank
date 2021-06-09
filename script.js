'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'santi',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['1', '2', '3', '4', '5'];

// alert([...arr, ...arr2]);
// Métodos de matrices

// SLICE
console.log(arr.slice(2)); // output  = c, d, e;
console.log(arr.slice(2, 4)); // output = c, d;
// *** el inicio y el fin no se INCLUYEN.
//  PARÁMETRO NEGATIVO
console.log(arr.slice(-2)); //output = d, e; ÚLTIMOS 2 DíGITOS
console.log(arr.slice(1, -2)); // desde 1 , todo "EXCEPTO" ÚLTIMOS 2 DíGITOS

// COPIAS DE LA MATRIZ
console.log(arr.slice()); //output = (5) ["a", "b", "c", "d", "e"]
console.log([...arr]); //output = (5) ["a", "b", "c", "d", "e"]

// SPLICE method
console.log(arr.splice(0, 4)); // todos menos el último
console.log(arr.splice(-1)); // el último
console.log(1); // de la posición 1 en adelante
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arrOp = arr.reverse();
console.log(arrOp);

// CONCAT
const letters = arr.concat(arrOp);
// o sino OPERADOR DE PROPAGACIÓN
console.log(arr);
console.log(arrOp);

console.log(letters);

// JOIN - unión de variables
const matriz = [2, 2, 4, 5, 6, 7, 2, 12];

const newNumber = matriz.join(',');

// COMENZAMOS A MOVER DATOS DE CUENTA BANCARIA / de manera simple aún
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// devolver todos los movimientos 1 a 1.
// for (const movement of movements) {
// for (const [index, movement] of movements.entries()) {
//   console.log(`${movement}$ - movimiento N° ${index}`);
// }

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(
      `Depositaste ${movement} $ en tu cuenta - MOVIMIENTO N° ${i + 1}`
    );
  } else {
    console.log(
      `Retiraste ${Math.abs(movement)} $ de tu cuenta - MOVIMIENTO N° ${i + 1}`
    );
  }
}

// De manera más ÓPTIMA Y SENCILLA
console.log('***** con forEach() ******');
movements.forEach(function (movement, index, array) {
  console.log(`Lista completa : ${[array]}`);
  if (movement > 0) {
    console.log(
      `Depositaste ${movement} $ en tu cuenta - MOVIMIENTO N° ${index + 1}`
    );
  } else {
    console.log(
      `Retiraste ${Math.abs(movement)} $ de tu cuenta - MOVIMIENTO N° ${
        index + 1
      }`
    );
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)

// MAPS and SETS with FOR EACH();

const currencies = new Map([
  ['USD', 'United States dollar'], // [KEY , VALUE];
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${value} - abreviatura (${key})`);
});

const currenciesUnique = new Set([['USD', 'EUR', 'GBP']]);

currenciesUnique.forEach(function (value, _, mp) {
  console.log(`${value}`);
});

// const mySet = new Set();

// mySet.add(1);
// mySet.add(5);
// mySet.add('some text');

// console.log(mySet);
