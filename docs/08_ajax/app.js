async function removeProduct(id) {
    let response = await fetch(`?id=${id}`, { method: 'DELETE' });

    if (response.status === 200) {
        removeProductElement(id);
    } else {
        alert(`Ajax call failed. Please check the console. Error code ${response.status}`);
        console.log(response);
    }
}

function removeProductElement(id) {
    let elementId = `product-${id}`;
    let element = document.getElementById(elementId);

    if (element) {
        element.remove();
    } else {
        alert(`Could not find element by id "${elementId}"`);
    }
}