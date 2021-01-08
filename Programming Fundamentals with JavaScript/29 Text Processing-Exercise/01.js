function revealWords(words, sentence) {
    let wordsArr = words.split(', ');
    for (let line of wordsArr) {
        let currentSearch = '*'.repeat(line.length);
        let replaced = sentence.replace(currentSearch, line);
        sentence = replaced;
    }
    console.log(sentence);
}

// revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');

function modernTimes(str) {
    let srtArr = str.split(' ').filter(x => x[0] == '#' && x.length > 1);
    let isBreak = false;
    for (let line of srtArr) {
        let result = line.replace('#', '');
        for (let char of result) {
            isBreak = false;
            if (char.charCodeAt() < 65 || (char.charCodeAt() > 90 && char.charCodeAt() < 97) || char.charCodeAt() > 122) {
                isBreak = true;
                break;
            }
        }
        if (!isBreak) {
            console.log(result);
        }
    }
}

// modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');

function extractFile(str) {
    let file = str.split('\\').pop();
    let tuple = file.split('.');
    if (tuple.length == 2) {
        console.log(`File name: ${tuple[0]}`);
        console.log(`File extension: ${tuple[1]}`);
    } else {
        let fileExt = tuple.pop();
        console.log(`File name: ${tuple.join('.')}`);
        console.log(`File extension: ${fileExt}`);
    }
}

// extractFile('C:\\Internal\\training-internal\\Template.cs.bak.pptx');

function stringSubstring(str, text) {
    let txtArr = text.split(' ').map(x => x.toLowerCase()).filter(x => x == str.toLowerCase());
    if (txtArr.length == 0) {
        console.log(`${str} not found!`);
    } else {
        console.log(str);
    }
}

// stringSubstring('python', 'JavaScript is the best programming language');

function repeatingChars(str) {
    let strArr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] != str[i + 1]) {
            strArr.push(str[i]);
        }
    }
    console.log(strArr.join(''));
}

// repeatingChars('qqqwerqwecccwd');

function splitter(str) {
    let strArr = [];
    let counter = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        counter++;
        if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
            let current = str.substring(i, counter + i);
            strArr.unshift(current);
            counter = 0;
        }
    }
    console.log(strArr.join(', '));
}

// splitter('SplitMeIfYouCanHaHaYouCantOrYouCan');

function cutAndReverse(str) {
    let first = str.substring(0, str.length / 2).split('').reverse().join('');
    let second = str.substring(str.length / 2).split('').reverse().join('');
    console.log(first);
    console.log(second);
}

// cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');

function hardWords(arr) {
    let sentance = arr.shift();
    let wordsArr = arr.shift();
    let start = sentance.indexOf('_');
    while (start != -1) {
        let count = 0;
        for (let i = start; i < sentance.length; i++) {
            count++;
            if (sentance[i + 1] != '_') {
                let current = sentance.replace('_'.repeat(count), findStr(count));
                sentance = current;
                break;
            }
        }
        start = sentance.indexOf('_');
    }
    function findStr(a) {
        for (let line of wordsArr) {
            if (line.length == a) {
                return line;
            }
        }
    }
    console.log(sentance);
}

// hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
//     ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);

function passwordGen(arr) {
    let pass = arr[0] + arr[1];
    let passArr = pass.split('');
    let word = arr[2];
    let j = 0;
    for (let i = 0; i < passArr.length; i++) {
        let currentChar = passArr[i];
        if (currentChar.charCodeAt() == 97 || currentChar.charCodeAt() == 101 || currentChar.charCodeAt() == 105 || currentChar.charCodeAt() == 111 || currentChar.charCodeAt() == 117) {
            passArr[i] = word[j].toUpperCase();
            if (j == word.length - 1) {
                j = 0;
            } else {
                j++;
            }
        }
    }
    console.log(`Your generated password is ${passArr.reverse().join('')}`);
}

// passwordGen(['ilovepizza', 'ihatevegetables', 'orange']);

function lettersChangeNumbers(str) {
    let arr = str.split(' ').filter(x => x != '');
    let result = 0;
    for (let line of arr) {
        let sum = 0;
        let lineArr = line.split('');
        let first = lineArr.shift();
        let second = lineArr.pop();
        let num = '';
        for (let n of lineArr) {
            num += n;
        }
        num = Number(num);
        if (whatCase(first) == 1) {
            sum = num / findNum(first);
        } else {
            sum = num * findNum(first);
        }
        if (whatCase(second) == 1) {
            sum -= findNum(second);
        } else {
            sum += findNum(second);
        }
        result += sum;
    }
    console.log(result.toFixed(2));

    function findNum(x) {
        switch (x) {
            case 'A': return 1; case 'a': return 1; case 'B': return 2; case 'b': return 2;
            case 'C': return 3; case 'c': return 3; case 'D': return 4; case 'd': return 4;
            case 'E': return 5; case 'e': return 5; case 'F': return 6; case 'f': return 6;
            case 'G': return 7; case 'g': return 7; case 'H': return 8; case 'h': return 9;
            case 'I': return 9; case 'i': return 9; case 'J': return 10; case 'j': return 10;
            case 'K': return 11; case 'k': return 11; case 'L': return 12; case 'l': return 12;
            case 'M': return 13; case 'm': return 13; case 'N': return 14; case 'n': return 14;
            case 'O': return 15; case 'o': return 15; case 'P': return 16; case 'p': return 16;
            case 'Q': return 17; case 'q': return 17; case 'R': return 18; case 'r': return 18;
            case 'S': return 19; case 's': return 19; case 'T': return 20; case 't': return 20;
            case 'U': return 21; case 'u': return 21; case 'V': return 22; case 'v': return 22;
            case 'W': return 23; case 'w': return 23; case 'X': return 24; case 'x': return 24;
            case 'Y': return 25; case 'y': return 25; case 'Z': return 26; case 'z': return 26;
        }
    }

    function whatCase(x) {
        if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {  //UpperCase
            return 1;
        } else {  //lowerCase
            return 0;
        }
    }
}

lettersChangeNumbers('P34562Z q2576f   H456z');