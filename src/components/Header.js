import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Header.css';
import myWalletLogo from '../images/myWallet.png';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <header className="headerContainer">
        <img className="headerImage" src={ myWalletLogo } alt="MyWallet Logo" />
        <div className="expensesValue">
          <p data-testid="total-field" className="totalField">
            {expenses.reduce((acc, { value, currency, exchangeRates }) => {
              const sum = Number(value) * exchangeRates[currency].ask;
              return (Number(acc) + sum).toFixed(2);
            }, '0.00')}
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
        <h3 data-testid="email-field">{`Usuário: ${email || 'joao@joao.com'}`}</h3>
      </header>
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
