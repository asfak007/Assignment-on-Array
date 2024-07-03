var twoSum = function(nums, target) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    
    return [];
};

// Example usage:
let nums1 = [2, 7, 11, 15];
let target1 = 9;
console.log(twoSum(nums1, target1)); // Output: [0, 1]

let nums2 = [3, 2, 4];
let target2 = 6;
console.log(twoSum(nums2, target2)); // Output: [1, 2]

let nums3 = [3, 3];
let target3 = 6;
console.log(twoSum(nums3, target3)); // Output: [0, 1]

// Time Complexity: O(N) & Space Complexity: O(N)
