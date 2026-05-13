class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0, maxArea = 0, right = heights.length - 1;
        while ( right > left ){
            let width = right - left;
            let height = Math.min(heights[left], heights[right]); 
            let currArea = width * height;
            if(currArea > maxArea) maxArea = currArea;
            else if( heights[right] > heights[left] ){
                left++;
            }
            else right--;
        }
        return maxArea;
    }
}
