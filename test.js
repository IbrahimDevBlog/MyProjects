'use strict';

/*let admin, name1;

name1 = 'Джон';

admin = name1;

alert(`Hello, ${admin}`);
*/
/*let age = prompt('Сколько тебе лет?');

alert(`Тебе ${age} лет!`);

let isMain = confirm('It`s main page?');
alert(isMain);

alert(Number(true));
*/
/*
let aplle = "5";
let banan = "5";
alert(+aplle + +banan);
*/
/*

// Использование ?
let year = prompt('How old are you?')

let message = (year < 18) ? 'Not today' :
    (year <= 50) ? 'Go sex' :
    'Too old for me';

alert (message);
*/
//link to Gigor
/*
if (confirm("Перейти на стрим Гигоря?")) {
  location.href = "https://www.twitch.tv/gydrate"; // перенаправляет браузер на другой URL
  
}
alert ('Приятного просмотра!')
*/

//Бесконечный(не) калькулятор

/*
let sum = 0;

while (true) {
    let value = +prompt('Enter a value', '');
    if (!value) break;
    sum += value;
}

alert(sum);
*/
/*
outer: 
for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Значение на координатах (${i},${j})`, '');
      if (!input) break outer;
        
   
    }
  }
  
  alert('Готово!');
  */


  //switch
  /*
  switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  } */

//Функция, показывает время без обновления

  /*
  function showTime() {
    let d = new Date();
    let n = d.toLocaleTimeString();
    alert(''+n);
  }

  showTime();
  */
/*
  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Отмена."); } 
  );
*/

//стрелочные функции
/*
   let ask = (question, yes, no) => {
    if ( confirm(question) ) yes();
    else no();
   }

  ask(
    "Вы согласны?",
    () => alert("Вы согласились."), 
    () => alert("Отмена.")
  );
*/

//объекты
/*
let user = {
  name: "John",
  age: 30,
  job: 'taxi driver',
  "family status": 'not married',
};

let key = prompt("Что вы хотите узнать о пользователе?", "");

alert( user[key] );
*/

/*
let testObject = {
  name: 'Ra'
};

alert( 'Ra' in testObject );
*/
//Enum of properties and values
/*
let user = {
  name: "John",
  age: 30,
  job: 'taxi driver',
  "family status": 'not married',
  isAdmin: false,
};

for (let key in user) {
  alert(key);
  alert( user[key] );
}
*/
/*
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;
for(let prop in salaries) {
  sum += salaries[prop]
}

alert(sum)*/

/*
function multiplyNumeric(obj) {
  for(let prop in obj) {
    if( typeof( obj[key] ) == 'number') {
      obj[key] *= 2;
    }
  }
}
*/
/*
let user = { name: 'Alex' };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2);

alert(user.canEdit);*/


//Глубокое клонирование с использованием JSON
/*
let obj = { 
  name: 'alex',
  sizes: {
    weiht: 51,
    height: 151,
  }
};
  let clone = JSON.parse(JSON.stringify(obj))

alert( clone.sizes === obj.sizes);

clone.sizes.weiht++;

alert( obj.sizes.weiht);
*/


/*Функция marry «женит» два объекта, 
давая им ссылки друг на друга, и возвращает 
новый объект, содержащий ссылки на два предыдущих.

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    fatрer: man,
    mother: woman
  }
}

let family = marry({
  name: "John"
}, {
  name: "Ann"
});
*/

//metods

/*
let user = {
  name: "John",
  age: 30,
  sayHi() {
    alert("Привет!");
  },
  
};
*/


/*
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();
*/


/*
let calculator = {
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt('first value',0);
    this.b = +prompt('second value',0);
  },

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/
/*
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};

ladder
    .up()
    .up()
    .down()
    .showStep()
    .down()
    .showStep();
    */

//такая хуйня пиздец, функция на функции функцией погоняет, синтаксис говно непонятное
/*   
    function User(name) {
      this.name = name;
    
      this.sayHi = function() {
        alert( "Меня зовут: " + this.name );
      };
    }
    let alex = new User('Alex');
    alex.sayHi();
*/

//ладно +- понятно теперь
/*
function Calculator() {
  this.read = function() {
    this.a = +prompt('a',0);
    this.b = +prompt('b',0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

//уже намного понятнее, прогресс


function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('enter value', 0);
  }
}

let accumulator = new Accumulator(0);

accumulator.read();
accumulator.read();

alert(accumulator.value);



/*
let user = {
  name: 'Alex',
  age: 30,
  adress: {
    street: 'Pushkina',
    home: 'Kolotushkina'
  },
}

alert(user.adress?.street);*/
/*
let user = null;

alert(user?.adress?.street); //undefined
*/