const nums = ['c','a','z','y'];
const nums2 = [1,10,2,9];
// console.log(nums.sort());
console.log(nums2.sort(function(a,b){
    return a - b;
}))
const people = [
    {age:46,name:'yjr'},
    {age:11,name:'yqq'},
    {age:55,name:'yjt'},
    {age:4,name:'yyy'},
    {age:43,name:'yzz'},
    {age:1,name:'yss'},
]
console.log(people.sort(function(a,b){
    return a.age - b.age
}));