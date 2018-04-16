import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
/*eslint-disable no-unused-vars*/
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
import IconPage from './IconPage';
import ButtonPage from './ButtonPage';
/*eslint-enable no-unused-vars*/


import newsActions from 'Root/redux/actions/newsActions';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      page: 'ButtonPage',
      menuItem: [
        {key:1, name: 'Nav1'},
        {key:2, name: 'Nav2'},
        {key:3, name: 'Nav3'},
      ],
      subMenu: [
        {key: 'sub1', type: 'user', title:'subnav 1', list: [
          {key: 1, name: 'IconPage', page: 'IconPage'},
          {key: 2, name: 'ButtonPage', page: 'ButtonPage'},
          {key: 3, name: 'option3'},
          {key: 4, name: 'option4'},
        ]},
        {key: 'sub2', type: 'laptop', title:'subnav 2', list: [
          {key: 4, name: 'option5'},
          {key: 5, name: 'option6'},
          {key: 6, name: 'option7'},
          {key: 7, name: 'option8'},
        ]},
        {key: 'sub3', type: 'notification', title:'subnav 3', list: [
          {key: 4, name: 'option5'},
          {key: 5, name: 'option6'},
          {key: 6, name: 'option7'},
          {key: 7, name: 'option8'},
        ]}
      ]
    };
    this.onCollapse = this.onCollapse.bind(this);
    this.onMenuClick = this.onMenuClick.bind(this);
  }
  onCollapse(collapsed) {
    this.setState({ collapsed });
  }
  onMenuClick(item) {
    this.setState({page: item.page});
  }
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{lineHeight:'64px'}}
          >
            {this.state.menuItem.map((item) => (<Menu.Item key={item.key}>{item.name}</Menu.Item>))}
          </Menu>
        </Header>
        <Layout>
          <Sider 
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            width={200} style={{background:'#fff'}}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              {this.state.subMenu.map((menu) => {
                return (
                  <SubMenu key={menu.key} title={<span><Icon type={menu.type} /><span>{menu.title}</span></span>}>
                    {menu.list.map((item) => {
                      return (<Menu.Item key={item.key}><span onClick={this.onMenuClick.bind(this,item)} >{item.name}</span></Menu.Item>);
                    })}
                  </SubMenu>
                );
              })}
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              Content
              {this.state.page==='IconPage' && (<IconPage />)}
              {this.state.page==='ButtonPage' && (<ButtonPage />)}
              
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default connect((state) => {
  // console.log(state, ownProps)
  return { newState: state.newState };
},(dispatch) => {
  // console.log(dispatch,ownProps)
  return {action: bindActionCreators(newsActions, dispatch)};
},(stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}, {
  pure: false,
  withRef: false
})(Index);