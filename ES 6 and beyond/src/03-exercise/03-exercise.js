/**
 * Exercise 03:
 *
 * Finish the code of the `exercise03` function.
 *
 * The function will be called with several parameters with
 * the following shape:
 *
 * exercise03("Monday", "Tuesday", "Wednesday", "Thursday", "Friday")
 *
 * 1. The function should capture the first 2 elements and
 *    all the other ones in a an array using the `...rest` syntax
 *    which will create an array with all the remaining parameters
 *
 * @example
 * function hello(a, b, ...rest) { ... }
 *
 * 2. Return the array of the remaining parameters
 *
 * @example
 *
 * exercise03(1, 2, 3, 4, 5, 6)
 *
 * => [3, 4, 5, 6]
 */

// Finish the code of the function
const exercise03 = (a,b, ...rest) => {
    return rest
};

// Don’t change the code bellow this line
export default exercise03;

/* Prints

 PASS  src/__tests__/03-exercise.test.js
  03-exercise
    ✓ return the ...rest parameters (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.972 s, estimated 2 s

*/