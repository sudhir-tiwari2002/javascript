function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array should contain at least two numbers.";
    }

    let largest = arr[0];
    let secondLargest = -Infinity;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    if (secondLargest === -Infinity) {
        return "No second largest number found.";
    }

    return secondLargest;
}

const numbers = [50, 60, 20, 39, 500, 23, 0];
const secondLargest = findSecondLargest(numbers);
console.log("Second Largest Number:", secondLargest);

 