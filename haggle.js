let elements = document.getElementsByClassName("is-size-3");

// I barely know js just saying
// This will hold the element with the price
let elem = undefined;

// We go over all the elements with it to find one that has "EC" in it.
// I'm doing this even though the page only has one currently in case they update it.
for (let i = 0; i < elements.length; i++) {
    if (elements[i].innerText.endsWith("EC")) {
    elem = elements[i];
    break;
    }
}

// rip
if (elem === undefined) {
    console.log("Couldn't find the price.");
}
else {
    // Convert to a number, js will ignore anything that isn't [0-9.]
    let oldprice = parseFloat(elem.innerText.replace(",",""));

    // Amey math
    let price = Math.ceil(oldprice * 0.96);

    // Update with the new price
    elem.innerText = `${price.toLocaleString()} EC`;

    // Leave a note
    elem.insertAdjacentHTML(
        "afterend",
        `<span style="color: mediumpurple; margin-left: 2%;">(adjusted from ${oldprice.toLocaleString()})</span>`,
    );
}