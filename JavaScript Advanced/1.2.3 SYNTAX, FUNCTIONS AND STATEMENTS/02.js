// String Length
function strLength(arg1, arg2, arg3) {
    let arr = [arg1, arg2, arg3];
    let counter = 0;
    for(let line of arr) {
        counter += line.length;
    }
    console.log(counter);
    console.log(Math.floor(counter / 3));
}

strLength('chocolate', 'ice cream', 'cake');