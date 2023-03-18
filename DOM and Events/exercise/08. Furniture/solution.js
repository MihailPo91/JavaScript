function solve() {
  const [generateTextArea, buyTextArea] = Array.from(document.getElementsByTagName('textarea'));
  const [generateButton, buyButton] = Array.from(document.getElementsByTagName('button'));
  const tbody = document.querySelector('.table > tbody');

  generateButton.addEventListener('click', generateHandler);
  buyButton.addEventListener('click', buyHandler);

  function generateHandler() {
    const data = JSON.parse(generateTextArea.value);
    for (const { img, name, price, decFactor } of data) {
      const tableRow = createElement('tr', '', tbody);
      const firstColumnTd = createElement('td', '', tableRow);
      createElement('img', '', firstColumnTd, '', '', { src: img });
      const secondColumnTd = createElement('td', '', tableRow);
      createElement('p', name, secondColumnTd);
      const thirdColumnTd = createElement('td', '', tableRow);
      createElement('p', price, thirdColumnTd);
      const fourthColumnTd = createElement('td', '', tableRow);
      createElement('p', decFactor, fourthColumnTd);
      const fifthColumnTd = createElement('td', '', tableRow);
      createElement('input', '', fifthColumnTd, '', '', { type: 'checkbox' })
    }
  }


  function buyHandler() {
    const checkedInputs = Array.from(document.querySelectorAll('tbody tr input:checked'));
    console.log(checkedInputs);
    let boughtItems = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    for (const input of checkedInputs) {
      const tableRow = input.parentElement.parentElement;
      const [firstColumn, secondColumn, thirdColumn, fourthColumn] = Array.from(tableRow.children);
      let itemName = secondColumn.children[0].textContent;
      boughtItems.push(itemName);
      let itemPrice = Number(thirdColumn.children[0].textContent);
      totalPrice += itemPrice;
      let itemDecFactor = Number(fourthColumn.children[0].textContent);
      totalDecFactor += itemDecFactor;


    }

    buyTextArea.value += `Bought furniture: ${boughtItems.join(', ')}\n`;
    buyTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    buyTextArea.value += `Average decoration factor: ${totalDecFactor / checkedInputs.length}`;
  }


  function createElement(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type);

    if (content && type !== 'input') {
      htmlElement.textContent = content;
    }

    if (content && type === 'input') {
      htmlElement.value = content;
    }

    if (id) {
      htmlElement.id = id;
    }

    if (classes) {
      htmlElement.classList.add(...classes);
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    return htmlElement;
  }
}



