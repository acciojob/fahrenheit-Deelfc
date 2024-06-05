function toFahrenheit(celsius) {
    // Convert Celsius to Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;
    
    // Format the result to two decimal points
    return fahrenheit.toFixed(2);
}

// Examples
console.log(toFahrenheit(0));       // 32.00
console.log(toFahrenheit(25));      // 77.00
console.log(toFahrenheit(-10));     // 14.00
