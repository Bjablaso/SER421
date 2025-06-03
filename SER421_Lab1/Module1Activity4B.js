

class prefixCalculator {
    calhistory = [];

    constructor(initialVal) {
        this.calhistory.push({
            first_operand: 0,
            operation: "add",
            second_operand: 0,
            sum: initialVal,
        });
    }

    calculate(input_json) {
        let data = this.#parser(input_json);
        let temp = 0;
        const lastvalue = this.calhistory[this.calhistory.length - 1];

        switch (data.operation) {
            case 'add':
                temp = this.#add(lastvalue.sum, data.operand);
                break;
            case 'subtract':
                temp = this.#subtract(lastvalue.sum, data.operand);
                break;
            default:
                console.log('Unknown operation');
                return;
        }

        this.calhistory.push({
            first_operand: lastvalue.sum,
            operation: data.operation,
            second_operand: data.operand,
            sum: temp,
        });
    }

    undo() {
        if (this.calhistory.length <= 1) {
            this.clear();
            return 0;
        }

        this.calhistory.pop();
        return this.calhistory[this.calhistory.length - 1].sum;
    }

    peek(n) {
        if (this.calhistory.length === 0) return null;

        if (n === undefined) {
            // Top of the stack
            return this.calhistory[this.calhistory.length - 1];
        }

        if (n < 0 || n >= this.calhistory.length) {
            return null;
        }

        return this.calhistory[this.calhistory.length - 1 - n];
    }

    pop() {
        if (this.calhistory.length === 0) return null;
        return this.calhistory.pop();
    }

    printMe() {
        if (this.calhistory.length === 0) {
            console.log("Stack is empty.");
            return;
        }

        for (let element of this.calhistory) {
            console.log(
                `${element.first_operand} ${element.operation} ${element.second_operand} = ${element.sum}`
            );
        }
    }

    clear() {
        this.calhistory = [{
            first_operand: 0,
            operation: "add",
            second_operand: 0,
            sum: 0
        }];
    }

    #add(a, b) {
        return a + b;
    }

    #subtract(a, b) {
        return a - b;
    }

    #parser(input) {
        if (input == null) {
            throw new Error('Input cannot be null');
        }

        if (typeof input === "string") {
            return JSON.parse(input);
        }

        return input;
    }
}


const calc = new prefixCalculator(5);

calc.calculate({ operation: "add", operand: 3 });
calc.calculate({ operation: "subtract", operand: 2 });

calc.printMe();

console.log("Peek:", calc.peek()); // top
console.log("Peek(1):", calc.peek(1)); // second from top
console.log("Undo:", calc.undo());
console.log("After undo:");
calc.printMe();

calc.clear();
console.log("After clear:");
calc.printMe();
