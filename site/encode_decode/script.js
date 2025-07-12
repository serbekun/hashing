const symbols1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.?!- \n";

function getSymbols2() {
  return document.getElementById("symbolsInput").value;
}

function doEncode() {
  const input = document.getElementById("inputText").value;
  const symbols2 = getSymbols2();
  if (symbols2.length !== symbols1.length) {
    alert("Please enter a valid symbols2 table!");
    return;
  }
  let out = "";
  for (let ch of input) {
    const idx = symbols1.indexOf(ch);
    out += (idx !== -1) ? symbols2[idx] : ch;
  }
  document.getElementById("outputText").textContent = out;
}

function doDecode() {
  const input = document.getElementById("inputText").value;
  const symbols2 = getSymbols2();
  if (symbols2.length !== symbols1.length) {
    alert("Please enter a valid symbols2 table!");
    return;
  }
  let out = "";
  for (let ch of input) {
    const idx = symbols2.indexOf(ch);
    out += (idx !== -1) ? symbols1[idx] : ch;
  }
  document.getElementById("outputText").textContent = out;
}

function copyResult() {
  const output = document.getElementById("outputText").textContent;
  if (!output) {
    alert("There's no result to copy!");
    return;
  }
  navigator.clipboard.writeText(output)
    .then(() => alert("Result copied to clipboard!"))
    .catch(err => alert("Copy failed: " + err));
}

function copyInput() {
  const input = document.getElementById("inputText").value;
  if (!input) {
    alert("There's no input to copy!");
    return;
  }
  navigator.clipboard.writeText(input)
    .then(() => alert("Input text copied!"))
    .catch(err => alert("Copy failed: " + err));
}