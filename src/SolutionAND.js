'use strict';

function solution (input) {
  if (typeof input !== "string") throw "Error: Input is not a string";
  const numbersArray = isPositiveInteger(input.split(''))
  if (numbersArray.length <= 1) return input;
  var ANDSiblings = permute(numbersArray)
  return display(ANDSiblings)
}

function isPositiveInteger (characters) { 
  var filteredArray = characters.filter(char => Number(char) )
  if (filteredArray.length === 0) {
    throw "Error: Input does not contain any integers";
  } else {
    return filteredArray;
  }
}

function permute (numbersArray) {
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
  return results;
}

function display (results) {
  return results
    .map(numbersArray => numbersArray.join(''))
    .filter((element, index, self) => (self.indexOf(element) === index))
    .sort()
    .reverse()
    .toString()
}
