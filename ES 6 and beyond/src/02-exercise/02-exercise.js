/**
 * Exercise 02:
 *
 * Finish the code of the `exercise02` function.
 *
 * The function will receive an object as a parameter with
 * the following shape:
 *
 * {
 *  firstName: "Ana",
 *  lastName: "Marks",
 * }
 *
 * 1. The function should destructure the keys from the parameter
 *    in the function definition so that it captures the
 *    `firstName` and `lastName` keys from the object
 *
 * @example
 * function hello({ message }) { ... }
 *
 * 2. Both destructured keys should have a default value of:
 *   firstName = "Default firstName"
 *   lastName = "Default lastName"
 *
 * @example
 * function hello({ message = "default message" }) { ... }
 *
 * 3. Returns the concatenation of the `firstName` and `lastName` variables
 *
 * @example
 *
 * {
 *  firstName: "Ana",
 *  lastName: "Marks",
 * }
 *
 * The `firstName` and `lastName` should be concatenated
 * with the following strings:
 *
 * => `Hello I am Ana Marks`
 */

// Finish the code of the function
function exercise02({firstName = "Default firstName", lastName = "Default lastName",}) {
    return `Hello I am ${firstName + " " + lastName}`
}

// Don’t change the code bellow this line
export default exercise02;


/* Prints:

  02-exercise
    ✓ add default values to each key of the destructured parameter object (2 ms)
    ✓ return the concatenation of the values in the object

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.96 s, estimated 1 s
*/