import * as React from 'react';
import { memberAPI } from '../../api/member';
import { MemberEntity } from '../../model';

interface State {
  members: MemberEntity[]
}

interface Props {

}

export class MembersPage extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    }
  }
  public componentDidMount() {
    memberAPI.fetchMembers()
      .then((members) => {
        this.setState({
          members
        })
      })
  }
  public render() {
    return (
      <div>
        <table className="table">
          <thead></thead>
          <tbody>
            {
              this.state.members.map(MemberRow)
            }
          </tbody>
        </table>
      </div>
    )
  }
}

const MemberRow = (member: MemberEntity) => {
  return (
    <tr key={member.id}>
      <td>
        <img src={member.avatar_url} alt="" />
      </td>
      <td>
        <span>{member.id}</span>
      </td>
      <td>
        <span>{member.login}</span>
      </td>
    </tr>
  )
}