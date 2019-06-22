import React from 'react';
import { Input, Button, Divider } from 'antd';
import 'antd/dist/antd.css';

function Filed(props) {
  const { value, index } = props;
  return (
    <div>
      <Divider />
      <div>姓名：<Input value={value.name} placeholder="姓名" onChange={(e) => {
        props.onChange(e.target.value, 'name', index)
      }} /></div>
      <div>地址：<Input value={value.address} placeholder="地址" onChange={(e) => {
        props.onChange(e.target.value, 'address', index)
      }} /></div>
      <Button type="primary" onClick={() => { props.onDelete(index) }}>删除</Button>
      <Button type="primary" onClick={() => { props.onAddFiled() }}>添加</Button>
    </div>
  )
}

class DynamicField extends React.Component {
  state = {
    lists: [
      {
        name: '',
        address: ''
      }
    ]
  }
  handleDelete = (index) => {
    const lists = this.state.lists.slice(0);
    lists.splice(index, 1);
    this.setState({
      lists
    })
  }
  handleChange = (value, key, index) => {
    let lists = this.state.lists.slice(0);
    const obj = lists[index];
    const newObj = {
      ...obj,
      [key]: value
    }
    lists[index] = newObj;
    this.setState({
      lists
    })
  }
  handleAddFiled = () => {
    let lists = this.state.lists.slice(0);
    lists.push({
      name: '',
      address: ''
    })
    this.setState({
      lists
    })
  }
  render() {
    const { lists } = this.state;
    return (
      <div>
        {
          lists.map((list, i) => {
            return <Filed key={i} value={list} onChange={this.handleChange} onDelete={this.handleDelete} onAddFiled={this.handleAddFiled} index={i} />
          })
        }
      </div>
    )
  }
}

export default DynamicField;