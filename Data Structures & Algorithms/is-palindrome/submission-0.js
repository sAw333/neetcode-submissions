class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0, c= 0, right = s.length - 1;
        let str = s.toLowerCase();
        while ( right > left ) {
            let asciiRight = str.charCodeAt(right)
            let asciiLeft = str.charCodeAt(left)
            if( asciiRight >= 48 && asciiRight <= 57 || asciiRight >= 97 && asciiRight <= 122 ){
                 if(  asciiLeft >= 48 && asciiLeft <= 57 || asciiLeft >= 97 && asciiLeft <= 122 ){
                    if(asciiRight !== asciiLeft) {
                        c++;
                    }
                    right--;
                    left++
                 }
                 else left++
            } else right --;
        }
        if(c > 0){
            return false
        }
        return true
    }
}
