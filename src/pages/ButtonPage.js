import React from 'react';
/*eslint-disable no-unused-vars*/
import { Row, Col, Button, Radio, Icon } from 'antd';
/*eslint-enable no-unused-vars*/
export default class IconPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'large',
      icon: [
        {type: 'primary', name: 'Primary'},
        {type: 'dashed', name: 'dashed'},
        {type: 'danger', name: 'danger'},
        {type: '', name: 'Default'},
      ]
    };
    this.handleSizeChange = this.handleSizeChange.bind(this);
  }
  handleSizeChange(e) {
    this.setState({ size: e.target.value });
  }
  render() {
    return (
      <div>
        <Row>
          {this.state.icon.map((item, index) => {
            return (
              <Col key={index} span={2}>
                <Button type={item.type}>{item.name}</Button>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col span={24}>
            <Radio.Group value={this.state.size} onChange={this.handleSizeChange}>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Button type="primary" size={this.state.size}>Primary</Button>
            <Button size={this.state.size}>Normal</Button>
            <Button type="dashed" size={this.state.size}>Dashed</Button>
            <Button type="danger" size={this.state.size}>Danger</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
