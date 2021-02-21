console.clear();

let array0 = [];
let compearArray = [];
let compearArray1 = [];

randomArray(array0);
compearArray = compearArray1 = array0;
console.log('begin');
console.log(array0);
bobbleSortFor(array0);
console.log('sorted by FOR');
console.log(array0);
bobbleSortWhile(compearArray, 0, 0);
console.log('sorted by WHILE');

console.log(compearArray);
array0 === compearArray ? console.log('compairsom passed') : console.log('U loose');
console.log();
bobbleSortDoWhile(compearArray1);
console.log('sorted by DO WHILE');
console.log(compearArray1);
array0 === compearArray1 ? console.log('compairsom passed') : console.log('U loose');



function randomArray(array, length = 11) {
    for (i = 0; i < length; i++) {
        array.push(Math.round(Math.random() * 2000) - 1000)
    }
}

function bob(array) {
    array.sort(function(a, b) {
        return a - b;
    })
    return array
}

function bobbleSortFor(array) {
    for (let n = 0; n < array.length; n++) {
        for (let i = 0; i < array.length - 1 - n; i++) {
            if (array[i] > array[i + 1]) {
                const buff = array[i]
                array[i] = array[i + 1]
                array[i + 1] = buff
            }
        }
    }
}

function bobbleSortWhile(array, n = 0, i = 0) {
    while (n < array.length) {
        while (i < array.length - n) {
            if (array[i] > array[i + 1]) {
                const buff = array[i]
                array[i] = array[i + 1]
                array[i + 1] = buff
            }
            ++i;
        }
        ++n;
    }
}

function bobbleSortDoWhile(array, i = 0, n = 0) {
    do {
        do {
            if (array[i] > array[i + 1]) {
                const buff = array[i]
                array[i] = array[i + 1]
                array[i + 1] = buff
            }
            i++
        } while (i < array.length - 1 - n)
        n++;
    } while (n < array.length - 1)
}