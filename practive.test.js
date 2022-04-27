const subtract = require(`./index.js`)

describe("subtract", () => {
    it("returns the difference of two positive integers", () => {
        const diff = subtract(9, 1)
        expect(diff).toEqual(8)
    })

    it("returns the difference of two negative integers", () => {
        const diff = subtract(-9, -1)
        expect(diff).toEqual(-8)
    })
})