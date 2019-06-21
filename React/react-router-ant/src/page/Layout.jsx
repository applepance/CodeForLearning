import React from 'react';
// eslint-disable-next-line
import { Layout, Row, Col, Avatar, Input, Menu, Dropdown, Icon, Badge } from 'antd';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
const { Header, Footer, Sider, Content }  = Layout;

function DropMenu() {
  return (
    <Menu>
      <Menu.Item>
        <a href="/">1</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/">2</a>
      </Menu.Item>
    </Menu>
  )
}

class PageLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Header style={{color: '#fff', textAlign: 'center', fontWeight: 'bold'}}>
          <Row>
            <Col span={10}>
              React + Antd 实践
            </Col>
            <Col span={8}>
              <Input placeholder="请输入你想要的又拿不到的"></Input>
            </Col>
            <Col span={6}>
              <Avatar style={{backgroundColor: '#666', marginRight: 20}}
              icon="user"
              ></Avatar>
              <Dropdown overlay={DropMenu}>
                <span>Hi, 
                  <Icon type="down"></Icon>
                </span>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider>
            <Menu
            style={{width: 256, height: '90vh', overflow: 'auto', minWidth: 256}}
            defaultOpenKeys={['1']}
            mode="inline"
            >
              <Menu.SubMenu key="1" title={<span><Icon type="smile-o"></Icon>爱叫啥叫啥的UI组件</span>}>
                <Menu.Item key="1-1">
                  <Link to={"table"}>表格</Link>
                </Menu.Item>
                <Menu.Item key="1-2">
                  <Link to={"label"}>标签</Link>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>
          <Content>
            {/* { this.props.children } */}
            <div style={{color: "#000", backgroundColor: "red" }}><span>Content</span></div>
          </Content>
        </Layout>
        <Footer>
          Footer
        </Footer>
      </Layout>
    )
  }
}
export default PageLayout;
