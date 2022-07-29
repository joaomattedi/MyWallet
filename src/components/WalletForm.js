import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpenseAction, fetchCurrenciesAction } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const sendState = this.state;
    const { addExpense, currentId } = this.props;
    this.setState({
      value: '',
      description: '',
    });
    addExpense({ ...sendState, id: currentId });
  }

  render() {
    const { currencies } = this.props;
    const { value, description } = this.state;
    return (
      <div>
        <label htmlFor="value">
          <input
            data-testid="value-input"
            id="value"
            name="value"
            onChange={ this.handleChange }
            value={ value }
            type="text"
          />
        </label>
        <label htmlFor="description">
          <input
            data-testid="description-input"
            id="description"
            onChange={ this.handleChange }
            name="description"
            value={ description }
            type="text"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            onChange={ this.handleChange }
            data-testid="currency-input"
            name="currency"
            id="currency"
          >
            {currencies.map((element) => (
              <option key={ element } value={ element }>{element}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método:
          <select
            onChange={ this.handleChange }
            name="method"
            id="method"
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          TAG:
          <select
            onChange={ this.handleChange }
            name="tag"
            id="tag"
            data-testid="tag-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  currentId: wallet.currentId,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrenciesAction()),
  addExpense: (expense) => dispatch(addExpenseAction(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
