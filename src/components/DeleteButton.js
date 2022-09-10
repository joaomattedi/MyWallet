import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteExpenseAction } from '../redux/actions';
import deleteIcon from '../images/trash-light.svg';
import '../styles/DeleteButton.css';

class DeleteButton extends Component {
  render() {
    const { id, expenses, delExpense } = this.props;
    return (
      <button
        data-testid="delete-btn"
        type="button"
        onClick={ () => delExpense(id, expenses) }
        className="deleteButton"
      >
        <img
          src={ deleteIcon }
          alt="Delete field"
        />
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
