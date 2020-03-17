function solution (input) {
  if (input.length <= 1) return input;
  var digits = input.split('')
  var results = [[digits.shift()]]

  while (digits.length) {
    const currentDigit = digits.shift()
    let temporaryResults = []
    results.forEach( result => {
      let index = 0
      while (index <= result.length) {
        const temporary = [...result]
        temporary.splice(index, 0, currentDigit)
        temporaryResults.push(temporary)
        index++
      }
    })
    results = temporaryResults
  }
  return results
    .map(letterArray => letterArray.join(''))
    .filter((el, idx, self) => (self.indexOf(el) === idx))
    .sort()
    .reverse()
    .toString()
}
