# Permutations

## Description
This simple algorithm is fully tested and displays the permutations of a string input that contains positive integers. 

There code contains provisions for some edge cases. For example, the application will throw an error message if the data structure of the input is not a string as well as if it does not contain any integers. Also, the output will not contain letters, spaces, or any other special characters.

The code was refactored as much as possible to respect the Single Responsibility Principle, while also retaining the feature of being called through ```solution(input)``` or ```console.log(solution(input))```, which was required from the client. 

## Run unit tests
To run the tests with Jasmine, type the following command at the root of the directory:
```
open specrunner.html
```

You do not need to install anything. A new tab should open automatically.

## Acceptance Criteria
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
</br>
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236
