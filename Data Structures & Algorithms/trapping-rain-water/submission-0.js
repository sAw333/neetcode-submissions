class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0, right = height.length-1;
        let leftMax = 0, rightMax = 0, totalWater = 0
        while(right > left){

            leftMax = Math.max(leftMax, height[left])
            rightMax = Math.max(rightMax, height[right])

            if(rightMax > leftMax){
                totalWater += leftMax - height[left]
                left++;

            }
            else {
                totalWater += rightMax - height[right]
                right--;
            }
        }
        return totalWater
    }
}
