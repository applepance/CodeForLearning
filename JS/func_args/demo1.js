function information({name,sex,money,birthday,color,likes,follow,age}){
  return `${name} ${sex} ${money} ${birthday} ${color} ${likes} ${follow} ${age}`
}

let user = {
  name: 'zzw',
  sex: '男',
  money: '没得钱',
  birthday: '11-03',
  color: '绿',
  likes: ['都可以'],
  age: 16,
  follow: '自己'
};
console.log(information(user));