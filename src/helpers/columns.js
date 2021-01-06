/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Img } from './styled';

export default [
  {
    id: 'avatar',
    Header: '',
    accessor: 'avatar_url',
    Cell: props => <Img src={props.value} />,
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
