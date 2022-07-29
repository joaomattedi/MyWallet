// Coloque aqui suas actions
const API = 'https://economia.awesomeapi.com.br/json/all';

export const userAction = (email) => ({
  type: 'USER_EMAIL',
  email,
});

export const fetchCurrenciesAction = () => async (dispatch) => {
  const response = await fetch(API);
  const data = Object.keys(await response.json()).filter((element) => element !== 'USDT');
  dispatch({
    type: 'FETCH_CURRENCIES',
    data,
  });
};

export const addExpenseAction = (expense) => async (dispatch) => {
  const response = await fetch(API);
  const data = await response.json();
  dispatch({
    type: 'ADD_EXPENSE',
    expense: { ...expense, exchangeRates: data },
  });
};

export const deleteExpenseAction = (id, expenses) => (dispatch) => {
  const newExpenses = expenses.filter(({ id: elementId }) => id !== elementId);
  dispatch({
    type: 'DEL_EXPENSE',
    expenses: newExpenses,
  });
};

export const editExpenseAction = (expense, expenses) => async (dispatch) => {
  const response = await fetch(API);
  const data = await response.json();
  const newExpenses = expenses.map((element) => {
    if (element.id === expense.id) return { ...expense, exchangeRates: data };
    return element;
  });
  dispatch({
    type: 'EDIT_EXPENSES',
    newExpenses,
  });
};

export const editorAction = (id) => ({
  type: 'EDITOR_TRUE',
  editor: true,
  idToEdit: id,
});
