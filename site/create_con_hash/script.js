const symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.?!- \n";

function initArrayWithNumber() {
    const charToCode = {};
    for (let i = 0; i < symbols.length; i++) {
        const char = symbols[i];
        charToCode[char] = i.toString().padStart(2, '0');
    }
    return charToCode;
}

function genSeed(s, charToCode) {
    let seed = '';
    for (const char of s) {
        seed += charToCode[char] || '00';
    }
    return seed;
}

function createNewHash(seed) {
    let total = seed ? BigInt(seed) : 0n;
    const arr = Array.from(symbols);
    const n = arr.length;
    
    if (n === 0) return "";

    const a = 1664525n;
    const c = 1013904223n;
    const m = 2n**32n;

    for (let i = n - 1; i > 0; i--) {
        total = (a * total + c) % m;

        const r = Number(total % BigInt(i + 1));
        [arr[i], arr[r]] = [arr[r], arr[i]];
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '\n') {
            arr[i] = '@';
        }
    }
    
    return arr.join('');
}

function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent.replace(/^Generated seed: |^New hash: /, '');
    
    navigator.clipboard.writeText(text).then(() => {
        const originalText = element.textContent;
        element.textContent += " (Copied!)";
        setTimeout(() => {
            element.textContent = originalText;
        }, 1000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

function generateHash() {
    const charToCode = initArrayWithNumber();
    const oldHash = document.getElementById('oldHash').value;
    
    const seed = genSeed(oldHash, charToCode);
    document.getElementById('seedOutput').textContent = `Generated seed: ${seed}`;
    
    const newHash = createNewHash(seed);
    document.getElementById('hashOutput').textContent = `New hash: ${newHash}`;
}

function generateHashFromSeed() {
    const manualSeed = document.getElementById('manualSeed').value;
    document.getElementById('seedOutput').textContent = `Generated seed: ${manualSeed}`;
    
    const newHash = createNewHash(manualSeed);
    document.getElementById('hashOutput').textContent = `New hash: ${newHash}`;
}