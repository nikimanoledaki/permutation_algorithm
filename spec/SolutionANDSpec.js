'use strict';

describe('When input length', function() {
    it('equals 1, returns input', function() {
        expect(solution("1")).toEqual("1")
    })

    it('equals 2, returns input and sibling', function() {
        expect(solution("12")).toEqual("21,12")
    })

    it('equals 3, returns input and all siblings', function() {
        expect(solution("236")).toEqual("632,623,362,326,263,236")
    })
})

describe('When input contains characters other than numerals,', function() {
    it('filters string for numerals', function() {
        expect(solution("3A2 C6")).toEqual("632,623,362,326,263,236")
    })

    it('filters string for numerals', function() {
        expect(isInteger(["3", "A", "2", "C", "6"])).toEqual(["3", "2", "6"])
    })

    it('if there are no integers, returns an error message', function() {
        expect(function() { solution("ABC") }).toThrow("Input does not contain any integers");
    })

    it('if input is not a string, returns an error message', function() {
        expect(function() { solution(["ABC"]) }).toThrow("Input is not a string");
    })
})
