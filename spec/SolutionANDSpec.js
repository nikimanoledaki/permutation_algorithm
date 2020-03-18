'use strict';

describe('When input length equals 1', function() {
    it('returns input', function() {
        expect(solution("1")).toEqual("1")
    })
})

describe('When input length equals 2', function() {
    it('returns input and sibling', function() {
        expect(solution("12")).toEqual("21,12")
    })
})

describe('When input length equals 3', function() {
    it('returns input and all siblings', function() {
        expect(solution("236")).toEqual("632,623,362,326,263,236")
    })
})

describe('When input contains numerals', function() {
    it('filters string for numerals', function() {
        expect(solution("3A2 C6")).toEqual("632,623,362,326,263,236")
    })
})

describe('When input contains numerals', function() {
    it('filters string for numerals', function() {
        expect(isInteger(["3", "A", "2", "C", "6"])).toEqual(["3", "2", "6"])
    })
})
