// Aggregate Elements
function solve(arr) {
    function sum(input) {
        let result = 0;
        for(let line of input) {
            result += line;
        }
        return result;
    }
    function sumInverse(input) {
        let result = 0;
        for(let line of input) {
            result += (1 / line);
        }
        return result;
    }
    function concat(input) {
        let result = '';
        for(let line of input) {
            result += line.toString();
        }
        return result;
    }
    console.log(sum(arr) + '\n' + sumInverse(arr) + '\n' + concat(arr));
}

solve([2, 4, 8, 16]);