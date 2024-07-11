function createTable(rowNumber, cellNumber, cellContent) {
    const table = document.querySelector('#myTable');

    const newRow = document.createElement('tr');
    const newCell = document.createElement('td');

    newCell.textContent = cellContent;

    newRow.appendChild(newCell);

    if (table.rows.length >= 2) {
        table.insertBefore(newRow, table.rows[1]);
    } else {
        table.appendChild(newRow);
    }
}