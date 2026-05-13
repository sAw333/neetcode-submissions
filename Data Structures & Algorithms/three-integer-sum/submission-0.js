class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // [-4, -1, -1, 0, 1, 2]
        nums.sort((a,b) => a - b )
        let i, j, arr = [],sum = 0,k;
        for( i = 0 ; i < nums.length - 2; i++ ){
            if(nums[i-1] == nums[i]) continue;
            j = i + 1;  k = nums.length - 1
            while( k > j ){
                  sum = nums[i] + nums[j] + nums[k];
                if( sum === 0 ) {
                    arr.push([nums[i], nums[j] , nums[k]]);
                    while (j < k && nums[j] === nums[j+1]) j++;
                    while (j < k && nums[k] === nums[k-1]) k--;
                    j++;
                    k--;
                }
                else if ( sum > 0 ) {
                    k--;
                } 
                else if ( sum < 0 ) {
                    j++;
                } 
            }
        }
        return arr;
    }
}
