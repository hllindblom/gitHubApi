import {
  ORGANIZATION_FETCH_SUCCEEDED,
  ORGANIZATION_FETCH_REQUESTED,
  INIT_REQUESTED,
  ZEN_FETCH_SUCCEEDED,
  OCTOCAT_FETCH_SUCCEEDED,
} from './actions';

const initialState = {
  organizations: null,
  zen: null,
  octocat: null,
  loading: true,
  loadingTable: true,
  error: null,
};

export default (
  state = initialState,
  { type, organizations, zen, octocat },
) => {
  switch (type) {
    case ORGANIZATION_FETCH_REQUESTED:
      return { ...state, loadingTable: true };
    case ORGANIZATION_FETCH_SUCCEEDED:
      return { ...state, organizations, loadingTable: false };
    case INIT_REQUESTED:
      return { ...state, loading: true };
    case ZEN_FETCH_SUCCEEDED:
      return { ...state, zen, loading: false };
    case OCTOCAT_FETCH_SUCCEEDED:
      return { ...state, octocat, loading: false };
    default:
      return state;
  }
};
