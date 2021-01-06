import {
  ORGANIZATION_FETCH_SUCCEEDED,
  ORGANIZATION_FETCH_FAILED,
  ORGANIZATION_FETCH_REQUESTED,
  EMOJI_FETCH_SUCCEEDED,
  EMOJI_FETCH_FAILED,
  EMOJI_FETCH_REQUESTED,
  INIT_REQUESTED,
  ZEN_FETCH_SUCCEEDED,
  INIT_FAILED,
  OCTOCAT_FETCH_SUCCEEDED,
} from './actions';

const initialState = {
  organizations: null,
  emojis: null,
  zen: null,
  octocat: null,
  loading: true,
  loadingTable: true,
  loadingEmoji: true,
  error: null,
  errorTable: null,
  errorEmoji: null,
};

export default (
  state = initialState,
  { type, organizations, emojis, zen, octocat, error, errorTable, errorEmoji },
) => {
  switch (type) {
    case ORGANIZATION_FETCH_REQUESTED:
      return { ...state, loadingTable: true };
    case ORGANIZATION_FETCH_SUCCEEDED:
      return { ...state, organizations, loadingTable: false };
    case ORGANIZATION_FETCH_FAILED:
      return { ...state, errorTable, loadingTable: false };
    case EMOJI_FETCH_REQUESTED:
      return { ...state, loadingEmoji: true };
    case EMOJI_FETCH_SUCCEEDED:
      return { ...state, emojis, loadingEmoji: false };
    case EMOJI_FETCH_FAILED:
      return { ...state, errorEmoji, loadingEmoji: false };
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
