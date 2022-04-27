const subtract = require(`./index.js`)

describe("subtract", () => {
    it("returns the difference between two positive integers", () => {
        const diff = subtract(9, 4)
        expect(diff).toEqual(5)
    })
    it("returns the difference between two negative integers", () => {
        const diff = subtract(-9, -4)
        expect(diff).toEqual(-5)
    })
    it("returns the difference between two floating values", () => {
        const diff = subtract(.9, .4)
        expect(diff).toEqual(.5)
    })
})