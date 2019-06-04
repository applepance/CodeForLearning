function generateHashtag(str){
    // if(str.length>140||str.length===0){
    //     return false;
    // }
    // str = str.split(' ').map(ele=>ele.charAt(0).toUpperCase()+ele.slice(1));
    // var q =str.toString();
    // q = '#' + q;
    // return q;
    return (str.length > 140 || str=='') ? false : '#'+str.split(' ').map(ele=>ele.charAt(0).toUpperCase()+ele.slice(1)).join(' ');
}
console.log(generateHashtag('cai xu kun n m s l ❤'));
console.log(generateHashtag(''));
console.log(generateHashtag('cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤cai xu kun n m s l ❤'));