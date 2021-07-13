'use strict';

//******************* FIRST EXERCISE ******************//
const firstExercise = document.getElementById('firstExercise');
const boxes = document.querySelectorAll('section > div');
for (const item of boxes) {
    item.addEventListener('click', function () {
        firstExercise.append(this);
        if (this.style.backgroundColor === 'blue') {
            this.style.backgroundColor = 'green';
        } else if (this.style.backgroundColor === 'green') {
            this.style.backgroundColor = 'yellow';
        } else {
            this.style.backgroundColor = 'blue';
        }
    });
}

//******************* SECOND EXERCISE ******************//

const MIN = 1;
const MAX = 100;
const NUM_OF_COLUMNS = 3;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const $table = document.createElement('table');
for (let i = 0; i < NUM_OF_COLUMNS; i++) {
    const $tr = document.createElement('tr');
    for (let j = 0; j < NUM_OF_COLUMNS; j++) {
        const $td = document.createElement('td');
        $td.textContent = getRandomNumber(MIN, MAX);
        $tr.innerHTML += $td.outerHTML;
    }
    $table.innerHTML += $tr.outerHTML;
}
firstExercise.after($table);

const $currentValue = document.createElement('p');
$table.after($currentValue);

//******** delegation **********/

$table.addEventListener('click', e => {
    if (e.target !== e.currentTarget) {
        $currentValue.textContent = e.target.innerHTML;
    }
});

//******************* THIRD EXERCISE ******************//

const NO_MATCHES = -1;
const COUNT_OF_ELEMENTS = 1;
const $par = document.getElementById('par');

function myToggleClass(elem, classOfElem) {
    const arrOfClasses = elem.className.split(' ');
    const matches = arrOfClasses.findIndex(item => item === classOfElem);
    if (matches === NO_MATCHES) {
        arrOfClasses.push(classOfElem);
        elem.className = arrOfClasses.join(' ');
    } else {
        arrOfClasses.splice(matches, COUNT_OF_ELEMENTS);
        elem.className = arrOfClasses.join(' ');
    }
    return elem;
}

myToggleClass($par, 'border'); // + border
myToggleClass($par, 'border'); //
myToggleClass($par, 'border'); // + border
myToggleClass($par, 'border'); //
myToggleClass($par, 'border'); // + border
myToggleClass($par, 'QWERTY'); // ++ QWERTY
// console.log(par.className);
