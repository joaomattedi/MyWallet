import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <h3 data-testid="email-field">{email}</h3>
        <p data-testid="total-field">
          {expenses.reduce((acc, { value, currency, exchangeRates }) => {
            const sum = Number(value) * exchangeRates[currency].ask;
            return (Number(acc) + sum).toFixed(2);
          }, 0)}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);
