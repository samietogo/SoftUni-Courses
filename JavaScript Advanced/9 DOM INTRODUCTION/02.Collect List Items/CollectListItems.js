function extractText() {
    let liElements = document.querySelectorAll('li');
    let elementText = [...liElements].map(e => e.textContent);
    const textArea = document.getElementById('result');
    textArea.value = elementText.join('\n');
}