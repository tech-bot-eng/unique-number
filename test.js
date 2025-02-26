class UniqueSumGenerator {
    constructor() {
        this.numbers = new Set();
        this.sum = 0;
    }
    
    // Generate 4 unique random numbers
    generateRandomNumbers() {
        while (this.numbers.size < 4) {
            let num = Math.floor(Math.random() * 201) - 100; // Random numbers between -100 and 100
            if (!this.numbers.has(num)) {
                this.numbers.add(num);
                this.sum += num;
            }
        }
    }

    // Calculate the fifth number and ensure it's unique
    calculateFifthNumber(x) {
        let fifthNumber = x - this.sum;

        // If the fifth number is not unique, replace one of the existing numbers
        if (this.numbers.has(fifthNumber)) {
            let replaced = false;
            for (let num of this.numbers) {
                let newFifth = x - (this.sum - num); // Recalculate fifth number if we replace `num`
                if (!this.numbers.has(newFifth)) {
                    this.numbers.delete(num);
                    this.numbers.add(newFifth);
                    this.sum = this.sum - num + newFifth; // Update the sum
                    replaced = true;
                    break;
                }
            }
            // If no replacement works, regenerate the 4 numbers (rare case)
            if (!replaced) {
                this.numbers.clear();
                this.sum = 0;
                this.generateRandomNumbers();
                this.calculateFifthNumber(x); // Retry
            }
        } else {
            this.numbers.add(fifthNumber);
        }
    }

    // Main function to generate the array of 5 unique numbers that sum to X
    generateUniqueSum(x) {
        this.generateRandomNumbers();
        this.calculateFifthNumber(x);
        return Array.from(this.numbers);
    }
}

// Example usage:
const generator = new UniqueSumGenerator();
let x = 100;
let result = generator.generateUniqueSum(x);
console.log(result); 