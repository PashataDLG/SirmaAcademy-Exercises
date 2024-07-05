function getAttributes () {
    const linkElement = document.querySelector('#someId');

    const href = linkElement.getAttribute('href');
    const hreflang = linkElement.getAttribute('hreflang');
    const type = linkElement.getAttribute('type');
    const rel = linkElement.getAttribute('rel');
    const target = linkElement.getAttribute('target');

    console.log(`${href} ${hreflang} ${type} ${rel} ${target}`);
}