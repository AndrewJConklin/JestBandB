const subtract = require(`./index`)

test("subtract returns the difference between two postive integers", () => {
    const diff = subtract(6, 3)
    expect(diff).toEqual(3)
})

test("subtract returns the difference between two negative integers", () => {
    const diff = subtract(-5, -3)
    expect(diff).toEqual(-2)
})