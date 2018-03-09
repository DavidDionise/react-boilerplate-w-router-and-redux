import React, { Component } from 'react';
import { requestSignInUser } from 'api';
import { Panel, FormControl, Button, Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';

class SignInContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loading: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({ loading: true });
    const { email, password } = this.state;
    requestSignInUser({ email, password })
    .then(res => browserHistory.push('/'))
    .catch(e => {
      console.log(e);
    });
  }

  render() {
    return (
      <div className='signin-form-container'>
        <Panel>
          <Panel.Heading>Sign In as Admin User</Panel.Heading>
          <Panel.Body>
            <FormControl
              value={this.state.email}
              placeholder='Enter Email'
              onChange={e => this.setState({ email: e.target.value })}
            />
            <FormControl
              value={this.state.password}
              placeholder='Enter Password'
              onChange={e => this.setState({ password: e.target.value })}
            />
            <Row>
              <Col md={12} xs={12}>
                <Button
                  bsStyle='primary'
                  onClick={this.handleSubmit}
                  block
                  >
                  Submit
                </Button>
              </Col>
            </Row>
          </Panel.Body>
        </Panel>
      </div>
    )
  }
}

export default SignInContainer;
