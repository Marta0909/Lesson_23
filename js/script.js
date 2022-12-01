"use strict"

let someString = `Курс по Java Script`;
console.log(someString.length);

let someString1 = `Курс по Java Script`;
console.log(someString1[2]);

let someString2 = `Курс по Java Script`;
console.log(someString2.toUpperCase());

let someString3 = `Курс по Java Script`;
console.log(someString3.toLowerCase());

let someString4 = `Курс по Java Script`;
console.log(someString4.includes('j'));

let someString5 = `Курс по Java Script`;
let someString5Lower = someString5.toLowerCase();
console.log(someString5Lower);
console.log(someString5Lower.includes('j'));
console.log(someString5.startsWith('К'));

let someString6 = `Курс по Java Script`;
let someNewString = someString6.slice(0, 4);
console.log(someNewString);

let someString7 = `Курс по Java Script`;
someString7 = someString7.replace('Курс', 'Лекції');
console.log(someString7);

let someNum = 25.2;
console.log(Math.floor(someNum));

let someNum1 = 25.2;
console.log(Math.ceil(someNum1));

let someNum2 = 25.5;
console.log(Math.round(someNum2));

let someNum3 = -25.5;
console.log(Math.abs(someNum3));

console.log(Math.random());

console.log(Math.max(1, 3, 7));
console.log(Math.min(1, 3, 7));

let someVar = `123.9`;
console.log(parseInt(someVar));
console.log(parseFloat(someVar));

let varOne = 10;
let varTwo = 2;
let varSumm = varOne - varTwo;
console.log(varSumm);

let numOne = "50";
let numTwo = 3;
let varSumm1 = numOne + numTwo;
console.log(varSumm1);

let numOne1 = "50";
let numTwo1 = 3;
let varSumm2 = +numOne1 + numTwo1;
console.log(varSumm2);

let someNumber1 = 6;
let someNumber2 = 3;
console.log(++someNumber1);
console.log(--someNumber2);

let result = 10 != 5;
console.log(result);

let result1 = 10 == 5;
console.log(result1);

let result2 = 1 <= 1;
console.log(result2);

let result3 = 6 == 6;
console.log(result3);

let result4 = 6 === "6";
console.log(result4);

let result5 = 0 || 5;
console.log(result5);

let result6 = 5 && 0;
console.log(result6);

let var5 = 5;
let var10 = 10;

if (var5 > var10) {
	let result15 = var5 + var10;
console.log(result15);
} else if (var5 === var10) {
	console.log('var5 = var10');
} else {
	console.log('else');
}

let someString11 = "Привіт!";
for (let i = 0; i < someString11.length; ++i) {
	console.log(someString11[i]);
}

console.log('35' + - "22");
console.log('35' * "22");
console.log('558' > 22);
console.log(!false && 11 || 18 && !'');

let name = 0;
console.log(name ?? "Без имени");

let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
console.log(message);

if (0) {
	console.log('Ложь!');
} else if (" ") {
	console.log('Истина!');
}

// Відео JS - Цикли FOR i WHILE   // задача 1 з while

let num = 1;
while (num < 6) {
	console.log(num);
	num++;
}

// задача 1 з for

for (let num = 1; num < 6; num++) {
	console.log(num);
}

// задача 2

let numm = 8;
while (numm) {
	console.log(numm);
	numm--;
}

// задача 3

//  задача 3 з for 
	
for (let nummm = 0; nummm < 3; nummm++) {
	console.log(`Число: ${nummm}`);
}

// задача 3 з while 

let num0 = 0;
while (num0 < 3) {
	console.log(`Число: ${num0}`);
	num0++;
}

// задача 4

for (let numM = 0; numM < 2; numM++) {
	for (let size = 0; size < 3; size++) {
		console.log(size);
	}
}

// задача 4. розв'язання

firstFor: for (let numM = 0; numM < 2; numM++) {
	for (let size = 0; size < 3; size++) {
		if (size == 1) {
			break firstFor;
		}
		console.log(size);
	}
}

//  Відео JS - Тип даних number.  // задача 1

let numOne2 = Math.round(1.005 * 100) / 100;
console.log(numOne2);

// задача 1. розв'язання

let numOne3 = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne3);

// задача 2. розв'язання

let value = parseFloat("135.58px");
console.log(value);

// задача 3.

let valuE = 58 + "Фрилансер";
if (isNaN(valuE)) {
	console.log('Результат виразу NaN');
}

// задача 4.

console.log(Math.max(10, 58, 39, -150, 0));

// задача 5.

let num22 = Math.floor(58.858);
console.log(num22);

//  Відео JS - Тип даних string.  // задача 2

let text = "фрилансер";
let symbol = text[5];
console.log(symbol);

// задача 4

let texT = "фрилансер";
console.log(texT.toUpperCase());

// задача 5

let text1 = "фрилансер";
console.log(text1.slice(3, 6));

// задача 6

let text2 = "фрилансер";
console.log(text2.includes('лан', 4));








