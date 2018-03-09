import React from 'react';
import { connect } from 'react-redux';
import { initFields, updateToken } from 'actions';
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
  }
  componentWillMount() {
    if(localStorage) {
      this.props.updateToken(localStorage.getItem('token'));
    }
    this.fetchFields();
  }
  fetchFields() {
    requestFetchFields()
    .then(res => this.props.initFields(res.results))
    .catch(console.log)
    .finally(() => this.setState({ loading: false }));
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
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ textFields }) => ({ textFields });

export default connect(mapStateToProps, { initFields, updateToken })(App);
