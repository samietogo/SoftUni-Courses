function test1() {
    let text = 'Sami Etogo';
    let pattern = /[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+/;
    let containsValidName = pattern.test(text);    //true or false
    console.log(containsValidName);
}
// test1();

function test2() {
    let text = `Rebum et diam erat@lorem.sea voluptua justo
    nonumy et.sami.etogo@gmail.com Lorem dolor tempor dolor
    labore sed sea lorem. Ipsum et.`;
    let pattern = /\w+@\w+.\w+/g;
    let containsValidName = text.match(pattern);    //array with matches
    console.log(containsValidName);
}
// test2();

function test3() {
    let text = `I am born on 30-Dec-1994.
    My father is born on the 9-Jul-1955.
    01-July-2000 is not a valid date.`;
    let pattern = /\d{1,2}-(?<month>[A-Za-z]{3})-(?<year>\d{4})/g;
    let match = pattern.exec(text);    //array with first match
    while (match != null) {
        console.log(match);
        match = pattern.exec(text);
    }
}
// test3();

function test4() {
    let text = `+359356232722 My father is born on
    the +359888832722 is not a valid date +359665532722`;
    const pattern = /\+\d{12} /g;
    let containsValidName = text.match(pattern);    //array with matches
    console.log(containsValidName);
}
// test4();

function test5() {
    let text = 'Peter: 123 Mark: 456';
    let regex = /\d{3}/g;
    let result = text.replace(regex, 999);
    console.log(result);
}
// test5();

function matchFullName(arr) {
    let text = arr[0];
    let pattern = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+\b/g;
    let result = text.match(pattern);
    console.log(result.join(' '));
}

// matchFullName(["Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"]);

function matchPhoneNumber(arr) {
    let text = arr[0];
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let result = text.match(pattern);
    console.log(result.join(', '));
}

// matchPhoneNumber(["+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"]);

function matchDates(arr) {
    let text = arr[0];
    let pattern = /\b(?<day>\d{2})([\/\-\.])(?<month>[A-Z]{1}[a-z]{2})\2(?<year>\d{4})\b/g;
    while((match = pattern.exec(text)) != null) {
        let day = match.groups['day'];
        let month = match.groups['month'];
        let year = match.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

// matchDates(["13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"]);

function removeOcc(word, text) {
    let wordArr = word.split('').join(',');
    let pattern = new RegExp(`[^${wordArr}]`, `g`);
    let result = text.match(pattern);
    console.log(result.join(''));
}

removeOcc('ice', 'kicegiciceeb');