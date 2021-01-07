/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
    height: 1em;
`;

export default [
  {
    id: 'avatar',
    Header: '',
    accessor: 'avatar_url',
    Cell: props => <Logo src={props.value} />,
    disableSortBy: true,
  },
  {
    id: 'id',
    Header: 'Id',
    accessor: 'id',
  },
  {
    id: 'login',
    Header: 'Login',
    accessor: 'login',
  },
  {
    id: 'url',
    Header: 'Url',
    accessor: 'url',
  },
];
