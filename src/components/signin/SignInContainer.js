import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSignInUser } from 'api';
import { toggleUserLoggedIn } from 'actions';
import { Panel, FormControl, Button, Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';

class SignInContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { email, password } = this.state;
    requestSignInUser({ email, password })
    .then(({ updated_token }) => {
      this.props.toggleUserLoggedIn(true, updated_token);
      browserHistory.push('/');
    })
    .catch(e => {
      console.log(e);
      if(e.name = 'ValidationError') {
        $.notify('Invalid Login', 'error');
      }
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
              className='mb-sm'
            />
            <FormControl
              value={this.state.password}
              placeholder='Enter Password'
              onChange={e => this.setState({ password: e.target.value })}
              className='mb-sm'
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

export default connect(null, { toggleUserLoggedIn })(SignInContainer);
