// Coloque aqui suas actions
export const userAction = (email) => ({
  type: 'USER_EMAIL',
  email,
});

export const fetchCurrenciesAction = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = Object.keys(await response.json()).filter((element) => element !== 'USDT');
  dispatch({
    type: 'FETCH_CURRENCIES',
    data,
  });
};

export const addExpenseAction = (expense) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  dispatch({
    type: 'ADD_EXPENSE',
    expense: { ...expense, exchangeRates: data },
  });
};
