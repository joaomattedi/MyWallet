// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  currentId: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_EXPENSE':
    return ({
      ...state,
      expenses: [...state.expenses, action.expense],
      currentId: state.currentId + 1,
    });
  case 'FETCH_CURRENCIES':
    return ({
      ...state,
      currencies: action.data,
    });

  default:
    return state;
  }
};

export default wallet;
