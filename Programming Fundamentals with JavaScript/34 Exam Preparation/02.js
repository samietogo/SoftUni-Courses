function solve(arr) {
    let emojiPattern = /(::|\*\*)[A-Z][a-z]{2,}\1/g;
    let emojiArrInput = arr[0].match(emojiPattern);
    let emojiArr = [];
    let count = 0;
    for(let line of emojiArrInput) {
        let sum = 0;
        for(let i = 2; i <= line.length - 3; i++) {
            let charNum = line[i].charCodeAt(0);
            sum += charNum;
        }
        emojiArr.push([line, sum]);
        count++;
    }
    let digitsPattern = /\d/g;
    let digitArrInput = arr[0].match(digitsPattern);
    let coolThreshold = 1;
    for(let d of digitArrInput) {
        coolThreshold *= Number(d);
    }
    console.log(`Cool threshold: ${coolThreshold}`);
    if(count != 0) {
        console.log(`${count} emojis found in the text. The cool ones are:`);
        for(let line of emojiArr) {
            if(line[1] > coolThreshold) {
                console.log(`${line[0]}`);
            }
        }
    }
}

// solve(['In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**']);
// solve(['5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::']);
solve(['It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using \'Content here, content 99 here\', making it look like readable **English**.']);
