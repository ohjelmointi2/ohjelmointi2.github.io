async function removeProduct(productId) {
    let success = await removeFromServer(productId);

    if (success) {
        removeFromPage(productId);
    }
}

async function removeFromServer(productId) {
    let response = await fetch(`?id=${productId}`, { method: 'DELETE' });

    if (response.status === 200) {
        return true;
    } else {
        alert(`Ajax call failed. Please check the console. Error code ${response.status}.`);
        console.log(response);
        return false;
    }
}

function removeFromPage(productId) {
    let elementId = `product-${productId}`;
    let element = document.getElementById(elementId);

    if (element !== null) {
        element.remove();
    } else {
        alert(`Could not find element by id "${elementId}"`);
    }
}