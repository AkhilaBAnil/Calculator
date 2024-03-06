function display(num) {
    root.value += num; //      + sign performs concatnation here
}

function clearscreen() {
    root.value = ""
}

function backspace() {
    let result = root.value.slice(0, -1);
    root.value = result
}

function solve() {
    let current = root.value
    result = eval(current) //eval(3+4)

    root.value = result
}



//eval() => The argument of the eval() function is a string. It will evaluate the source string as a script body, which means both statements and expressions are allowed. It returns the completion value of the code. For expressions, it's the value the expression evaluates to.4