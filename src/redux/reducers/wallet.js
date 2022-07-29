// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  currentId: 0,
  columnsValue: [
    'Valor',
    'Tag',
    'Descrição',
    'Moeda',
    'Método de pagamento',
    'Câmbio utilizado',
    'Moeda de conversão',
    'Valor convertido',
    'Editar/Excluir',
  ],
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
  case 'DEL_EXPENSE':
    return ({
      ...state,
      expenses: action.expenses,
    });
  case 'EDIT_EXPENSES':
    return ({
      ...state,
      expenses: action.newExpenses,
      editor: false,
    });

  case 'EDITOR_TRUE':
    return ({
      ...state,
      editor: true,
    });

  default:
    return state;
  }
};

export default wallet;
