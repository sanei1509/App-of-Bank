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
// M??todos de matrices

// SLICE
console.log(arr.slice(2)); // output  = c, d, e;
console.log(arr.slice(2, 4)); // output = c, d;
// *** el inicio y el fin no se INCLUYEN.
//  PAR??METRO NEGATIVO
console.log(arr.slice(-2)); //output = d, e; ??LTIMOS 2 D??GITOS
console.log(arr.slice(1, -2)); // desde 1 , todo "EXCEPTO" ??LTIMOS 2 D??GITOS

// COPIAS DE LA MATRIZ
console.log(arr.slice()); //output = (5)??["a", "b", "c", "d", "e"]
console.log([...arr]); //output = (5)??["a", "b", "c", "d", "e"]

// SPLICE method
console.log(arr.splice(0, 4)); // todos menos el ??ltimo
console.log(arr.splice(-1)); // el ??ltimo
console.log(1); // de la posici??n 1 en adelante
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arrOp = arr.reverse();
console.log(arrOp);

// CONCAT
const letters = arr.concat(arrOp);
// o sino OPERADOR DE PROPAGACI??N
console.log(arr);
console.log(arrOp);

console.log(letters);

// JOIN - uni??n de variables
const matriz = [2, 2, 4, 5, 6, 7, 2, 12];

const newNumber = matriz.join(',');

// MAPS and SETS with FOR EACH();
const monedas = new Map([
  ['USD', 'United States dollar'], // [KEY , VALUE];
  ['EUR', 'Euro'],
  ['UYU', 'Peso Uruguayo'],
]);

monedas.forEach(function (value, key, map) {
  console.log(`${value} - abreviatura (${key})`); // 'USD', 'United States dollar', 'EUR', 'Euro',  'UYU', 'Peso Uruguayo'
});

// Set - solo guarda los valores ??nicos
const currenciesUnique = new Set([['USD', 'EUR', 'UYU', 'USD']]);

// con Set el 'forEach' no funciona igual, "_" = variable desechable
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}`);
});

// COMENZAMOS A MOVER DATOS DE CUENTA BANCARIA / de manera simple a??n
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// devolver todos los movimientos 1 a 1.
// for (const movement of movements) {
// for (const [index, movement] of movements.entries()) {
//   console.log(`${movement}$ - movimiento N?? ${index}`);
// }

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(
      `Depositaste ${movement} $ en tu cuenta - MOVIMIENTO N?? ${i + 1}`
    );
  } else {
    console.log(
      `Retiraste ${Math.abs(movement)} $ de tu cuenta - MOVIMIENTO N?? ${i + 1}`
    );
  }
}

// De manera m??s ??PTIMA Y SENCILLA
console.log('***** con forEach() ******');
movements.forEach(function (movement, index, array) {
  console.log(`Lista completa : ${[array]}`);
  if (movement > 0) {
    console.log(
      `Depositaste ${movement} $ en tu cuenta - MOVIMIENTO N?? ${index + 1}`
    );
  } else {
    console.log(
      `Retiraste ${Math.abs(movement)} $ de tu cuenta - MOVIMIENTO N?? ${
        index + 1
      }`
    );
  }
});

// const mySet = new Set();

// mySet.add(1);
// mySet.add(5);
// mySet.add('some text');

// console.log(mySet);

// Encadenamiento de metodos / CONVERTIR depositos de pesos a dolares
const dolarToUsd = 43;

// Analog??a - tuberia donde entran datos y salen los mismos pero con cambios
// map(element, index, array)     /    reduce(acc, element, index, array)
const depositsInUsd = movements
  .filter(mov => mov > 0)
  .map((mov, i, movimientos) => mov * dolarToUsd)
  .reduce((acc, mov, i, movimientos) => acc + mov);

/* 
en caso de llamar el array para buscar problemas no obtenemos el "array" inicial sino al
  que esta "encadenado"
*/

// CHALLENGE 3 , CALC AVERAGE HUMAN AGE

const calcAverageHumanAge = function (ages) {
  ages
    .map(age => (age <= 2 ? age * 2 : (age + 16) * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, index, array) => {
      acc + mov / array.length, 0;
    });
};
