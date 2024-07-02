const allItemishElems = document.querySelectorAll(".is-block.has-text-black.has-tooltip-arrow");

// Initialize an array to hold the relevant elements
const validElems = [...allItemishElems].map(parent => {
    // Check for the image with tag 'img' and class 'black-border'
    const img = parent.querySelector('img.black-border');

    // Check for the first <strong> element
    const name = parent.querySelector('strong:first-of-type');

    // Check for the "# in stock" text with tag 'em' and class 'is-size-7'
    const stockNum = parent.querySelector('em.is-size-7');

    // Check for the <strong> element containing the price
    const priceElement = [...parent.querySelectorAll('strong')].find(el => el.textContent.trim().endsWith('EC'));


    // If all children exist (aren't "falsy"), return an object with references to the parent and the children
    if (img && name && stockNum && priceElement) {
        return { parent, priceElement };
    } else {
        // Return null for non-matching elements
        return null;
    }
}).filter(item => item !== null); // Filter out the null entries

// Example of editing the children
validElems.forEach(({ parent, priceElement }) => {
    // Convert to a number, js will ignore anything that isn't [0-9.]
    let youHave = parseFloat(parent.getAttribute('data-tooltip').replace('You Have: ', ''));
    // Convert to a number, js will ignore anything that isn't [0-9.]
    let price = parseFloat(priceElement.innerText.replace(',', ''));

    if (youHave === 0) {
        parent.parentElement.style.backgroundColor = '#ff000020';
    }
    else if (youHave < 2 && price < 3000) {
        parent.parentElement.style.backgroundColor = '#ff850020';
    }
    else if (youHave < 2) {
        parent.parentElement.style.backgroundColor = '#ffff0020';
    }
    else if (youHave < 4 && price < 1000) {
        parent.parentElement.style.backgroundColor = '#00ff0020';
    }
});
