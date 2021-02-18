let arr1 = [];
randomArray(arr1);
console.log(`unsorted random array`);
console.log(arr1);
console.log(`same but sorted with 'for' array`);
bobbleSortFor(arr1);
console.log(arr1);

let arr2 = [];
randomArray(arr2, 100)
console.log(`unsorted random array`);
console.log(arr2);
bobbleSortWhile(arr2)
console.log(`same but sorted with 'while' array`);
console.log(arr1);













function randomArray(array, length = 10) {
    for (i = 0; i < length; i++) {
        array.push(Math.round(Math.random() * 200) - 100)
    }
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

function bobbleSortWhile(array) {
    let n = 0;
    let i = 0;
    while (n < array.length) {
        while (i < array.length - 1 - n) {
            if (array[i] > array[i + 1]) {
                const buff = array[i]
                array[i] = array[i + 1]
                array[i + 1] = buff
            }
            i++;
        }
        n++;
    }
}