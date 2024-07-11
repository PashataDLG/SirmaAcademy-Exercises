function removecolor() {
    const selectElement = document.querySelector('#colorSelect');
    const selectedIndex = selectElement.selectedIndex

    selectElement.remove(selectedIndex);
}