import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { userAction } from '../redux/actions';
import '../styles/Login.css';
import myWallet from '../images/myWallet.png';
import walletPic from '../images/walletPic.jpg';

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
      <div className="mainContainer">
        <div className="imageContainer">
          <img src={ walletPic } alt="walletImage" className="walletImage" />
        </div>
        <div className="formContainer">
          <img src={ myWallet } alt="MyWallet Logo" className="logoImage" />
          <form>
            <label htmlFor="email">
              <input
                data-testid="email-input"
                type="text"
                name="email"
                id="email"
                placeholder="email"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="password">
              <input
                data-testid="password-input"
                id="password"
                name="password"
                onChange={ this.handleChange }
                placeholder="password"
                type="password"
              />
            </label>
            <button
              type="button"
              disabled={ isInvalid }
              onClick={ this.handleClick }
              className="loginBtn"
            >
              Entrar
            </button>
          </form>
        </div>
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
