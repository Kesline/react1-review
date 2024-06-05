function addCommas(number) {
    // Convert number to string
    let numStr = String(number);
    
    // Split the string into integer and decimal parts
    let [integerPart, decimalPart] = numStr.split('.');

    // Add commas to the integer part
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Concatenate integer and decimal parts with a dot
    if (decimalPart !== undefined) {
        return integerPart + '.' + decimalPart;
    } else {
        return integerPart;
    }
}


