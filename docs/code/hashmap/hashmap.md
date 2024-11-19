```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        }
        map.set(nums[i], i)
    }
    return []
};
```


49. 字母异位词分组
给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

 

示例 1:

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
示例 2:

输入: strs = [""]
输出: [[""]]
示例 3:

输入: strs = ["a"]
输出: [["a"]]

```js
var groupAnagrams = function (strs) {
    const map = new Map();
    for (let str of strs) {
        let array = Array.from(str);//字符转成数组
        array.sort();//排序
        let key = array.toString();
        let list = map.get(key) ? map.get(key) : new Array();//从map中取到相应的数组
        list.push(str);//加入数组
        map.set(key, list);//重新设置该字符的数组
    }
    return Array.from(map.values());//map中的value转成数组
};

// 方法1.排序
// 思路：遍历字符串数组，对每个字符串中的字符排序，加入map对应的key的数组中。
// 复杂度：时间复杂度O(n*klogk)，n是字符串的个数，k是最长的字符串的长度，排序复杂度O(klogk)，n次排序，哈希表更新O(1)。空间复杂度O(nk)，排序空间复杂度O(nlogk)，map空间复杂度O(nk)，取较大的O(nk)

// 作者：晨
// 链接：https://leetcode.cn/problems/group-anagrams/solutions/1119155/49-zi-mu-yi-wei-ci-fen-zu-by-chen-wei-f-vwvu/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

1.   最长连续序列
已解答
中等
相关标签
相关企业
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

 

示例 1：

输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
示例 2：

输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9
 

```js
var longestConsecutive = (nums) => {
    const set = new Set(nums) // set存放数组的全部数字
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i] - 1)) { // nums[i]没有左邻居，是序列的起点， 因为数字是连续的，所以 nums[i] - 1 保证每次计算最长值时，都是从这一连续段的最小数值开始
            let cur = nums[i]
            let count = 1
            while (set.has(cur + 1)) { // cur有右邻居cur+1
                cur++ // 更新cur
                count++
            }
            max = Math.max(max, count) // cur不再有右邻居，检查count是否最大
        }
    }
    return max
}

// Set 的查找是 O(1)
// 查找 Set 中的元素的时间复杂度是 O(1)，JS 的 Set 能给数组去掉重复元素
// 将数组元素存入 set 中，遍历数组 nums
// 如果 当前项 - 1 存在于 set ，说明当前项不是连续序列的起点，跳过，继续遍历
// 当前项没有“左邻居”，它就是连续序列的起点
// 不断在 set 中查看 cur + 1 是否存在，存在，则 count + 1
// cur 不再有 “右邻居” 了，就算出了一段连续序列的长度

// n n

// 作者：笨猪爆破组
// 链接：https://leetcode.cn/problems/longest-consecutive-sequence/solutions/277084/fang-fa-cong-yi-dao-nan-bing-cha-ji-fang-fa-bu-hui/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

```js

```
```js

```