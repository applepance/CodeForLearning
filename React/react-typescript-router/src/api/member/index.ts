import { members } from './mockData';
import { MemberEntity } from '../../model';

const fetchMembers = (): Promise<MemberEntity[]> => {
  return Promise.resolve(members);
}
export const memberAPI = {
  fetchMembers
}