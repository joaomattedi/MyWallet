import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteExpenseAction } from '../redux/actions';

class DeleteButton extends Component {
  render() {
    const { id, expenses, delExpense } = this.props;
    return (
      <button
        data-testid="delete-btn"
        type="button"
        onClick={ () => delExpense(id, expenses) }
      >
        Delete
      </button>
    );
  }
}

DeleteButton.propTypes = {
  delExpense: PropTypes.func,
  expenses: PropTypes.array,
  id: PropTypes.number,
}.isRequired;

DeleteButton.propTypes = {
  id: PropTypes.number,
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  delExpense: (id, expense) => dispatch(deleteExpenseAction(id, expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
