# AND Digital Solution

## Description
This simple algorithm is fully tested and displays the AND-Siblings of a string input that contains positive integers. 

There code contains provisions for some edge cases. For example, the application will throw an error message if the data structure of the input is not a string as well as if it does not contain any integers. Also, the output will not contain letters, spaces, or any other special characters.

The code was refactored as much as possible to respect the Single Responsibility Principle, while also retaining the feature of being called through ```solution(input)``` or ```console.log(solution(input))```, which was required from the client. 

## Run unit tests
To run the tests with Jasmine, type the following command at the root of the directory:
```
open specrunner.html
```

You do not need to install anything. A new tab should open automatically.

## User Requirements
Two non-negative integers are called AND-Siblings if they can be obtained by each other by rearranging the digits of their decimal representations.

Write the function that, given any String input, returns all the distinct AND-Siblings that can be formed by the positive integers that can be found on it in descending order. Please keep in mind the efficiency of your algorithm when writing the solution.

- If the input provided is: “236”, then your solution should return "632,623,362,326,263,236" as these are all the combination that can be made with integers that the string contains.

- If the input provided is: “A 3B2 C6D”, then your solution should return
"632,623,362,326,263,236" as well, but this time notice that the provided string had non-integers characters and whitespaces, so an extraction of integers was first made to obtain the correct solution

- If the input provided does not contain any integers: “ABC”, then your solution should return the appropriate error exception message.

## Acceptance Criteria
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236
