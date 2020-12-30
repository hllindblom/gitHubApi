export const ORGANIZATION_FETCH_REQUESTED = 'ORGANIZATION_FETCH_REQUESTED';
export const ORGANIZATION_FETCH_SUCCEEDED = 'ORGANIZATION_FETCH_SUCCEEDED';
export const ORGANIZATION_FETCH_FAILED = 'ORGANIZATION_FETCH_FAILED';
export const INIT_REQUESTED = 'INIT_REQUESTED';
export const ZEN_FETCH_SUCCEEDED = 'ZEN_FETCH_SUCCEEDED';
export const ZEN_FETCH_FAILED = 'ZEN_FETCH_FAILED';
export const OCTOCAT_FETCH_SUCCEEDED = 'OCTOCAT_FETCH_SUCCEEDED';
export const OCTOCAT_FETCH_FAILED = 'OCTOCAT_FETCH_FAILED';

export const fetchAllOrganizations = () => ({ type: ORGANIZATION_FETCH_REQUESTED });

export const receiveAllOrganizations = (organizations) => ({
  type: ORGANIZATION_FETCH_SUCCEEDED,
  organizations,
});

export const allOrganizationsFetchFailed = (errorMessage) => ({
  type: ORGANIZATION_FETCH_FAILED,
  message: errorMessage,
});

export const init = () => ({ type: INIT_REQUESTED });

export const receiveZen = (zen) => ({
  type: ZEN_FETCH_SUCCEEDED,
  zen,
});

export const zenFetchFailed = (errorMessage) => ({
  type: ZEN_FETCH_FAILED,
  message: errorMessage,
});

export const receiveOctocat = (octocat) => ({
  type: OCTOCAT_FETCH_SUCCEEDED,
  octocat,
});

export const octocatFetchFailed = (errorMessage) => ({
  type: OCTOCAT_FETCH_FAILED,
  message: errorMessage,
});
