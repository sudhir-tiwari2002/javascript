function bubbleSortDescending(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap the elements
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

const numbers = [34, 23, 67, 12, 90, 56];
bubbleSortDescending(numbers);
console.log(numbers); // Output: [90, 67, 56, 34, 23, 12]
