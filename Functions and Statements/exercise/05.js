function palindromeIntegers(numArray) {
    function isPalindrome(num) {
        str = String(num)

        if (str === str.split('').reverse(). join('')) {
           return true;
        }
        else {
            return false;
        }
    }

    numArray.forEach(element => {
        console.log(isPalindrome(element))
    });
}

palindromeIntegers([32,2,232,1010]);