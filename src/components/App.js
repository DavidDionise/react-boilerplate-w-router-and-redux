import React from 'react';
import { connect } from 'react-redux';
import { initFields, updateToken, toggleUserLoggedIn } from 'actions';
import { requestFetchFields } from 'api';
import { HomePageContainer, UpdateFieldModal, Spinner } from 'components';
import './styles.scss';

const Paragraph = props => {
  return <p>{props.field.text}</p>
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };

    this.handleClickLogout = this.handleClickLogout.bind(this);
  }

  handleClickLogout() {
    if(localStorage) {
      localStorage.setItem('token', '');
    }

    this.props.toggleUserLoggedIn(false);
  }
  fetchFields() {
    requestFetchFields()
    .then(res => {
      this.props.initFields(res.results)})
    .catch(console.log)
    .finally(() => {
      this.setState({ loading: false })
    });
  }
  componentWillMount() {
    if(localStorage) {
      this.props.updateToken(localStorage.getItem('token'));
    }
    this.fetchFields();
  }

  render() {
    return (
      <div className='app-container'>
        {this.state.loading ? (
          <div className='app-loading-page-container'>
            <Spinner/>
            <p>Loading . . .</p>
          </div>
        ) : (
          <div>
            <HomePageContainer />
            <UpdateFieldModal />
            {this.props.user.logged_in ? (
              <div
                className='logout-button'
                onClick={this.handleClickLogout}
                >
                Log Out
              </div>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ textFields, user }) => ({ textFields, user });

export default connect(mapStateToProps, { initFields, updateToken, toggleUserLoggedIn })(App);
