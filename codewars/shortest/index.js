var str='aasda adasoid qwqeqwe aada a qqq'
console.log(str.split(' ').map(arr=>arr.length).sort((a,b)=>{return a - b})[0])
console.log(Math.min.apply(null,str.split(' ').map(arr=>arr.length)))

function findShort(str) {
    return Math.min(...str.split(' ').map(arr=>arr.length))
}