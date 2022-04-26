const subtract = require(`./index.js`)

test("subract equals the difference of two positive integers", () => {
    const difference = subtract(3, 2)
    expect(difference).toEqual(1)
})