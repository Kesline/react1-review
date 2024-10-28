function testAddCommas() {
    console.log(addCommas(1234) === "1,234" ? "Pass" : "Fail");
    console.log(addCommas(1000000) === "1,000,000" ? "Pass" : "Fail");
    console.log(addCommas(9876543210) === "9,876,543,210" ? "Pass" : "Fail");
    console.log(addCommas(6) === "6" ? "Pass" : "Fail");
    console.log(addCommas(-10) === "-10" ? "Pass" : "Fail");
    console.log(addCommas(-5678) === "-5,678" ? "Pass" : "Fail");
    console.log(addCommas(12345.678) === "12,345.678" ? "Pass" : "Fail");
    console.log(addCommas(-3141592.65) === "-3,141,592.65" ? "Pass" : "Fail");
    
    // Additional tests
    console.log(addCommas(0) === "0" ? "Pass" : "Fail");
    console.log(addCommas(-123456789) === "-123,456,789" ? "Pass" : "Fail");
    console.log(addCommas(123456789.123456) === "123,456,789.123456" ? "Pass" : "Fail");
}

// Run the tests
testAddCommas();
