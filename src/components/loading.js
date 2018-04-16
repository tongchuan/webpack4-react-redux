import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import commonActions from 'Root/redux/actions/commonActions';
/*eslint-disable no-unused-vars*/
import { Spin, Icon } from 'antd';
/*eslint-enable no-unused-vars*/
class Loading extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // this.props.action.addTodo();
    // console.log(this.props);
  }
  render() {
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
    return (
      <div className={this.props.loading.isShow ? 'loading': 'hide'}>
        <Spin 
          size={this.props.loading.size}
          tip={this.props.loading.message}
          spinning={this.props.loading.spinning}
          indicator={antIcon} />
      </div>
    );
  }
}

export default connect((state) => {
  return { loading: state.commonState.loading };
},(dispatch) => {
  return {action: bindActionCreators(commonActions, dispatch)};
},(stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}, {
  pure: false,
  withRef: false
})(Loading);