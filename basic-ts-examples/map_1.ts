const numbers = [3, 4, 5, 5, 3];

const result = numbers.reduce((a, c) => a + c); //? 20

/**
 * reduce
 * [3, 4, 5, 5, 3]
 * [7,5,5,3]
 * [12,5,3]
 * [17,3]
 * [20]
 */
