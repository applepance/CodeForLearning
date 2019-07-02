import { MemberEntity } from "../model";

// 状态的计算， reducer 纯函数 返回当前状态 
// state, 初始值
// let state = {
//   songs: []
// }
export const membersReducer = (state: MemberEntity[] = [], action) => {
  switch(action.type) {
    case 'FETCH_MEMBER_COMPLETED':
      return action.payload
  }
  return state;
} 
