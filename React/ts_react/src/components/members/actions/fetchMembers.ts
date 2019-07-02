import { memberAPI } from '../../../api/member';
import { MemberEntity } from '../../../model';

export const fetchMembersAction = () => (dispatch) => {
  //ajax api
  memberAPI.fetchMembers()
    .then(members => {
      // 下一个动作
      dispatch(fetchMembersCompleted(members))
    })
}
// actions 返回的一个type 对象， reducer重新计算,  reducer = state + mutations
const fetchMembersCompleted = (members: MemberEntity[]) => ({
  type: 'FETCH_MEMBER_COMPLETED',
  payload: members 
})
