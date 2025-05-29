
const calculation_record = [0]


function calc(json_file_or_String, counter){
    let data = paser(json_file_or_String)
    let  sum = 0;
    // let operation = ""


    switch (data.operation){
        case 'add':

            sum =  addition( calculation_record[counter], data.operand)
            counter++
            calculation_record[counter] = sum

            break;
        case 'subtract':

           sum =  subtract(calculation_record[counter], data.operand)
            counter++
            calculation_record[counter] = sum
            break;
        default:
            console.log('unknown operation');
    }

    return sum
}


const addition = ( a, b) =>{

    return a + b;
}

const subtract = ( a, b) =>{
    return a - b;
}

const paser = (some_json_file) =>{
    if(typeof some_json_file === "string" ){
        return JSON.parse(some_json_file)
    }
    return some_json_file;
}

sum = calc('{"operation" : "add", "operand" : 5}', 0);
sum = calc('{"operation" : "subtract", "operand" : 2}', 1);
sum = calc('{"operation" : "add", "operand" : 19}', 2);
console.log(sum);


record = ""
for(let item in calculation_record){
   record +=  calculation_record[item] + " ";
}
console.log(record);
