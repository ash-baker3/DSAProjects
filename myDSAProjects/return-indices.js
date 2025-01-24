var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (complement in hash) {
      console.log([hash[complement], i]);
      return [hash[complement], i];
    }
    hash[nums[i]] = i;
  }
};

twoSum([2, 7, 11, 15], 9);
