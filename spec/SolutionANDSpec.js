'use strict';

describe('When input length equals 1', function () {
    it('returns input', function () {
        expect(solution("1")).toBe("1")
    })
})

describe('When input length equals 2', function () {
    it('returns input and sibling', function () {
        expect(solution("12")).toBe("21,12")
    })
})

describe('When input length equals 3', function () {
    it('returns input and all siblings', function () {
        expect(solution("236")).toBe("632,623,362,326,263,236")
    })
})
