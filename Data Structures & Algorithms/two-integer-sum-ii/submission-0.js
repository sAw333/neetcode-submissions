class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let currentTarget, left = 0, right = numbers.length - 1;
        while ( right > left ){
             currentTarget = numbers[right] + numbers[left];
             if( currentTarget > target ) right--;
             else if ( currentTarget < target ) left++;
             else if ( currentTarget == target) return [ left + 1, right + 1];
        }
        return -1;
    }
}
