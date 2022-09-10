import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import '../styles/Table.css';

class Table extends Component {
  render() {
    const { columns, expenses } = this.props;
    return (
      <table className="expensesTable">
        <thead>
          <tr>
            {columns.map((element) => (
              <th key={ element }>{element}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((element) => (
            <tr key={ element.id }>
              <td>{Number(element.value).toFixed(2)}</td>
              <td>{element.tag}</td>
              <td>{element.description}</td>
              <td>{element.exchangeRates[element.currency].name}</td>
              <td>{element.method}</td>
              <td>{Number(element.exchangeRates[element.currency].ask).toFixed(2)}</td>
              <td>Real</td>
              <td>
                {
                  (Number(element.value) * element.exchangeRates[element.currency].ask)
                    .toFixed(2)
                }
              </td>
              <td>
                <EditButton id={ element.id } />
                <DeleteButton id={ element.id } />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  columns: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  columns: wallet.columnsValue,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Table);
