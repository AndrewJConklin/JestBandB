const { exportAllDeclaration } = require("@babel/types")
const subtract = require(`./index.js`)


describe("subtract", () => {
    it(" equals the difference of two positive integers", () => {
        const diff = subtract(9, 6)
        expect(diff).toEqual(3)
    })

    it(" equals the difference of two negative integers", () => {
        const diff = subtract(-9, -6)
        expect(diff).toEqual(-3)
    })

    it(" equals the difference of two floating values", () => {
        const diff = subtract(.5, .2)
        expect(diff).toEqual(.3)
    })
})