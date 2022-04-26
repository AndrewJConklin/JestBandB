const subtract = require(`./index.js`)

test("subtract equals the difference of two positive integers", () => {
    const difference = subtract(3, 2)
    expect(difference).toEqual(1)
})

test("subtract equals the difference of two negative integers", () => {
    const difference = subtract(-2, -3)
    expect(difference).toEqual(1)
})

test("subtract equals the difference of two floating values", () => {
    const difference = subtract(0.2, 0.1)
    expect(difference).toEqual(0.1)
})