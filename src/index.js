module.exports = function toReadable(number) {
    const units = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'];
    const firstTens = [' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
    const tens = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
    const hundred = ' hundred';

    let result = [];
    let counter = 0;

    if (number == 0) return 'zero';

    do {
        const lastTwoDigits = number % 100;
        const lastDigit = number % 10;

        if (counter == 0 && lastTwoDigits > 9 && lastTwoDigits < 20) {
            number = Math.floor(number / 100);
        } else {
            number = Math.floor(number / 10);
            counter++;
        }
        switch (counter) {
            case 0: 
                result.unshift(firstTens[lastTwoDigits - 10]);
                counter += 2; 
                break;
            case 1: 
                result.unshift(units[lastDigit]);
                break;
            case 2:
                result.unshift(tens[lastDigit]);
                break;
            case 3:
                result.unshift(units[lastDigit] + hundred);
                break;
        }
    } while (number > 0);

    return  result.join('').trim();
}

