import React, { Component } from 'react';
import { Table } from 'antd';

function Message(props) {
  const { msg } = props;
  const { time } = msg;
  return (
    <li>
      {time}
    </li>
  )
}

class Index extends Component {
  state = {
    msgs: [
      {
        time: '2017-6-18'
      },
      {
        time: '2018-6-18'
      },
      {
        time: '2019-6-18'
      }
    ]
  }
  // 每隔3秒放一个时间进去
  handlePushTime = () => {
    const date = new Date();
    const dateLocal = date.toLocaleTimeString();
    const msgs = this.state.msgs.slice(0);
    this.setState({
      msgs: msgs.concat({ time: dateLocal })
    })
  }
  componentDidMount() {
    setInterval(() => {
      this.handlePushTime();
    }, 3000);
  }
  render() {
    const { location } = this.props;
    const { msgs } = this.state;
    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ];

    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="#">{text}</a>
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '操作',
        key: 'key',
        render: (text, record) => {
          return (
            <li>
              <a href="#">+</a>
              <a href="#">-</a>
              正在操作: { record.name }
            </li>
          )
        }
      }
    ];
    return (
      <div>
        {location.search}
        {
          msgs.map((msg, i) => {
            return (
              <Message key={i} msg={msg} />
            )
          })
        }
        <Table dataSource={dataSource} columns={columns} />
      </div>
    )
  }
}

export default Index;