import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editorAction } from '../redux/actions';

class EditButton extends Component {
  render() {
    const { edit, id } = this.props;
    return (
      <button
        type="button"
        data-testid="edit-btn"
        onClick={ () => edit(id) }
      >
        Editar
      </button>
    );
  }
}

EditButton.propTypes = {
  edit: PropTypes.func,
  id: PropTypes.number,
}.isRequired;

EditButton.propTypes = {
  edit: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  edit: (id) => dispatch(editorAction(id)),
});

export default connect(null, mapDispatchToProps)(EditButton);
