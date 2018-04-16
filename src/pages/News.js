import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import newsActions from 'Root/redux/actions/newsActions';

/** 可用 eslint 检查不过@操作符（修饰符）
  @connect((state, ownProps)=>{
    return { newState: state.newState };
  },(dispatch) => {
    return {action: bindActionCreators(newsActions, dispatch)};
  },(stateProps, dispatchProps, ownProps) => {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
  }, {
    pure: false,
    withRef: false
  })
  export default class News extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      this.props.action.addTodo();
    }
    render() {
      console.log(this);
      return (
        <div>news {this.props.newState.g}===={this.props.newState.age}</div>
      );
    }
  }
 */
class News extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.action.addTodo();
  }
  render() {
    console.log(this);
    return (
      <div>news {this.props.newState.g}===={this.props.newState.age}</div>
    );
  }
}

export default connect((state) => {
  return { newState: state.newState };
},(dispatch) => {
  return {action: bindActionCreators(newsActions, dispatch)};
},(stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}, {
  pure: false,
  withRef: false
})(News);