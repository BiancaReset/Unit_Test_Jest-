

// Import the function sum from the app.js file
const { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 146.26 yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(2);

    // If 1 dollar is 146.26 yen, then 2 dollars should be (2 * 146.26)
    const expected = 2 * 146.26; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(2)).toBe(292.52); // 1 dollar is 146.26 yen, then 2 dollars should be = (2 * 146.26)
})

test("179.88 yen should be 1 pound", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const pound = fromYenToPound(1);

    // If 1 pound is 179.88 yen, then 2 pounds should be (2 * 179.88)
    const expected = 2 * 179.8; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(359.76)).toBe(2); // 179.88 yen is 1 pound, then 359.76 yens should be = (359.76/2)
})