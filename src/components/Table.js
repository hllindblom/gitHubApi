import React from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import PropTypes from 'prop-types';
import { StyledTable, TableRow, SortIcon, PaginationWrapper, PaginationButton, Input, PaginationSelect } from './styled';
import columns from '../helpers/columns';

const Table = ({ data, openModal }) => {
  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns, data, initialState: { pageIndex: 0, pageSize: 20 },
    },
    useSortBy,
    usePagination,
  );

  const getSortIcon = (column) => {
    if (!column.isSorted) return '';
    if (column.isSortedDesc) return '▼';
    return '▲';
  };

  const handleShow = (rowData) => {
    openModal(rowData);
  };

  return (
    <>
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
          {page.map(row => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()} onClick={() => handleShow(row.original)}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </TableRow>
            );
          })}
        </tbody>
      </StyledTable>
      <PaginationWrapper>
        <PaginationButton type="button" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </PaginationButton>
        <PaginationButton type="button" onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </PaginationButton>
        <PaginationButton type="button" onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </PaginationButton>
        <PaginationButton type="button" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </PaginationButton>
        <span>
          Page <strong>{pageIndex + 1} of {pageOptions.length} </strong>
        </span>
        <span>
          | Go to page:
          <Input
            type="number"
            min="1"
            max={pageCount}
            defaultValue={pageIndex + 1}
            onChange={e => {
              const newPage = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(newPage);
            }}
            style={{ width: '100px' }}
          />
        </span>
        <PaginationSelect
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30].map(size => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </PaginationSelect>
      </PaginationWrapper>
    </>
  );
};

Table.propTypes = {
  data: PropTypes.array,
  openModal: PropTypes.func,
};

export default Table;
