import React from 'react';
/*eslint-disable no-unused-vars*/
import { Row, Col, Icon } from 'antd';
/*eslint-enable no-unused-vars*/
export default class ButtonPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: [
        {type: 'step-forward'},
        {type: 'step-backward'},
        {type: 'forward'},
        {type: 'backward'},
        {type: 'caret-right'},
        {type: 'caret-left'},
        {type: 'caret-down'},
        {type: 'caret-up'},
        {type: 'right-circle'},
        {type: 'circle-right'},
        {type: 'caret-circle-right'},
        {type: 'left-circle'},
        {type: 'circle-left'},
        {type: 'caret-circle-left'},
        {type: 'up-circle'},
        {type: 'circle-up'},
        {type: 'caret-circle-up'},
        {type: 'down-circle'},
        {type: 'circle-down'},
        {type: 'caret-circle-down'},
        {type: 'right-circle-o'},
        {type: 'circle-o-right'},
        {type: 'caret-circle-o-right'},
        {type: 'left-circle-o'},
        {type: 'circle-o-left'},
        {type: 'caret-circle-o-left'},
        {type: 'up-circle-o'},
        {type: 'circle-o-up'},
      ]
    };
  }
  render() {
    return (
      <Row>
        {this.state.icon.map((item, index) => {
          return (
            <Col key={index} span={1}>
              <Icon type={item.type} />
            </Col>
          );
        })}
      </Row>
    );
  }
}