import {
  ORGANIZATION_FETCH_SUCCEEDED,
  ORGANIZATION_FETCH_FAILED,
  ORGANIZATION_FETCH_REQUESTED,
  INIT_REQUESTED,
  ZEN_FETCH_SUCCEEDED,
  INIT_FAILED,
  OCTOCAT_FETCH_SUCCEEDED,
} from './actions';

const initialState = {
  organizations: null,
  zen: null,
  octocat: null,
  loading: true,
  loadingTable: true,
  error: null,
  errorTable: null,
};

export default (
  state = initialState,
  { type, organizations, zen, octocat, error, errorTable },
) => {
  switch (type) {
    case ORGANIZATION_FETCH_REQUESTED:
      return { ...state, loadingTable: true };
    case ORGANIZATION_FETCH_SUCCEEDED:
      return { ...state, organizations, loadingTable: false };
    case ORGANIZATION_FETCH_FAILED:
      return { ...state, errorTable, loadingTable: false };
    case INIT_REQUESTED:
      return { ...state, loading: true };
    case ZEN_FETCH_SUCCEEDED:
      return { ...state, zen, loading: false };
    case OCTOCAT_FETCH_SUCCEEDED:
      return { ...state, octocat, loading: false };
    case INIT_FAILED:
      return { ...state, error, loading: false };
    default:
      return state;
  }
};
