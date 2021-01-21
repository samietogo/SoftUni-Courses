function extract(id) {
    const text = document.getElementById(id).textContent;
    const regex = /\((.+?)\)/gm;
    let match = regex.exec(text);
    let result = '';
    while(match != null) {
        // console.log(match[1]);
        result += match + '; ';
        match = regex.exec(text);
    }
    return result;
}