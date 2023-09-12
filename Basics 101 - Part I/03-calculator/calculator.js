add = (a,b) => a + b
subtract= (a,b) => a - b
multiply = (a,b) => a * b
divide =(a,b) =>  a / b

calculate = (a,b,operation) =>
{
    switch (operation)
    {
        case "+":
            return add(a,b)
        case "-":
            return subtract(a,b)
        case "*":
            return multiply(a,b)
        case "/":
            return divide(a,b)
        default:
            return "unknown symbol"
    }
}

let result = calculate(5,5,"+")
console.log(result)