function checkVowels() {
    const inputText = document.getElementById('inputText').value;
    const vowels = /[aeiouAEIOU]/g; // Regular expression to match vowels
    const foundVowels = inputText.match(vowels);
    
    const resultElement = document.getElementById('result');
    
    if (foundVowels) {
        const uniqueVowels = [...new Set(foundVowels)]; // Get unique vowels
        resultElement.innerText = `Vowels found: ${uniqueVowels.join(', ')}`;
    } else {
        resultElement.innerText = "No vowels found.";
    }
}
