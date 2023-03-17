function solve() {
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  let sentences = input.value.split('.');
  sentences.pop();

  while (sentences.length > 0) {
    let paragraphText = sentences.splice(0, 3)
      .map((p) => p.trimStart());

    const newParagraph = document.createElement('p');
    newParagraph.textContent = paragraphText.join('.') + '.';
    output.appendChild(newParagraph);
  }

}


