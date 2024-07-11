function calculateVolume() {
    const form = document.querySelector('#myForm');
    let radius = form.querySelector('#radius').value;
    const volumeField = form.querySelector('#volume');

    radius = parseFloat(radius);

    const volume = (4/3) * Math.PI * Math.pow(radius, 3);

    volumeField.value = volume.toFixed(4);
}