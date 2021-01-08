function printChar(str) {
    for (let line of str) {
        console.log(line);
    }
}

// printChar('AWord');

function substring(str, start, count) {
    console.log(str.substring(start, start + count));
}

// substring("ASentance", 1, 8);

function censoredWords(text, word) {
    let result = text.split(word).join('*'.repeat(word.length));
    console.log(result);
}

// censoredWords("A small sentence with some words", "small");

function censoredWords2(text, word) {
    let start = text.indexOf(word);
    while (start != -1) {
        let first = text.substring(0, start);
        let second = text.substring(start + word.length);
        text = first + '*'.repeat(word.length) + second;
        start = text.indexOf(word);
    }
    console.log(text);
}

// censoredWords2("A small sentence with some words", "small");

function stringCount(text, word) {
    let newWord = ` ${word} `;
    let found = text.indexOf(newWord);
    let count = 0;
    while (found != -1) {
        found = text.indexOf(newWord, found + 1);
        count++;
    }
    if (text.startsWith(word)) {
        count++;
    }
    if (text.endsWith(word)) {
        count++;
    }
    console.log(count);
}

// stringCount("is This is a word and it also is a sentence", "is");

function stringCount(text, word) {
    console.log(text.split(' ').filter(x => x == word).length);
}

// stringCount("is This is a word and it also is a sentence", "is");