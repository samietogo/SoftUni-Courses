function test1(arr) {
    arr.push(5);
    console.log(arr); //[1, 2, 3, 4, 5]
}

// test1([1, 2, 3, 4]);

function test2(arr) {
    console.log(arr.includes(3)); //true
}

// test2([1, 2, 3, 4]);

function test3(arr) {
    console.log(arr.join(' - ')); //1 - 2 - 3 - 4
    console.log(arr.join('\n'));
}

// test3([1, 2, 3, 4]);

function test4(arr){
    let print = '';

    for(let num of arr) {
        print += `${num} `;
    }

    console.log(print);

}

// test4([1, 2, 3, 4, 5]);

function firstLast(arr) {
    let first = arr[0];
    let last = arr[arr.length - 1];
    let sum = first + last;
    console.log(sum);
}

//firstLast([20, 30, 40]);

function days(num) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num > 0 && num <= 7) {
        console.log(days[num - 1]);
    } else {
        console.log(`Invalid day!`);
    }
}

// days(2);

function reverseNumbers(n, arr) {
    let str = '';

    for (let i = n - 1; i >= 0; i--) {
        let current = arr[i];
        str += current + ' ';
    }
    console.log(str);
}

// reverseNumbers(2, [66, 43, 75, 89, 47]);

function reverseNumbers2(n, arr) {
    console.log(arr.slice(0,n).reverse().join(' '));
}

// reverseNumbers2(2, [66, 43, 75, 89, 47]);

function reverseStrings(arr) {
    let reversedStr = arr.reverse();
    console.log(reversedStr.join(' '));
}

// reverseStrings(['a', 'b', 'c', 'd', 'e']);

function reverseStrings2(arr) {

    for(let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - (i + 1)]
        arr[arr.length - (i + 1)] = temp;
    }
    console.log(arr.join(' '));
}

// reverseStrings2(['a', 'b', 'c', 'd', 'e']);

function sumEven(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);

        if (num % 2 == 0) {
            sum += num;
        }
    }

    console.log(sum);
}

// sumEven(['1','2','3','4','5','6']);

function evenOddSubstraction(arr) {
    let sum = 0;
    let even = 0;
    let odd = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);

        if (num % 2 == 0) {
            even += num;
        } else {
            odd += num;
        }
    }
    sum = even - odd;
    console.log(sum);
}

// evenOddSubstraction([3,5,7,9]);

function equalArrays(arr1, arr2) {
    let sum = 0;
    let isIdentical = true;

    for (let i = 0; i < arr1.length; i++) {
        let indexArr1 = Number(arr1[i]);
        let indexArr2 = Number(arr2[i]);

        if (indexArr1 == indexArr2) {
            sum += indexArr1;
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isIdentical = false;
            break;
        }
    }
    if (isIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

// equalArrays(['10','20','30'], ['10','20','30']);

function condenseArrToNum(arr) {

    while(arr.length > 1) {
        let arrCond = [arr.length - 1];

        for(let i = 0; i < arr.length - 1; i ++) {
            arrCond[i] = Number(arr[i]) + Number(arr[i + 1]);
        }
        arr = arrCond;
    }
    console.log(arr[0]);
}

// condenseArrToNum([5,0,4,1,2]);
