function passwordChecker(password) {

    function lengthChecker(string) {
        if (string.length < 6 || string.length > 10) {
            console.log("Password must be between 6 and 10 characters");
            return false;
        } else {
            return true;
        }
    }

    function letterDigitChecker(string) {
        for (let ch of string) {
            if (!ch.match(/[A-Za-z0-9]/)) {
                console.log("Password must consist only of letters and digits");
                return false;
            }
        }
        return true;
    }

    function twoDigitChecker(string) {
        let totalDigitsCount = 0;

        for (let ch of string) {
            if (ch.match(/[0-9]/)) {
                totalDigitsCount++;
            }
        }

        if (totalDigitsCount < 2) {
            console.log("Password must have at least 2 digits");
            return false;
        } else {
            return true;
        }
    }
    
    const isValid = [lengthChecker(password), letterDigitChecker(password), twoDigitChecker(password)];
    for (const value of isValid) {
        if (value !== true) {
            return;
        }
    }
    console.log('Password is valid')
}


passwordChecker('LogIn');
