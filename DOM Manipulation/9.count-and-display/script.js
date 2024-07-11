function getOptions() {
    const selectElement = document.querySelector('#mySelect');
    const optionsCount = selectElement.length;

    const allOptions = selectElement.options;

    let options = '';

    for (let i = 0; i < allOptions.length; i++) {
        options += allOptions[i].textContent + ', ';
    }

    alert(`The number of options are ${optionsCount} and they are ${options}`);
}