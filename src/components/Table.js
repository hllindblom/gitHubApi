import React from 'react';
import { useTable, useSortBy } from 'react-table';
import PropTypes from 'prop-types';
import { StyledTable, SortIcon } from './styled';
import columns from '../helpers/columns';

const Table = ({ data }) => {
  const defaultColumn = React.useMemo(
    () => ({
      width: 150,
    }),
    [],
  );

  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    rows,
    prepareRow,
  } = useTable(
    {
      columns, data, defaultColumn,
    },
    useSortBy,
  );

  const getSortIcon = (column) => {
    if (!column.isSorted) return '';
    if (column.isSortedDesc) return '▼';
    return '▲';
  };

  return (
    <StyledTable {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <SortIcon>{getSortIcon(column)}</SortIcon>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

Table.propTypes = {
  data: PropTypes.array,
};

export default Table;
