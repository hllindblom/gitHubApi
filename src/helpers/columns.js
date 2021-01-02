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

// avatar_url: "https://avatars2.githubusercontent.com/u/44?v=4"
// description: null
// events_url: "https://api.github.com/orgs/errfree/events"
// hooks_url: "https://api.github.com/orgs/errfree/hooks"
// id: 44
// issues_url: "https://api.github.com/orgs/errfree/issues"
// login: "errfree"
// members_url: "https://api.github.com/orgs/errfree/members{/member}"
// node_id: "MDEyOk9yZ2FuaXphdGlvbjQ0"
// public_members_url: "https://api.github.com/orgs/errfree/public_members{/member}"
// repos_url: "https://api.github.com/orgs/errfree/repos"
// url: "https://api.github.com/orgs/errfree"
// __proto__: Object
