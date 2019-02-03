function tenToSmall(num, base)
{
    num = document.getElementById('num1').value;
    base = document.getElementById('base1').value;
    smallNum = "";

    while (num > 0)
    {
        smallNum = num%base + smallNum;
        num = Math.floor(num/base);
        alert(smallNum);
        alert(num);
    }

    return smallNum;
}

function smallToTen(num, base)
{
    num = document.getElementById('binaryNum').value;
    base = document.getElementById('base').value;
    tenNum = 0;
    numLength = num.toString().length;

    while (numLength > 0)
    {
        var denominator = Math.pow(10,(numLength-1));
        var currentDigit = Math.floor(num/denominator);
        tenNum = tenNum + currentDigit*Math.pow(base,numLength-1);
        num = num%denominator;
        numLength--;
    }
    return tenNum;
}

function baseToBase() {
    num = document.getElementById('num').value;
    base = document.getElementById('baseOfNum').value;
    newBase = document.getElementById('newBase').value;
    tenNum = 0;
    numLength = num.toString().length;
    smallNum = "";

    while (numLength > 0) {
        var denominator = Math.pow(10, (numLength - 1));
        var currentDigit = Math.floor(num / denominator);
        tenNum = tenNum + currentDigit * Math.pow(base, numLength - 1);
        num = num % denominator;
        numLength--;
    }

    while (tenNum > 0) {
        smallNum = tenNum % newBase + smallNum;
        tenNum = Math.floor(tenNum / newBase);
    }
    return smallNum
}
