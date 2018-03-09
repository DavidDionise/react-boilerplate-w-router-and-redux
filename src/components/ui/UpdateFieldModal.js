import React, { Component } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import RichTextEditor from 'react-rte';
import { toggleShowUpdateFieldModal, updateField } from 'actions';
import { requestUpdateField } from 'api';

class UpdateFieldModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: RichTextEditor.createEmptyValue()
    };

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    const { _id } = this.props.textFields.current_field;
    requestUpdateField({ _id, markup: this.state.value.toString('html') })
    .then(res => {
      this.props.updateField(res.updated_field);
    })
    .catch(e => {
      console.log(e);
      this.props.toggleShowUpdateFieldModal(false);
    });
  }

  componentWillUpdate(next_props) {
    const curr_show = this.props.textFields.show_update_modal;
    const next_show = next_props.textFields.show_update_modal;

    if(!curr_show && next_show) {
      const { markup } = next_props.textFields.current_field;
      let value;
      if(markup) {
        value = RichTextEditor.createValueFromString(markup, 'html');
      }
      else {
        value = RichTextEditor.createEmptyValue()
      }
      this.setState({ value });
    }
    else if(curr_show && !next_show) {
      this.setState({ text: RichTextEditor.createEmptyValue() });
    }
  }

  render() {
    if(this.props.textFields.show_update_modal) {
      const { show_update_modal, current_field } = this.props.textFields;

      return (
        <Modal
          show={show_update_modal && current_field != null}
          onHide={() => this.props.toggleShowUpdateFieldModal(false)}
          >
          <Modal.Header>
            <Modal.Title>Update Field</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <RichTextEditor
              value={this.state.value}
              onChange={value => this.setState({ value })}
            />
          </Modal.Body>
          <Modal.Footer>
            <Row>
              <Col md={6} xs={6}>
                <Button
                  bsStyle='default'
                  block
                  onClick={() => this.props.toggleShowUpdateFieldModal(false)}
                  >
                  Cancel
                </Button>
              </Col>
              <Col md={6} xs={6}>
                <Button
                  bsStyle='primary'
                  block
                  onClick={this.handleSave}
                  >
                  Save
                </Button>
              </Col>
            </Row>
          </Modal.Footer>
        </Modal>
      );
    }
    else {
      return null;
    }
  }
}

const mapStateToProps = ({ textFields }) => ({ textFields });

export default connect(mapStateToProps, { toggleShowUpdateFieldModal, updateField })(UpdateFieldModal);
