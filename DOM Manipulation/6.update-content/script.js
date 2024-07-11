function changeContent(row, cell, text) {
    const rowElement = document.querySelector(`tr:nth-of-type(${row})`);
    const cellElement = rowElement.children[cell];

    cellElement.textContent = text;
}