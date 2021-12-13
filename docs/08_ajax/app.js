/**
 * Poistaa annettua id:tä vastaavan ostoslistan rivin palvelimelta, ja jos poisto
 * onnistuu, poistaa myös poistetun tuoterivin sivulta.
 *
 * @param {number} productId Poistettavan tuoterivin id
 */
async function removeProduct(productId) {
    let success = await removeFromServer(productId);

    if (success) {
        removeFromPage(productId);
    }
}

/**
 * Tekee DELETE-tyyppisen palvelinkutsun, jossa annettua id:tä vastaava ostoslistan rivi
 * poistetaan tietokannasta. Palauttaa true tai false riippuen siitä, onnistuiko poisto.
 *
 * @param {number} productId Poistettavan tuoterivin id
 * @return {boolean} true, mikäli poisto onnistui
 */
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

/**
 * Etsii sivulta annettua id:tä vastaavan ostoslistan rivin ja poistaa sen sivulta, 
 * mikäli poistettava rivi löytyi. Palauttaa true tai false riippuen siitä, onnistuiko operaatio.
 * 
 * @param {number} productId Poistettavan tuoterivin id
 * @return {boolean} true, mikäli poisto onnistui
 */
function removeFromPage(productId) {
    let elementId = `product-${productId}`;
    let element = document.getElementById(elementId);

    if (element !== null) {
        element.remove();
        return true;
    } else {
        alert(`Could not find element by id "${elementId}"`);
        return false;
    }
}