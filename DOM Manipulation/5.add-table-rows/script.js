function insertRow() {
    const tableElement = document.querySelector('#sampleTable > tbody');

    const rowCount = tableElement.children.length;

    const newRow = document.createElement('tr');
    const newTd1 = document.createElement('td');
    const newTd2 = document.createElement('td');

    newTd1.textContent = `Row${rowCount + 1} cell1`;
    newTd2.textContent = `Row${rowCount + 1} cell2`;

    newRow.appendChild(newTd1);
    newRow.appendChild(newTd2);

    tableElement.appendChild(newRow);
}