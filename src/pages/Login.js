import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { userAction } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isInvalid: true,
    };
  }

  handleValidation = () => {
    const minPassword = 6;
    const { password, email } = this.state;
    const passwordCheck = (password.length >= minPassword);
    const regexEmail = /^\w+([/.-]?\w+)@\w+([/.-]?\w+)(.\w{2,3})+$/;
    const emailCheck = email.match(regexEmail);

    return !(emailCheck && passwordCheck);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.setState({ isInvalid: this.handleValidation() });
    });
  };

  handleClick = () => {
    const { email } = this.state;
    const { history, saveEmail } = this.props;
    saveEmail(email);
    history.push('/carteira');
  }

  render() {
    const { isInvalid } = this.state;
    return (
      <div>
        <h2>MY WALLET</h2>
        <input
          data-testid="email-input"
          type="text"
          name="email"
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          name="password"
          onChange={ this.handleChange }
          type="text"
        />
        <button
          type="button"
          disabled={ isInvalid }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  saveEmail: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(userAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
