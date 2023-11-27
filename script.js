const makeChange = (c) => {
    // Ensure the input is a positive integer less than 100 and greater than 0
    if (typeof c !== 'number' || c <= 0 || c >= 100 || !Number.isInteger(c)) {
        return "Invalid input. Please enter a positive integer less than 100 and greater than 0.";
    }

    // Calculate the number of quarters, dimes, nickels, and pennies
    const quarters = Math.floor(c / 25);
    const remainingAfterQuarters = c % 25;
    
    const dimes = Math.floor(remainingAfterQuarters / 10);
    const remainingAfterDimes = remainingAfterQuarters % 10;
    
    const nickels = Math.floor(remainingAfterDimes / 5);
    const pennies = remainingAfterDimes % 5;

    // Create and return the result object
    const result = {
        "q": quarters,
        "d": dimes,
        "n": nickels,
        "p": pennies
    };

    return result;
};

// Example usage:
const c = prompt("Enter c: ");
const result = makeChange(parseInt(c, 10));

// Display the result
alert(JSON.stringify(result));
