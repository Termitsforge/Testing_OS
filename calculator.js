function calculator(a, b, operation) {
    let op = operation;
    // переменная для результата
    let result;
    // получаем первое и второе число
    let num1 = a;
    let num2 = b;
    // смотрим, что было в переменной с действием, и действуем исходя из этого
    if (Math.abs(num1)<= 10e-8 && num1 !==0 || num2 !==0 && Math.abs(num2) <= 10e-8) {
        result = "Ошибка ввода."
    } else {
        switch (op) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    result = "На ноль делить нельзя!";
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                if (result === NaN) {
                    result = "Ошибка ввода."
                }
                break;
        }
    }
    return result;
}