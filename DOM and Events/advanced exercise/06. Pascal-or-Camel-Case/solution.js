function solve() {
  const input = document.getElementById('text').value;
  const currentCase = document.getElementById('naming-convention').value;
  resultSpan = document.getElementById('result');

  let words = input.split(' ').map((word) => word.toLowerCase());

  if (currentCase === 'Camel Case') {
    let output = words[0];
    for (let i = 1; i < words.length; i++) {
      output += capitalizeFirstLetter(words[i]);
    }
    resultSpan.textContent = output;
  } else if (currentCase === 'Pascal Case') {
    output = '';
    words.forEach(word => {
      output += capitalizeFirstLetter(word);
    });
    resultSpan.textContent = output;
  } else {
    resultSpan.textContent = 'Error!'
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}