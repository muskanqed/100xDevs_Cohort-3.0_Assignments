function findLargestElement(numbers) {
    let largestNumber = Number.NEGATIVE_INFINITY;

    numbers.forEach((number) => {
        if (number > largestNumber) {
            largestNumber = number;
        }
    });

    return largestNumber;
}

const numbers = [1, 2, 3, 4, 90, 80, 100];

const largestNumber = findLargestElement(numbers);

console.log(largestNumber);
