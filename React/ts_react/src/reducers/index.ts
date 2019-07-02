//  state
import { combineReducers } from 'redux';
import { MemberEntity } from '../model';
import { membersReducer } from './members';

export interface State {
  members: MemberEntity[]
}

export const state = combineReducers<State>({
  members: membersReducer
})