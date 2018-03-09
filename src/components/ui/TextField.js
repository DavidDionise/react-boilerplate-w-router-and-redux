import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleShowUpdateFieldModal } from 'actions';

class TextField extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickField = this.handleClickField.bind(this);
    this.generateHTML = this.generateHTML.bind(this);
  }

  handleClickField() {
    const { user } = this.props;
    if(user.logged_in) {
      const current_field = this.props.textFields.fields.find(f => f.name == this.props.field_name);
      this.props.toggleShowUpdateFieldModal(true, current_field);
    }
  }
  generateHTML() {
    const current_field = this.props.textFields.fields.find(f => f.name == this.props.field_name);
    return { __html: current_field.markup };
  }

  render() {
    const {
      user,
      textFields,
      container_class_name,
      field_name
    } = this.props;
    const current_field = textFields.fields.find(f => f.name == field_name);

    return current_field ? (
      <div
        onClick={this.handleClickField}
        className={`text-field-container ${user.logged_in ? 'admin-user' : ''} ${container_class_name || ''}`}
        dangerouslySetInnerHTML={this.generateHTML()}
      />
    ) : null;
  }
}

TextField.propTypes = {
  container_class_name: PropTypes.string,
  field_name: PropTypes.string.isRequired
};

const mapStateToProps = ({ user, textFields }) => ({ user, textFields });

export default connect(mapStateToProps, { toggleShowUpdateFieldModal })(TextField);
