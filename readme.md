# Unique Sum Generator

## Overview
This project provides a JavaScript class, `UniqueSumGenerator`, that generates an array of 5 unique integers whose sum equals a given integer `X`. The algorithm ensures that all numbers are distinct while handling edge cases where conflicts arise.

## Features
- Generates 4 unique random numbers within a range of -100 to 100.
- Computes the fifth number to ensure the sum equals `X`.
- Handles cases where the fifth number conflicts with the existing numbers by replacing one of them.
- Implements a fallback mechanism to regenerate numbers if a valid set cannot be formed.

## Usage
### Installation
No installation is required. Simply include the `UniqueSumGenerator` class in your JavaScript project.

### Example Usage
```javascript
const generator = new UniqueSumGenerator();
let x = 100;
let result = generator.generateUniqueSum(x);
console.log(result); // Outputs an array of 5 unique numbers summing to 100
```

## Implementation Details
1. **generateRandomNumbers()**
   - Generates 4 unique random numbers between -100 and 100.
   - Stores the numbers in a `Set` to ensure uniqueness.
   - Computes the sum of these numbers.

2. **calculateFifthNumber(x)**
   - Determines the fifth number needed to reach `X`.
   - If the number is not unique, replaces one of the existing numbers with a new unique value.
   - Implements a fallback regeneration mechanism if necessary.

3. **generateUniqueSum(x)**
   - Calls the helper functions to generate and adjust numbers as needed.
   - Returns an array of 5 unique integers that sum to `X`.

## Edge Cases Considered
- Ensuring all numbers are unique, even if the fifth computed number is already in the set.
- Handling rare cases where a valid unique set cannot be formed by regenerating numbers.
- Allowing negative numbers in the range to increase variability.

## License
This project is licensed under the MIT License.