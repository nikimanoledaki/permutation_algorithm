'use strict';

function isInteger (characters) { 
  var filteredArray = characters.filter(char => Number(char))
  return filteredArray;
}

function solution (input) {
  var numbersArray = isInteger(input.split(''))
  if (input.length <= 1) return input;
  var results = [[numbersArray.shift()]]

  while (numbersArray.length) {
    var currentDigit = numbersArray.shift()
    var temporaryResults = []

    results.forEach( result => {
      let index = 0
      while (index <= result.length) {
        var temporary = [...result]
        temporary.splice(index, 0, currentDigit)
        temporaryResults.push(temporary)
        index++
      }
    })
    results = temporaryResults
  }

  return results
    .map(numbersArray => numbersArray.join(''))
    .filter((element, index, self) => (self.indexOf(element) === index))
    .sort()
    .reverse()
    .toString()
}
