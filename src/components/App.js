import React from 'react';
import { connect } from 'react-redux';
import { updateHomepageBody } from 'actions';

import './styles.scss';

class App extends React.Component {
  render() {
    const { homepage_body } = this.props.textValues;
    return (
      <div className='app-continer'>
        <p>Current Text Value : {homepage_body}</p>
        <hr />
        <p>Update Value</p>
        <input
          onChange={e => this.props.updateHomepageBody(e.target.value)}
          value={homepage_body}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ textValues }) => ({ textValues });

export default connect(mapStateToProps, { updateHomepageBody })(App);
