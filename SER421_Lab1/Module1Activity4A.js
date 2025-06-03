
const calculation_record = [0]


function calc(json_file_or_String){
    let data = parser(json_file_or_String)
    let  sum = 0;
    const lastValue = calculation_record[calculation_record.length - 1];
    // let operation = ""


    switch (data.operation){
        case 'add':
            sum =  addition( lastValue, data.operand)

            break;
        case 'subtract':

           sum =  subtract(lastValue, data.operand)

            break;
        default:
            console.log('unknown operation');
    }

    calculation_record.push(sum)
    return sum
}


const addition = ( a, b) =>{

    return a + b;
}

const subtract = ( a, b) =>{
    return a - b;
}

const parser = (input) => {
    if(input == null){
        throw new Error('Input cannot be null')
    }

    if (typeof input === "string") {
        return JSON.parse(input);
    }
    return input;
};

sum = calc('{"operation" : "add", "operand" : 5}');
sum = calc('{"operation" : "subtract", "operand" : 2}');
sum = calc('{"operation" : "add", "operand" : 19}');
console.log(sum);


record = ""
for(let item in calculation_record){
   record +=  calculation_record[item] + " ";
}
console.log(record);

