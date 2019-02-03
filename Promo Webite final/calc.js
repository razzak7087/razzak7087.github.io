/*
gameplan:

HTML:
(*) Calculator Window for operations to be shown along with result
() Number buttons for the calculator
() Operator buttons (*, -, +, etc.)
() '=' button
() Reset or Clear button

Javascript:
() Function that captures what was typed in the calculatorWindow
() Function that will add numbers, subtract, etc.
 */
function calculate(expression)
{
    var num = expression;
    var numLength = num.length;

    for (var i = 0; i <= numLength; i++)
    {
        if (expression.substr(i,1) === '+' || expression.substr(i,1) === '-' || expression.substr(i,1) === '*' || expression.substr(i,1) === '^' || expression.substr(i,1) === '/' )
        {
            var operator = expression.substr(i, 1);
            var firstNum = Number(expression.substr(0, i));
            var secondNum = Number(expression.substr(i+1, numLength-i));
        }
    }
    if (operator === '+')
    {
        return addNums(firstNum, secondNum);
    }
    else if (operator === '-')
    {
        return subtractNums(firstNum, secondNum);
    }
    else if (operator === '*')
    {
        return multiplyNums(firstNum, secondNum);
    }
    else if (operator === '/')
    {
        return divideNums(firstNum, secondNum);
    }
    else if (operator === '^')
    {
        return powerOf(firstNum, secondNum);
    }
}
//karen and vivak helped with the double digit code

function addNums(p1, p2)
{
    //p1 and p2 are sent to addNums... to do this:
    return p1+p2;
}
function subtractNums(p1, p2)
{
    return p1 - p2;
}

function multiplyNums(p1, p2)
{
    return p1 * p2;
}

function divideNums(p1, p2)
{
    return p1 / p2;
}

function powerOf(p1, p2)
{
    return Math.pow(p1, p2)
}