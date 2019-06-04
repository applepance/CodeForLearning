// 位运算（向右移
// 二进制位 0000 1011
// 0000 0101
// 0001 0110
// 利用位移运算，达到 *2 和 /2 的效果
// console.log(11 >> 1);
// console.log(11);
// console.log(11 << 1);

// 猛哥给蜗牛买香蕉
// N piles of bananas 每挂香蕉上的香蕉数不一样[]
// [3,6,7,11], || H 小时内吃完 一小时应该吃几根 || 一小时吃mid根香蕉，一次只能吃一把，一小时最少吃几根，可以在H小时吃完

/**
 * @desc 最少吃香蕉的速度，在规定时间内吃完
 * @param {number[]} piles 每挂香蕉的数量
 * @param {number} H 小时
 * @return {number}
 */
function minEatingSpeed(piles, H) {
    let lo = 1,
        h1 = Math.max(...piles);
    // 二分查找，一直丢一半
    while(lo <= h1){
        let mid =(lo + h1) >> 1;
        if(catEatAllBananas(piles,H,mid)) {
            h1 = mid - 1; 
        } else {
            lo = mid + 1;
        }
    }
    return lo;
}

/**
 * 
 * @desc 判断能否吃完香蕉
 * @param {number[]} piles 
 * @param {number} H 
 * @param {number} mid 
 */
function catEatAllBananas(piles, H, mid) {
    let h = 0;
    // mid.余下吃完.
    for (let pile of piles) {
        h += Math.ceil(pile / mid);
    }
    return h <= H;
}

let piles = [3,6,7,11];
console.log(minEatingSpeed(piles,5));

// - 吃完香蕉 ？
// H小时内吃完
// - 最小的一个数。