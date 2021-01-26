function deleteByEmail() {
    const mail = document.querySelector('input[name="email"]').value;
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    let deleted = false;
    for(let row of rows) {
        if(row.children[1].textContent == mail) {
            row.parentNode.removeChild(row);
            deleted = true;
            document.getElementById('result').textContent = 'Deleted.';
        }
    }
    if(deleted != true) {
        document.getElementById('result').textContent = 'Not found.';
    }
}